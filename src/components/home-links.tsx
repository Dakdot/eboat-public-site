import Link from "next/link";

const links = [
  { title: "Learn More", url: "/about" },
  { title: "Get Involved", url: "" },
  { title: "Support Us", url: "/support-us" },
];

export const HomeLinks = () => {
  return (
    <div className="flex gap-2 md:gap-6 justify-center">
      {links.map((e, idx) => (
        <Link
          key={idx}
          href={e.url}
          className="border rounded-full py-2 md:py-1 px-4 cursor-pointer md:text-lg bg-white/70 hover:bg-white/50 hover:scale-105 transition-all backdrop-blur-lg text-center"
        >
          {e.title}
        </Link>
      ))}
    </div>
  );
};
