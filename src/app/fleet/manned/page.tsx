export default function MannedAboutPage() {
  return (
    <div>
      <div className="relative">
        <div>
          <img
            src={"/fleet/manned-2.jpg"}
            className=" brightness-50 object-cover w-full h-[400px]"
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-sans text-shadow-md">
          <h2 className="text-lg text-white/75">Manned Vessel</h2>
          <h1 className="font-bold text-6xl ">&quot;Boat&quot;</h1>
        </div>
      </div>
      <div className="flex flex-col items-center py-16 text-white bg-gradient-to-b to-[#a32638] from-[#7d1524]">
        <div className="flex flex-col items-center max-w-3xl gap-8 text-lg p-4">
          <h2 className="font-sans text-2xl font-bold">
            Watch the Presentation
          </h2>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1069766488?h=3a4f718eb2"
            width="640"
            height="360"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            className="w-[340px] md:w-[640px]"
          />
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

        <polygon points="0,0 100,0 50,12" fill="#a32638" />
      </svg>
      <div className="flex flex-col items-center py-16  bg-gradient-to-b to-stone-50 from-stone-300">
        <div className="flex flex-col max-w-3xl gap-8 text-lg px-4">
          <h2 className="font-sans text-4xl font-bold w-full text-center">
            2025 Systems
          </h2>
          <div>
            <p className="font-bold">Drivetrain</p>
            <p>
              Custom outboard unit with a DHX Electric Machines Peregrine 40
              delivering 18.3 kW
            </p>
            <p>
              <i>2026 Upgrade Plan:</i> two motors for double the torque
            </p>
          </div>
          <div>
            <p className="font-bold">Cooling</p>
            <p>
              Lightweight aluminum racing radiator in a closed loop cooling
              system
            </p>
            <p>
              <i>2026 Upgrade Plan:</i> seawater intake to closed loop cooling
              system via heat exchanger
            </p>
          </div>
          <div>
            <p className="font-bold">Batteries</p>
            <p>
              Two 48V nominal LiFePO4 batteries in parallel providing 40+
              minutes of racing power
            </p>
          </div>
          <div>
            <p className="font-bold">Control Systems</p>
            <p>
              Inmotion Gen 7 motor controller, Raspberry Pi 4b, Robot Operating
              System (ROS) with communication to internal CAN bus, communication
              to a shore station
            </p>
            <p>
              <i>2026 Upgrade Plan:</i> re-write software from scratch, add
              larger screen to cockpit with indicators and buttons
            </p>
          </div>
          <div>
            <p className="font-bold">Hull</p>
            <p>
              16’ custom hull designed and built by Stevens senior design
              students, aramid fiber honeycomb core layered in carbon fiber
            </p>
          </div>
          <div>
            <p className="font-bold">Propeller</p>
            <p>Custom machined aluminum Newton Rader supercaviting propeller</p>
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
