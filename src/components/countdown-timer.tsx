"use client";

import { useEffect, useState } from "react";

const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, "0");

export const CountdownTimer = ({ to }: { to: Date }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {}, []);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 500);
    return () => clearInterval(interval);
  }, []);

  const diffMs = Math.max(0, to.getTime() - now.getTime());

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  return (
    <div>
      <div className="relative border-4 border-white/20 shadow-xl rounded-2xl bg-[#230302]">
        <p className="font-seven-segment py-2 px-4 text-[32pt] md:text-[75pt] lg:text-[100pt] absolute top-0 left-0 right-0 bottom-0 text-rose-600/5">
          88:88:88:88
        </p>
        <p className="font-seven-segment py-2 px-4 text-[32pt] md:text-[75pt] lg:text-[100pt] z-10 text-rose-500">
          {zeroPad(days, 2)}:{zeroPad(hours, 2)}:{zeroPad(minutes, 2)}:
          {zeroPad(seconds, 2)}
        </p>
      </div>
    </div>
  );
};
