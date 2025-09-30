import Link from "next/link";

import links from "@/app/links";

export const NavBar = () => {
  return (
    <div
      className={`flex bg-neutral-800/50 text-sm sm:text-base  text-white items-center px-2 md:px-4 gap-4 md:gap-6 fixed w-full h-14 md:h-12 backdrop-blur-lg shadow text-center z-50`}
      id="navbar"
    >
      <Link href={"/"}>
        <div className="hidden flex-1 md:flex gap-2 items-center">
          <img
            src={"/eboat-logo-red.png"}
            width={40}
            alt="Stevens Electric Boatworks logo"
          />
          <p className="hidden lg:inline font-bold">
            Stevens Electric Boatworks
          </p>
        </div>
      </Link>

      <div className="flex md:flex-1 justify-evenly md:justify-end items-center gap-6">
        {links.map((e, idx) => (
          <Link
            key={idx}
            href={e.url}
            className="transition-all hover:underline"
          >
            {e.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
