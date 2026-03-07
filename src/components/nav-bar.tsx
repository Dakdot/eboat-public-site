import Link from "next/link";

import links from "@/app/links";

export const NavBar = () => {
  return (
    <div
      className={`flex bg-stone-700 text-sm sm:text-base  text-white items-center justify-center px-2 md:px-4 gap-4 md:gap-6  w-full h-14 md:h-12 shadow-xl text-center z-50 border-b border-white/20`}
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

      <div className="flex md:ml-auto items-center justify-center gap-6">
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
