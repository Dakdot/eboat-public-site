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
            <polygon points="0,0 50,12 100,0 100,12 0,12" fill="#ffffff" />
          </svg>
        </div>
        <h1 className="absolute inset-0 flex items-center justify-center text-center text-white font-inter font-bold text-6xl text-shadow-md">
          Manned Vessel
        </h1>
      </div>
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/1069766488?h=3a4f718eb2"
        width="640"
        height="360"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      />
    </div>
  );
}
