import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full">
      <div
        className="flex flex-col relative h-[400px] pt-12 items-center justify-center text-white w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/about-1.jpg")',
        }}
      >
        <h1 className=" text-6xl font-inter font-bold text-shadow-md">
          About Us
        </h1>
        <svg
          className="w-full h-12 absolute bottom-0 left-0 pointer-events-none"
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 50,12 100,0 100,12 0,12" fill="#d6d3d1" />
        </svg>
      </div>

      <div className="flex flex-col gap-12 items-center bg-gradient-to-b from-stone-300 to-stone-50 pt-12 pb-12 px-4 text-lg">
        <div className="max-w-3xl space-y-4">
          <p>
            Stevens Electric Boatworks is a student-led engineering team
            dedicated to advancing sustainable marine technology. Each year, we
            design, construct, and test two vessels: a manned electric boat and
            an unmanned autonomous electric boat.
          </p>
          <p>
            Our team competes in the American Society of Naval Engineers’
            Promoting Electric Propulsion (PEP) competition, which challenges
            student engineers nationwide to push the boundaries of electric
            propulsion and autonomous systems. Through this competition, we gain
            real-world experience in naval architecture, electrical engineering,
            and systems integration.
          </p>
          <p>
            Founded with the mission to innovate and inspire, Stevens Electric
            Boatworks provides students with hands-on opportunities to apply
            classroom knowledge, collaborate across disciplines, and contribute
            to the future of clean maritime technology.
          </p>
          <ul className=" list-disc list-inside space-y-2">
            <li>
              <Link href={"/fleet/manned"} className="link">
                Learn more about the manned boat
              </Link>
            </li>
            <li>
              <Link href={"/fleet/unmanned"} className="link">
                Learn more about the unmanned autonomous boat
              </Link>
            </li>
            <li>
              <a
                href={"https://navalengineers.org/pep"}
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                Learn more about the Promoting Electric Propulsion competition
              </a>
            </li>
          </ul>
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

        <polygon points="0,0 100,0 50,12" fill="#fafaf9" />
      </svg>
      <div className="flex flex-col gap-12 items-center bg-gradient-to-b text-white from-stone-700 to-stone-600 -mt-12 pt-20 pb-12 px-4 text-lg">
        <h2 className="font-bold font-inter text-4xl" id="team">
          The Team
        </h2>
        <div className="max-w-3xl space-y-4"></div>
      </div>
    </div>
  );
}
