"use client";

import { useEffect, useRef, useState } from "react";

export type DataValue = { value: unknown; timestamp: Date; replay: boolean };
export type SocketMessage = { type: string; [k: string]: unknown };

function flattenObject(obj: unknown, prefix = ""): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const key in obj as Record<string, unknown>) {
    const value = (obj as Record<string, unknown>)[key];
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      // Recursively flatten nested objects
      Object.assign(result, flattenObject(value, fullKey));
    } else {
      result[fullKey] = value;
    }
  }

  return result;
}

export default function LivePage() {
  const [data, setData] = useState<Map<string, DataValue>>(new Map());
  const [isConnecting, setIsConnecting] = useState(true);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (wsRef.current) return;
    const ws = new WebSocket("wss://shore.stevenseboat.org/api");
    wsRef.current = ws;
    ws.addEventListener("open", () => {
      console.log(`Connected to WebSocket on ${ws.url}`);
      setIsConnecting(false);
      ws.send(
        JSON.stringify({
          type: "ident",
          message: "client",
        }),
      );
    });

    ws.addEventListener("message", (e) => {
      const parsed = JSON.parse(e.data) as SocketMessage;
      if (parsed.type === "data") {
        const flattened = flattenObject(parsed.payload);

        setData((s) => {
          const newDataMap = new Map(s);
          for (const key in flattened) {
            newDataMap.set(key, {
              value: flattened[key],
              timestamp: new Date(),
              replay: (parsed.replay as boolean) || false,
            });
          }
          return newDataMap;
        });
      }
    });
  }, [data]);

  return (
    <div>
      <div className="relative">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/m3kR2KK8TEs?si=0X_vRl52hOGVvhaw&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="not-md:hidden flex gap-2 absolute top-0 right-0 text-white bg-black/25 p-2 backdrop-blur-lg rounded-bl-md border-b border-l border-white/25 font-sans">
          <div className="flex flex-col items-center">
            <p className="text-sm">SPEED</p>
            <p className="text-3xl px-4">
              {data.get("speed")
                ? (data.get("speed")?.value as number).toFixed()
                : "---"}{" "}
              kt
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm">POWER</p>
            <p className="text-3xl px-4">
              {data.get("speed")
                ? (
                    ((data.get("bms.pack_current_raw")?.value as number) *
                      (data.get("bms.pack_voltage_raw")?.value as number)) /
                    1000
                  ).toFixed()
                : "---"}{" "}
              kW
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm">RPM</p>
            <p className="text-3xl px-4">
              {data.get("speed")
                ? (data.get("motors.rpm")?.value as number).toFixed()
                : "---"}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-center gap-2 p-4 font-sans text-white">
        <div className="flex flex-col items-center">
          <p className="text-sm">SPEED</p>
          <p className="text-3xl px-4">
            {data.get("speed")
              ? (data.get("speed")?.value as number).toFixed()
              : "---"}{" "}
            kt
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">POWER</p>
          <p className="text-3xl px-4">
            {data.get("speed")
              ? (
                  ((data.get("bms.pack_current_raw")?.value as number) *
                    (data.get("bms.pack_voltage_raw")?.value as number)) /
                  1000
                ).toFixed()
              : "---"}{" "}
            kW
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">RPM</p>
          <p className="text-3xl px-4">
            {data.get("speed")
              ? (data.get("motors.rpm")?.value as number).toFixed()
              : "---"}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
