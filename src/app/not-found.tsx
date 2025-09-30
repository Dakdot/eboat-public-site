import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <img
        src={"/not-found.jpg"}
        className="absolute inset-0 -z-10 w-full h-screen object-cover select-none pointer-events-none"
        alt="Manned boat on water"
      />
      <div className="flex flex-col gap-4 border rounded-2xl p-6 text-lg text-white bg-black/50 backdrop-blur-lg -translate-y-[200px] shadow-2xl">
        <p className="border px-3 rounded-full w-fit bg-red-200 text-red-800 font-bold">
          404
        </p>
        <div>
          <p className="font-bold text-4xl font-inter">Not Found</p>
          <p>That page could not be found.</p>
        </div>
        <Link href={"/"} className="link">
          Go home
        </Link>
      </div>
    </div>
  );
}
