import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Oswald } from "next/font/google";

// import Banner from '../../../../public/banner.png'

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-oswald",
});

const Banner = () => {
  return (
    <section className="bg-[#0D0F10] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            relative
            flex
            min-h-105
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-[#292D32]
            bg-[#15171C]
            px-6
            py-10
            sm:px-8
            sm:py-12
            lg:min-h-93.75
            lg:flex-row
            lg:items-center
            lg:px-12
          "
        >
          {/* Left: Text content */}
          <div className="relative z-10 w-full lg:w-[60%]">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-widest text-[#C2F800] sm:text-xs">
              Workout Library
            </p>

            <h1
              className={`${oswald.className} max-w-150 text-4xl font-black uppercase leading-[0.95] tracking-tight  text-white sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[58px]`}
            >
              Train With Intent. Log
              <br className="hidden sm:block" />
              Every Set.
            </h1>

            <p className=" mt-5 max-w-125 text-sm leading-6 text-[#969BA1] sm:text-[15px]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <div className="mt-6">
              <Link
                href="#library"
                className=" inline-flex items-center justify-center rounded-md  bg-[#C2F800] px-5 py-3 text-[11px] font-bold uppercase tracking-wide  text-black transition hover:bg-[#aee000]
                "
              >
                Browse Workouts
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="
              relative
              z-10
              mt-8
              flex
              w-full
              justify-center
              sm:mt-10
              lg:absolute
              lg:right-8
              lg:bottom-0
              lg:mt-0
              lg:w-[38%]
            "
          >
            <Image
              src="/banner.png"
              alt="Person performing a workout"
              width={400}
              height={500}
              priority
              className="
                h-auto
                w-55
                object-contain
                sm:w-65
                md:w-75
                lg:w-77.5
                xl:w-85
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
