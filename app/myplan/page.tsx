// import { LibrariesContext } from "@/CreateContext/LibrariesProvider";
// import React, { useContext } from "react";

// const MyPlanPage = () => {
//   const {myPlans, savedPlans} = useContext(LibrariesContext)

//   return (
//     <div className="min-h-screen bg-[#0a0b0e] text-white flex flex-col justify-between font-sans selection:bg-[#ccff00] selection:text-black">

//       {/* Main Content Area */}
//       <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 flex-1 flex flex-col gap-6">
//         {/* Title & Description Header */}
//         <div>
//           <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white">
//             MY PLAN
//           </h1>
//           <p className="text-gray-400 text-xs sm:text-sm mt-1">
//             Cap of five lifts for today. Finish them, then load more.
//           </p>
//         </div>

//         {/* Summary Stat Cards */}
//         <div className="bg-[#12141a] border border-gray-800/70 rounded-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
//           {/* Stat 1: Exercises */}
//           <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-gray-800/60 pb-4 sm:pb-0">
//             <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
//               Exercises
//             </span>
//             <span className="text-4xl sm:text-5xl font-black text-[#ccff00] tracking-tight">
//               2
//             </span>
//           </div>

//           {/* Stat 2: Minutes */}
//           <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-gray-800/60 pb-4 sm:pb-0 sm:pl-4">
//             <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
//               Minutes
//             </span>
//             <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
//               23
//             </span>
//           </div>

//           {/* Stat 3: Calories */}
//           <div className="flex flex-col gap-1 sm:pl-4">
//             <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
//               Calories
//             </span>
//             <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
//               190
//             </span>
//           </div>
//         </div>

//         {/* Controls Header: Tabs & Sort Dropdown */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
//           {/* Toggle Tabs */}
//           <div className="bg-[#12141a] p-1 rounded-xl border border-gray-800/80 flex items-center w-full sm:w-auto">
//             <button className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold text-gray-400 hover:text-white rounded-lg transition-all">
//               Today's Plan
//             </button>
//             <button className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold bg-[#1c1f28] text-white rounded-lg shadow-sm border border-gray-700/50 transition-all">
//               Saved
//             </button>
//           </div>

//           {/* Sort Select Dropdown */}
//           <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
//             <span className="text-gray-400">Sort By</span>
//             <div className="relative">
//               <button className="bg-[#12141a] border border-gray-800 text-gray-200 font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2 hover:border-gray-700 transition-colors">
//                 <span>Duration</span>
//                 <svg
//                   className="w-3.5 h-3.5 text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Empty State Box */}
//         <div className="border border-dashed border-gray-800/90 bg-[#0d0e13] rounded-2xl p-8 sm:p-20 flex flex-col items-center justify-center text-center my-2">
//           <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-2">
//             NOTHING HERE YET
//           </h2>
//           <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
//             Browse the library and add a lift to get today moving.
//           </p>

//           {/* Action Button */}
//           <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm py-3 px-6 rounded-full transition-all shadow-md hover:scale-105 active:scale-95">
//             Go to workouts
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MyPlanPage;

"use client";

import React, { useContext, useState } from "react";
import { LibrariesContext } from "@/CreateContext/LibrariesProvider";
import { LibraryType } from "../Component/Types/LibraryType";

const MyPlanPage = () => {
  const { myPlans, savedPlans } = useContext(LibrariesContext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const activePlans = activeTab === "today" ? myPlans : savedPlans;

  const totalExercises = activePlans.length;
  const totalMinutes = activePlans.reduce(
    (sum: number, plan: LibraryType) => sum + plan.duration,
    0,
  );
  const totalCalories = activePlans.reduce(
    (sum: number, plan: LibraryType) => sum + plan.caloriesBurned,
    0,
  );

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-white flex flex-col justify-between font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Main Content Area */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 flex-1 flex flex-col gap-6">
        {/* Title & Description Header */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Summary Stat Cards */}
        <div className="bg-[#12141a] border border-gray-800/70 rounded-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
          {/* Stat 1: Exercises */}
          <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-gray-800/60 pb-4 sm:pb-0">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Exercises
            </span>
            <span className="text-4xl sm:text-5xl font-black text-[#ccff00] tracking-tight">
              {totalExercises}
            </span>
          </div>

          {/* Stat 2: Minutes */}
          <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-gray-800/60 pb-4 sm:pb-0 sm:pl-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Minutes
            </span>
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {totalMinutes}
            </span>
          </div>

          {/* Stat 3: Calories */}
          <div className="flex flex-col gap-1 sm:pl-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Calories
            </span>
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {totalCalories}
            </span>
          </div>
        </div>

        {/* Controls Header: Tabs & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
          {/* Toggle Tabs */}
          <div className="bg-[#12141a] p-1 rounded-xl border border-gray-800/80 flex items-center w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("today")}
              className={`flex-1 sm:flex-none px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "today"
                  ? "bg-[#1c1f28] text-white shadow-sm border border-gray-700/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 sm:flex-none px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "saved"
                  ? "bg-[#1c1f28] text-white shadow-sm border border-gray-700/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort Select Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
            <span className="text-gray-400">Sort By</span>
            <div className="relative">
              <button className="bg-[#12141a] border border-gray-800 text-gray-200 font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2 hover:border-gray-700 transition-colors">
                <span>Duration</span>
                <svg
                  className="w-3.5 h-3.5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Plans List or Empty State */}
        {activePlans.length === 0 ? (
          <div className="border border-dashed border-gray-800/90 bg-[#0d0e13] rounded-2xl p-8 sm:p-20 flex flex-col items-center justify-center text-center my-2">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-2">
              NOTHING HERE YET
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
              {activeTab === "today"
                ? "Browse the library and add a lift to get today moving."
                : "You haven't saved any plans yet."}
            </p>

            <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm py-3 px-6 rounded-full transition-all shadow-md hover:scale-105 active:scale-95">
              Go to workouts
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 my-2">
            {activePlans.map((plan: LibraryType) => (
              <div
                key={plan.id}
                className="bg-[#12141a] border border-gray-800/70 rounded-xl p-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-xs">{plan.equipment}</p>
                </div>
                <div className="text-xs text-gray-400 flex gap-4">
                  <span>{plan.duration} min</span>
                  <span>{plan.caloriesBurned} kcal</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MyPlanPage;
