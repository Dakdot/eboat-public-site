import Link from "next/link";

export default function SupportUsPage() {
  return (
    <div className="w-full">
      <div className="relative">
        <div>
          <img
            src={"/support/cover.jpg"}
            className=" brightness-75 object-cover w-full h-[400px]"
            alt="Manned Vessel in water"
          />
          <svg
            className="w-full h-12 -translate-y-12"
            style={{ pointerEvents: "none", position: "absolute", left: 0 }}
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 50,12 100,0 100,12 0,12" fill="#44403b" />
          </svg>
        </div>
        <h1 className="absolute inset-0 flex items-center justify-center text-center text-white font-inter font-bold text-6xl text-shadow-md">
          Support Us
        </h1>
      </div>
      <div className="flex flex-col gap-12 items-center bg-gradient-to-b text-white from-stone-700 to-stone-600 pt-12 pb-12 px-4 text-lg">
        <div className="max-w-3xl flex flex-col gap-12 items-center">
          <h2 className="font-bold font-sans text-4xl">Our Sponsors</h2>
          <div className="flex flex-col gap-6 items-center">
            <h2 className="font-sans font-light text-3xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d9e0e5] to-[#afbdc6] font-extrabold">
                Platinum
              </span>{" "}
              Sponsors
            </h2>
            <a
              href="https://navalengineers.org"
              rel="noopener noreferrer"
              target="_"
              className="link grayscale hover:grayscale-0 transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={"/support/plat-1.png"}
                  width={100}
                  alt="American Society of Naval Engineers logo"
                />
                American Society of Naval Engineers
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <h2 className="font-sans font-light text-3xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fde68a]  to-[#f59e0b] font-extrabold">
                Gold
              </span>{" "}
              Sponsors
            </h2>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <h2 className="font-sans font-light text-3xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f9b9b] via-[#a3a3a3] to-[#e5e5e5] font-extrabold">
                Silver
              </span>{" "}
              Sponsors
            </h2>
            <a
              href="https://www.dhxelectricmachines.com/"
              rel="noopener noreferrer"
              target="_"
              className="link grayscale hover:grayscale-0 transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={"/support/silver-1.png"}
                  width={100}
                  alt="DHX Electric Machines logo"
                />
                DHX Electric Machines
              </div>
            </a>
          </div>
        </div>
      </div>
      <svg
        className="w-full h-12 pointer-events-none"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,0 100,0 100,4 50,16 0,4"
          fill="black"
          opacity="0.5"
          filter="blur(2px)"
        />

        <polygon points="0,0 100,0 50,12" fill="#57534d" />
      </svg>
      <div
        className="flex flex-col items-center bg-gradient-to-b from-stone-300 to-stone-50 -mt-12 pt-20 pb-12 px-4 text-lg"
        id="become-a-sponsor"
      >
        <div className="flex flex-col items-center gap-12 max-w-3xl">
          <h2 className="font-bold font-sans text-4xl" id="team">
            Become a Sponsor
          </h2>
          <div className="space-y-8 md:space-y-12 w-full">
            <p>
              Through our platform we offer outreach opportunities with
              students, and brand visibility on our boat, team gear, and media.
              Your sponsorship will directly support our ability to push the
              boundaries of electric propulsion, enable us to acquire advanced
              parts and materials, push our vessels to their limits, and ensure
              that the team can travel to competitions and industry events that
              will further increase brand awareness.
            </p>
          </div>
          <a
            href="mailto:stevenseboat@gmail.com"
            className="relative inline-flex items-center justify-center px-8 py-4 border border-zinc-500 rounded-full bg-zinc-800 text-white overflow-visible group hover:scale-[1.02] transition-transform"
          >
            {/* outside glow */}
            <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 opacity-30 group-hover:opacity-40 blur-3xl transform scale-105 transition-all duration-300 pointer-events-none" />
            {/* inner gradient / highlight */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 opacity-0 group-hover:opacity-80 blur-xl transition-opacity duration-300 mix-blend-screen pointer-events-none" />
            <span className="relative z-10">Send us a message</span>
          </a>
          <div className="w-full text-base text-black/50">
            <p>
              If the button above does not work, send a message to{" "}
              <a href="mailto:stevenseboat@gmail.com" className="link">
                stevenseboat@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <svg
        className="w-full h-12 pointer-events-none -mb-12"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,0 100,0 100,4 50,16 0,4"
          fill="black"
          opacity="0.5"
          filter="blur(2px)"
        />

        <polygon points="0,0 100,0 50,12" fill="#fafaf9" />
      </svg>
    </div>
  );
}
