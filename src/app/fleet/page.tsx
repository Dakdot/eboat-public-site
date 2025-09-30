import Link from "next/link";

export default function FleetPage() {
  return (
    <div className="w-full">
      <div className="relative">
        <div>
          <img
            src={"/fleet/cover.jpg"}
            className=" brightness-75 object-cover w-full h-[400px]"
            style={{ objectPosition: "center 80%" }}
            alt="Manned Vessel in water"
          />
          <svg
            className="w-full h-12 -translate-y-12"
            style={{ pointerEvents: "none", position: "absolute", left: 0 }}
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 50,12 100,0 100,12 0,12" fill="#7d1524" />
          </svg>
        </div>
        <h1 className="absolute inset-0 flex items-center justify-center text-center text-white font-inter font-bold text-6xl text-shadow-md">
          The Fleet
        </h1>
      </div>

      <div className="flex flex-col gap-12 items-center bg-gradient-to-b to-[#a32638] from-[#7d1524] pt-12 pb-12 text-white">
        <h2>Stevens Electric Boatworks currently has two major projects:</h2>
        <div className="flex gap-6 w-3xl">
          <img
            src={"/fleet/manned-1.jpg"}
            className="rounded-full aspect-square shadow border"
            width={250}
            alt=""
          />
          <div className="flex flex-col justify-center gap-2">
            <div>
              <h4 className="text-white/75">Manned Vessel</h4>
              <h3 className="text-4xl font-bold font-inter">Lightning</h3>
            </div>
            <p>
              Lightning is a fully electric planing speedboat engineered for
              spirited on‑water performance and refined day cruising. Its
              lightweight planing hull combined with a high‑power electric drive
              delivers instant torque, rapid acceleration and an efficient,
              quiet high‑speed glide.
            </p>
            <Link
              href={"/fleet/manned"}
              className="underline decoration-dotted hover:decoration-solid"
            >
              Learn more about Lightning
            </Link>
          </div>
        </div>

        <div className="flex gap-6 w-3xl justify-end">
          <div className="flex flex-col justify-center text-right gap-2">
            <div>
              <h4 className="text-white/75">Unmanned Autonomous Vessel</h4>
              <h3 className="text-4xl font-bold font-inter">Thunder</h3>
            </div>
            <p>Little boat description.</p>
            <Link
              href={"/fleet/unmanned"}
              className="underline decoration-dotted hover:decoration-solid"
            >
              Learn more about Unmanned Autonomous Vessel
            </Link>
          </div>
          <img
            src={"/placeholder-1.jpg"}
            className="rounded-full"
            width={250}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
