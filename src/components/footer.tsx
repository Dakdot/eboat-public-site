import { SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-6 items-center py-20 bg-stone-300 px-4">
      <div className="flex gap-6">
        <div className="flex-1">
          <p className="font-bold">Stevens Electric Boatworks</p>
          <p>
            Part of{" "}
            <a
              href={"https://stevens.edu"}
              rel="noopener noreferrer"
              target="_blank"
              className="underline decoration-dotted hover:decoration-solid"
            >
              Stevens Institute of Technology
            </a>{" "}
            Charles V. Schaeffer School of Engineering
          </p>
          <p>© 2025 Stevens Electric Boatworks.</p>
        </div>
        <div className="flex-1">
          <p className="font-bold">About</p>
          <ul>
            <li>
              <Link href={"/about#"} className="link">
                Overview
              </Link>
            </li>
            <li>
              <Link href={"/about#team"} className="link">
                The Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="font-bold">The Fleet</p>
          <ul>
            <li>
              <Link href={"/fleet/manned"} className="link">
                Manned
              </Link>
            </li>
            <li>
              <Link href={"/fleet/unmanned"} className="link">
                Unmanned
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <a
          href={"https://www.instagram.com/stevenseboat/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiInstagram className="hover:text-black/50" />
        </a>
      </div>
    </div>
  );
};
