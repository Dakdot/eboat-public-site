import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
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

      <div className="flex flex-col gap-12 items-center text-white bg-gradient-to-b to-[#a32638] from-[#7d1524] pt-12 pb-12">
        <h2 className="px-4">
          Stevens Electric Boatworks currently has two major projects:
        </h2>
        <div className="flex flex-col md:flex-row gap-6 max-w-3xl px-4">
          <img
            src={"/fleet/manned-1.jpg"}
            className="rounded-full aspect-square shadow border w-[250px] h-[250px]"
            width={250}
            alt=""
          />
          <div className="flex flex-col justify-center gap-2">
            <div>
              <h4 className="text-white/75">Monitored Manned Vessel</h4>
              <h3 className="text-4xl font-bold font-inter">
                &quot;Boat&quot;
              </h3>
            </div>
            <p>
              &quot;Boat&quot; is a fully electric planing speedboat. Its
              lightweight planing hull combined with a high power electric drive
              delivers rapid acceleration and impressive top speeds.
            </p>
            <Link
              href={"/fleet/manned"}
              className="underline decoration-dotted hover:decoration-solid"
            >
              Learn more about &quot;Boat&quot;
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 max-w-3xl justify-end px-4">
          <div className="flex flex-col justify-center text-right gap-2">
            <div>
              {/* <h4 className="text-white/75">Unmanned Autonomous Vessel</h4> */}
              <h3 className="text-4xl font-bold font-inter">
                Unmanned Autonomous Vessel
              </h3>
            </div>
            <p>Little boat description.</p>
            <Dialog>
              <DialogTrigger asChild>
                <p className="link hover:cursor-pointer">
                  Learn more about Unmanned Autonomous Vessel
                </p>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-sans">
                    This page is under construction.
                  </DialogTitle>
                  <DialogDescription>
                    Like the boat itself, this page is still under construction.
                    We hope to have updates very soon on the progress of the
                    unmanned vessel!
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>OK</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {/* <Link
              href={"/fleet/unmanned"}
              className="underline decoration-dotted hover:decoration-solid"
            >
              Learn more about Unmanned Autonomous Vessel
            </Link> */}
          </div>
          <img
            src={"/placeholder-1.jpg"}
            className="rounded-full ml-auto"
            width={250}
            alt=""
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
    </div>
  );
}
