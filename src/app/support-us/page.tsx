import { SponsorCard } from "@/components/sponsor-card";
import { client } from "@/sanity/client";
import { createImageUrlBuilder, SanityImageSource } from '@sanity/image-url'

import { SanityDocument } from "@sanity/client";
import { Handshake } from "lucide-react";
import Link from "next/link";


const POSTS_QUERY = `*[_type == "sponsors_page"][0] {
  heading,
  page_title,
  title_description,
  background_image,
  background_image_height,
  tiers,
  sponsors[]-> {
    _id,
    name,
    tier,
    icon_dark,
    icon_light,
    href,
    description,
  }
}`;
const options = { next: { revalidate: 30 } };
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function SupportUsPage() {
  const sponsors_page = await client.fetch<SanityDocument>(POSTS_QUERY, {}, options);
  console.log(JSON.stringify(sponsors_page));
  return (
    <div className="w-full">
      <div className="relative overflow-hidden ">
        <div>
          <img
            src={sponsors_page.background_image
              ? urlFor(sponsors_page.background_image)?.auto("format").url()
              : "/support/cover.jpg"}
            className={`brightness-90 object-cover w-full h-[${sponsors_page.background_image_height}px] blur-xs`}
          />
          <svg
            className="w-full h-12 -translate-y-11"
            style={{ pointerEvents: "none", position: "absolute", left: 0 }}
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 50,12 100,0 100,12 0,12" fill="#44403b" />
          </svg>
        </div>
        <div className="flex flex-col">
          <h1 className="gap-20 absolute inset-0 flex flex-col items-center justify-center text-center text-white font-inter font-bold text-6xl text-shadow-md">
            {sponsors_page.page_title}
            <div className="text-xl font-medium text-shadow-md">
              {sponsors_page.title_description}
            </div>
          </h1>
        </div>
      </div>
      <div className="h-8"></div>
      <div>
        <h1 className="inset-0 flex items-center justify-center text-center text-white font-inter font-bold text-4xl text-shadow-md">
          Our Sponsors
        </h1>

        <div className="flex flex-col gap-6 items-center w-full">
          <h2 className="font-sans font-light text-3xl"></h2>
          {sponsors_page.tiers.map((tier: string) => (
            <h2 key={tier} className="flex flex-col justify-center text-center text-white font-inter font-bold text-2xl text-shadow-md">
              {tier.substring(0, 1).toUpperCase() + tier.substring(1, tier.length) + " Tier"}
              <div className="h-4"></div>
              <div className="justify-center flex gap-6">
                {sponsors_page.sponsors.filter((sponsor: any) => sponsor.tier == tier).map((sponsor: any) => (
                  <div className="flex flex-col" key={sponsor}>
                    <SponsorCard
                      href={sponsor.href}
                      icon={sponsor.icon_dark
                        ? urlFor(sponsor.icon_dark)?.auto("format").url()
                        : ""}
                      description={sponsor.description}
                    >
                      <div>
                        {sponsor.name}
                      </div>
                    </SponsorCard>

                  </div>

                ))}
              </div>

            </h2>
          ))}
        </div>
        <div className="h-12"></div>
      </div>

      {/* <div className="flex flex-col gap-12 items-center bg-gradient-to-b text-white from-stone-700 to-stone-600 pt-12 pb-12 px-4 text-lg">
        <div className="max-w-3xl flex flex-col gap-12 items-center">
          <h2 className="font-bold font-sans text-4xl">Our Sponsors</h2>
          <div className="flex flex-col gap-6 items-center w-full">
            <h2 className="font-sans font-light text-3xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d9e0e5] to-[#afbdc6] font-extrabold">
                Platinum
              </span>{" "}
              Sponsors
            </h2>
            <div className="grid grid-cols-2 gap-6 w-full">
              <SupporterLink
                href="https://navalengineers.org"
                icon="/support/logo-asne.png"
                iconAlt="American Society of Naval Engineers logo"
              >
                American Society of Naval Engineers
              </SupporterLink>
              <SupporterLink
                href="https://sname.org"
                icon="/support/logo-sname.png"
              >
                Society of Naval Architects and Marine Engineers; SIT Student
                Chapter
              </SupporterLink>
              <SupporterLink
                href="https://www.dhxelectricmachines.com/"
                icon="/support/logo-mk.png"
              >
                Motive Kinetics
              </SupporterLink>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center w-full">
            <h2 className="font-sans font-light text-3xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fde68a]  to-[#f59e0b] font-extrabold">
                Gold
              </span>{" "}
              Sponsors
            </h2>
            <div className="grid grid-cols-2 gap-6 w-full">
              <SupporterLink
                href="https://www.ghaasfoundation.org/"
                icon="/support/logo-ghf.png"
              >
                Gene Haas Foundation
              </SupporterLink>
              <SupporterLink>
                <div className="flex justify-center mb-4">
                  <Handshake className="w-16 h-16 text-stone-400" />
                </div>
                Private Sponsor
              </SupporterLink>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center w-full">
            <h2 className="font-sans font-light text-3xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f9b9b] via-[#a3a3a3] to-[#e5e5e5] font-extrabold">
                Silver
              </span>{" "}
              Sponsors
            </h2>
            <div className="grid grid-cols-2 gap-6 w-full">
              <SupporterLink
                href="https://www.stevens.edu/school-engineering-science"
                icon="/support/logo-ses.png"
              >
                Charles V. Schaefer, Jr. School of Engineering and Science
              </SupporterLink>
              <SupporterLink
                href="https://evs-inmotion.com/en/"
                icon="/support/logo-inmotion.svg"
              >
                Inmotion
              </SupporterLink>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center w-full">
            <h2 className="font-sans font-light text-3xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f9b9b] via-[#a3a3a3] to-[#e5e5e5] font-extrabold">
                Bronze
              </span>{" "}
              Sponsors
            </h2>
            <div className="grid grid-cols-2 gap-6 w-full">
              <SupporterLink
                href="https://www.ryc.org/"
                icon="/support/logo-ryc.png"
              >
                Raritan Yacht Club
              </SupporterLink>
              <SupporterLink
                href="https://www.bbtalkin.com/"
                icon="/support/logo-bbt.avif"
              >
                BBtalkin&apos;
              </SupporterLink>
              <SupporterLink
                href="https://www.americanadditive.com/"
                icon="/support/logo-aa.gif"
              >
                American Additive
              </SupporterLink>
              <SupporterLink
                href="https://www.siemens.com/"
                icon="/support/logo-sie.png"
              >
                Siemens
              </SupporterLink>
            </div>
          </div>
        </div>
      </div> */}
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

        <polygon points="0,0 100,0 50,12" fill="#44403b" />
      </svg>
      <div
        className="flex flex-col items-center bg-gradient-to-b from-stone-300 to-stone-50 -mt-12 pt-20 pb-12 px-4 text-lg"
        id="become-a-sponsor"
      >
        <div className="flex flex-col items-center gap-12 max-w-3xl">
          <h2 className="font-bold font-sans text-4xl" id="team">
            Become a Sponsor
          </h2>
          <div className="space-y-8 md:space-y-12 w-full">
            <p>
              Through our platform we offer outreach opportunities with
              students, and brand visibility on our boat, team gear, and media.
              Your sponsorship will directly support our ability to push the
              boundaries of electric propulsion, enable us to acquire advanced
              parts and materials, push our vessels to their limits, and ensure
              that the team can travel to competitions and industry events that
              will further increase brand awareness.
            </p>
          </div>
          <a
            href="mailto:stevenseboat@gmail.com"
            className="relative inline-flex items-center justify-center px-8 py-4 border border-zinc-500 rounded-full bg-zinc-800 text-white overflow-visible group hover:scale-[1.02] transition-transform"
          >
            {/* outside glow */}
            <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 opacity-30 group-hover:opacity-40 blur-3xl transform scale-105 transition-all duration-300 pointer-events-none" />
            {/* inner gradient / highlight */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 opacity-0 group-hover:opacity-80 blur-xl transition-opacity duration-300 mix-blend-screen pointer-events-none" />
            <span className="relative z-10">Send us a message</span>
          </a>
          <div className="w-full text-base text-black/50">
            <p>
              If the button above does not work, send a message to{" "}
              <a href="mailto:stevenseboat@gmail.com" className="link">
                stevenseboat@gmail.com
              </a>
              .
            </p>
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
