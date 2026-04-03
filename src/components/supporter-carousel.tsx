"use client";

import Supporters from "@/supporters.json";

export const SupporterCarousel = () => {
  const supporters = Supporters.flatMap((e) => e.supporters);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 px-4">
      {supporters.map((e, idx) => (
        <a
          key={idx}
          className="flex items-center justify-center aspect-square hover:scale-105 transition-all"
          rel="noopener noreferrer"
          target="_"
          href={e.href}
        >
          {e.icon ? (
            <img src={e.icon} className="sm:w-[150px]" />
          ) : (
            <p className="text-center">{e.name}</p>
          )}
        </a>
      ))}
    </div>
  );
};
