import Image from "next/image";
import React from "react";

// import Banner from '../../../../public/banner.png'

const Banner = () => {
  return (
    <section className="bg-[#0D0F10] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-280">
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
          <div className="relative z-10 w-full lg:w-[60%]">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-widest text-[#C2F800] sm:text-xs">
              Workout Library
            </p>
            <h1
              className="
            max-w-150
            text-4xl
            font-black
            uppercase
            leading-[0.95]
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
            lg:text-[52px]
            xl:text-[58px]
          ">
              Train With Intent. Log
              <br className="hidden sm:block" />
              Every Set.
            </h1>
            <p
              className="
            mt-5
            max-w-125
            text-sm
            leading-6
            text-[#969BA1]
            sm:text-[15px]
          "
            >
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <div className="mt-6">
              <a
                href="/workout"
                className="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-[#C2F800]
              px-5
              py-3
              text-[11px]
              font-bold
              uppercase
              tracking-wide
              text-black
              transition
              hover:bg-[#aee000]
            "
              >
                Browse Workouts
              </a>
            </div>
          </div>

          <div
            className="
          relative
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
              fill
            //   src={Banner}
            src='/banner.png'
              alt="Person performing a workout"
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
