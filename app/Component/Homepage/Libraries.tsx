import { error } from "console";
import Image from "next/image";
import React from "react";
import { LibraryType } from "../Types/LibraryType";
import LibraryCard from "../Shared/LibraryCard";

const Libraries = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch Libraries");
  }
  const libraries = await res.json();
  //   console.log(libraries);

  return (
    <section id="library" className="bg-[#0D0F10] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-280">
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#C2F800]">
              THE LIBRARY
            </p>

            <p className="mt-2 max-w-xl text-sm text-[#8C8F91]">
              Twelve lifts covering every major muscle group
            </p>
          </div>

          <span className="hidden rounded-full border border-[#34383B] px-4 py-2 text-xs text-[#8C8F91] sm:block">
            {libraries.length} Workouts
          </span>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {libraries.slice(0, 12).map((library: LibraryType, index: number) => (
            <LibraryCard key={index} exercise={library} />
          ))}
        </div>

        {/* Empty State */}
        {libraries.length === 0 && (
          <div className="rounded-2xl border border-[#25292C] bg-[#171A1E] py-16 text-center">
            <p className="text-lg font-medium text-white">No workouts found</p>

            <p className="mt-2 text-sm text-[#8C8F91]">
              There are no workouts available right now.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Libraries;
