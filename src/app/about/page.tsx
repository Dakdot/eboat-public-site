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
        <div className="max-w-3xl space-y-8 md:space-y-12">
          <div className="flex items-center gap-6">
            <img
              src={"/placeholder-1.jpg"}
              width={100}
              className="rounded-full"
              alt="Placeholder"
            />
            <div>
              <h3 className="font-inter font-bold text-2xl">Drivetrain</h3>
              <p>
                This team works to build the most efficient and most powerful
                electric drivetrain possible.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img
              src={"/placeholder-1.jpg"}
              width={100}
              className="rounded-full"
              alt="Placeholder"
            />
            <div>
              <h3 className="font-inter font-bold text-2xl">Cooling</h3>
              <p>
                Our cooling team specializes in keeping cool the motors,
                controllers, and batteries.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img
              src={"/placeholder-1.jpg"}
              width={100}
              className="rounded-full"
              alt="Placeholder"
            />
            <div>
              <h3 className="font-inter font-bold text-2xl">Batteries</h3>
              <p>
                Our battery team helps us provide a huge amount of power in a
                very short amount of time, all while keeping the weight
                impressively low.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img
              src={"/placeholder-1.jpg"}
              width={100}
              className="rounded-full"
              alt="Placeholder"
            />
            <div>
              <h3 className="font-inter font-bold text-2xl">
                Computer-Aided Design
              </h3>
              <p>
                The CAD team creates and maintains a full Solidworks model of
                both vessels, ensuring smooth system integration.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img
              src={"/placeholder-1.jpg"}
              width={100}
              className="rounded-full"
              alt="Placeholder"
            />
            <div>
              <h3 className="font-inter font-bold text-2xl">Control Systems</h3>
              <p>
                The Control Systems team develops the real-time software and
                analytics that interpret telemetry from the manned vessel,
                implement control algorithms, and present concise, actionable
                information to the driver and shore crew.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img
              src={"/placeholder-1.jpg"}
              width={100}
              className="rounded-full"
              alt="Placeholder"
            />
            <div>
              <h3 className="font-inter font-bold text-2xl">Unmanned</h3>
              <p>
                The unmanned team is designing and building a new boat from
                scratch, ready to blow the competition out of the water,
                completely autonomously.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img
              src={"/placeholder-1.jpg"}
              width={100}
              className="rounded-full"
              alt="Placeholder"
            />
            <div>
              <h3 className="font-inter font-bold text-2xl">
                Research & Development
              </h3>
              <p>
                The R&D team takes on the challenge of understanding the
                theoretical and takes charge of the future of our program. They
                are in charge of the Naval Architecture projects of our current
                and future vessels.
              </p>
            </div>
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
      <div className="-pt-20 pb-16">
        <h2>Our History</h2>
      </div>
    </div>
  );
}
