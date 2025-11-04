import { HomeLinks } from "@/components/home-links";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <div>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="relative -z-20 object-cover w-full h-[500px] md:h-[900px]"
          >
            <source src="/landing-1.mp4" type="video/mp4" />
            <source src="/landing.webm" type="video/webm" />
            Uh-oh! Your browser does not support the video tag.
          </video>
          <div className="absolute top-[100px] md:top-[200px] right-0 left-0 flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <img
                src={"/eboat-logo-red.png"}
                width={150}
                alt="Stevens Electric Boatworks Logo"
                className="pointer-events-none"
              />
              <div>
                <h2 className="text-white/75 text-xl">
                  Stevens Institute of Technology
                </h2>
                <h1 className="font-inter font-bold text-3xl md:text-6xl text-white">
                  Electric Boatworks
                </h1>
              </div>
            </div>
            <HomeLinks />
          </div>
        </div>
        <svg
          className="w-full h-12 -translate-y-12"
          style={{ pointerEvents: "none", position: "absolute", left: 0 }}
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 50,12 100,0 100,12 0,12" fill="#44403b" />
        </svg>

        <div className="flex flex-col py-16 text-white bg-gradient-to-b from-stone-700 to-stone-600 w-full relative items-center">
          <div className="flex gap-6 items-center flex-col md:flex-row px-4">
            <img
              src={"/landing-2.jpg"}
              width={400}
              className="rounded-sm border shadow"
              alt="Electric boat on a trailer"
            />
            <div className="lg:max-w-xl space-y-2 md:text-lg text-white/85">
              <h2 className="text-2xl md:text-4xl font-inter text-white">
                Engineering the <b>future</b> of sustainable watercraft.
              </h2>
              <p>
                We’re a student-driven team pioneering high-performance electric
                boats for national competitions. From design to launch, our
                mission is to prove that clean technology can thrive on the
                water.
              </p>
              <Link
                className="underline decoration-dotted hover:decoration-solid"
                href={"/fleet"}
              >
                Explore our fleet
              </Link>
            </div>
          </div>
        </div>
        <svg
          className="w-full h-12 pointer-events-none absolute left-0 "
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          style={{ zIndex: 10 }}
        >
          <polygon
            points="0,0 100,0 100,4 50,16 0,4"
            fill="black"
            opacity="0.3"
            filter="blur(2px)"
          />

          <polygon points="0,0 100,0 50,12" fill="#57534d" />
        </svg>
        <div className="flex flex-col pt-20 pb-16 bg-gradient-to-b from-stone-200 to-stone-50 w-full relative items-center">
          <div className="flex gap-6 items-center flex-col px-4 md:flex-row">
            <div className="lg:max-w-xl space-y-2 md:text-lg text-right text-black/80">
              <h2 className="text-2xl md:text-4xl font-inter text-black">
                The <b>crew</b> behind the current.
              </h2>
              <p>
                Our team brings together students from diverse disciplines —
                united by a shared goal: to push the boundaries of marine
                engineering and renewable energy.
              </p>
              <Link
                className="underline decoration-dotted hover:decoration-solid"
                href={"/about"}
              >
                Meet the team
              </Link>
            </div>
            <img
              src={"/landing-3.jpg"}
              className="rounded-sm border shadow md:w-[400px]"
              alt="Electric boat on a trailer"
            />
          </div>
        </div>
        <svg
          className="w-full h-12 pointer-events-none absolute left-0 "
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          style={{ zIndex: 10 }}
        >
          <polygon
            points="0,0 100,0 100,4 50,16 0,4"
            fill="black"
            opacity="0.3"
            filter="blur(2px)"
          />

          <polygon points="0,0 100,0 50,12" fill="#fafaf9" />
        </svg>
        {/* PEP highlight */}
        <div className="flex flex-col gap-4 pt-20 pb-8 items-center md:text-lg px-4 bg-gradient-to-b from-stone-700 to-stone-600 text-white">
          <span className="relative rounded-full px-6 py-3">
            <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-extrabold font-sans bg-gradient-to-r from-[#fde68a] to-[#f59e0b] bg-clip-text text-transparent filter blur-2xl opacity-70 animate-pulse pointer-events-none">
              First Place
            </span>
            <span className="relative z-10 flex items-center justify-center text-4xl md:text-6xl font-extrabold font-sans bg-gradient-to-r from-[#fde68a] to-[#f59e0b] bg-clip-text text-transparent">
              First Place
            </span>
          </span>
          <span className="text-sm text-white/70">
            ASNE&apos;s Promoting Electric Propulsion National Competition
          </span>
          <h2 className="text-2xl md:text-4xl font-inter text-center ">
            2025 Planing Division
          </h2>
          <a
            href={"https://www.navalengineers.org/PEP25"}
            className="link text-white/75"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn more
          </a>
        </div>

        {/* bottom chevron for PEP section */}
        <svg
          className="w-full h-12 pointer-events-none absolute left-0 "
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          style={{ zIndex: 10 }}
        >
          <polygon
            points="0,0 100,0 100,4 50,16 0,4"
            fill="black"
            opacity="0.3"
            filter="blur(2px)"
          />

          <polygon points="0,0 100,0 50,12" fill="#57534d" />
        </svg>

        <div className="flex flex-col gap-8 pt-20 pb-16 items-center md:text-lg ">
          <h2 className="text-2xl md:text-4xl font-inter">Our Supporters</h2>
          <div className="flex gap-12 items-center overflow-x-auto px-4">
            <a
              href="https://navalengineers.org"
              rel="noopener noreferrer"
              target="_"
              className="grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={"/support/plat-1.png"}
                width={100}
                alt="American Society of Naval Engineers logo"
              />
            </a>
            <a
              href="https://sname.org/"
              rel="noopener noreferrer"
              target="_"
              className="link grayscale hover:grayscale-0 transition-all"
            >
              <img src={"/support/gold-1.png"} width={100} alt="SNAME logo" />
            </a>
            <a
              href="https://www.dhxelectricmachines.com/"
              rel="noopener noreferrer"
              target="_"
              className="link grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={"/support/silver-1.png"}
                width={100}
                alt="DHX Electric Machines logo"
              />
            </a>
          </div>
          <Link
            href={"/support-us#become-a-sponsor"}
            className="underline decoration-dotted hover:decoration-solid"
          >
            Learn how to support us
          </Link>
        </div>
        <svg
          className="w-full h-12 pointer-events-none absolute left-0 "
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          style={{ zIndex: 10 }}
        >
          <polygon
            points="0,0 100,0 100,4 50,16 0,4"
            fill="black"
            opacity="0.3"
            filter="blur(2px)"
          />

          <polygon points="0,0 100,0 50,12" fill="#ffffff" />
        </svg>

        {/* <div className="flex flex-col pt-20 pb-16 items-center md:text-lg text-white bg-gradient-to-b to-[#a32638] from-[#7d1524]">
          <h2 className="text-2xl md:text-4xl font-inter">Get Involved</h2>
          <Link
            href={"/support-us"}
            className="underline decoration-dotted hover:decoration-solid"
          >
            Learn how to join us
          </Link>
        </div>
        <svg
          className="w-full h-12 pointer-events-none -mb-12"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          style={{ zIndex: 10 }}
        >
          <polygon
            points="0,0 100,0 100,4 50,16 0,4"
            fill="black"
            opacity="0.3"
            filter="blur(2px)"
          />

          <polygon points="0,0 100,0 50,12" fill="#a32638" />
        </svg> */}
      </div>
    </div>
  );
}
