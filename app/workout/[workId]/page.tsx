import { LibraryType } from "@/app/Component/Types/LibraryType";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: Promise<{ workId: string }>;
}

const WorkOutDetails = async ({ params }:PageProps) => {
  const { workId } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workId}`);

  if (!res.ok) {
    return <p>Library Not Found</p>;
  }
  const exercise: LibraryType = await res.json();

  if (!exercise || Object.keys(exercise).length === 0) {
    return <p>Book not found.</p>;
  }

  const {
    // id,
    image,
    name,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = exercise;

  return (
    <div className="min-h-screen bg-[#0d0d12] text-white flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="max-w-5xl w-full bg-[#12141a] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-2xl border border-gray-800/50">
        {/* Left Column: Big Image on Large Devices */}
        <div className="w-full md:w-1/2 shrink-0">
          <div className="relative w-full h-[87.5 md:h-125 lg:h-140 rounded-2xl overflow-hidden shadow-lg border border-gray-800/60">
            <Image
              src={image}
              fill
              alt="Barbell Bench Press"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Content & Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            {/* Header & Badges */}
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider uppercase text-white mb-2">
              {name}
            </h1>

            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
              {description}
            </p>

            <div className="flex gap-2 mb-6">
              {muscleGroups.map((muscle, index) => {
                return (
                  <span
                    key={index}
                    className="bg-[#ccff00] text-black text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {muscle}
                  </span>
                );
              })}
            </div>

            {/* Details Table Card */}
            <div className="bg-[#181a22] rounded-xl p-4 md:p-5 mb-6 space-y-3 border border-gray-800/30">
              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-500 uppercase font-semibold text-[11px] tracking-wider">
                  EQUIPMENT
                </span>
                <span className="text-gray-200 font-medium">{equipment}</span>
              </div>

              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-500 uppercase font-semibold text-[11px] tracking-wider">
                  DIFFICULTY
                </span>
                <span className="text-gray-200 font-medium">{difficulty}</span>
              </div>

              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-500 uppercase font-semibold text-[11px] tracking-wider">
                  SETS
                </span>
                <span className="text-gray-200 font-medium">{sets}</span>
              </div>

              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-500 uppercase font-semibold text-[11px] tracking-wider">
                  REPS
                </span>
                <span className="text-gray-200 font-medium">{reps}</span>
              </div>

              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-500 uppercase font-semibold text-[11px] tracking-wider">
                  DURATION
                </span>
                <span className="text-gray-200 font-medium">{duration}</span>
              </div>

              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-500 uppercase font-semibold text-[11px] tracking-wider">
                  CALORIES
                </span>
                <span className="text-gray-200 font-medium">
                  {caloriesBurned}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs md:text-sm">
                <span className="text-gray-500 uppercase font-semibold text-[11px] tracking-wider">
                  RATING
                </span>
                <span className="text-gray-200 font-medium">{rating}</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-6">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white mb-3">
                INSTRUCTIONS
              </h2>
              <ol className="space-y-2 text-xs md:text-sm text-gray-300 leading-relaxed">
                {instructions.map((instruction, index) => {
                  return (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-400 font-semibold">{index+1}.</span>
                      <span>
                        {instruction}
                      </span>
                    </li>
                  );
                })}
                {/* <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-semibold">1.</span>
                  <span>
                    Lie on the bench with eyes under the bar and feet planted.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-semibold">2.</span>
                  <span>
                    Unrack with locked elbows and lower the bar to mid-chest.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-semibold">3.</span>
                  <span>
                    Press up in a slight arc until elbows lock without bouncing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-semibold">4.</span>
                  <span>
                    Keep shoulder blades pinched and a natural arch in the back.
                  </span>
                </li> */}
              </ol>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button className="flex-1 bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold py-2.5 px-4 rounded-xl text-xs md:text-sm flex items-center justify-center gap-2 transition-colors">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Add to today's plan</span>
            </button>

            <button className="border border-gray-700 hover:border-gray-500 bg-[#14161d] text-gray-300 font-medium py-2.5 px-4 rounded-xl text-xs md:text-sm flex items-center justify-center gap-2 transition-colors">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutDetails;
