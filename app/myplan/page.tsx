// "use client";

// import React, { useContext, useState } from "react";
// import { LibrariesContext } from "@/CreateContext/LibrariesProvider";
// import { LibraryType } from "../Component/Types/LibraryType";
// import Link from "next/link";
// import Image from "next/image";
// import SummaryState from "../Component/Shared/SummaryState";

// const MyPlanPage = () => {
//   const { myPlans, savedPlans } = useContext(LibrariesContext);
//   const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

//   const activePlans = activeTab === "today" ? myPlans : savedPlans;

//   const totalExercises = activePlans.length;
//   const totalMinutes = activePlans.reduce(
//     (sum: number, plan: LibraryType) => sum + plan.duration,
//     0,
//   );
//   const totalCalories = activePlans.reduce(
//     (sum: number, plan: LibraryType) => sum + plan.caloriesBurned,
//     0,
//   );

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
//         <SummaryState totalExercises={totalExercises} totalMinutes={totalMinutes} totalCalories={totalCalories} />
        

//         {/* Controls Header: Tabs & Sort Dropdown */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
//           {/* Toggle Tabs */}
//           <div className="bg-[#12141a] p-1 rounded-xl border border-gray-800/80 flex items-center w-full sm:w-auto">
//             <button
//               onClick={() => setActiveTab("today")}
//               className={`flex-1 sm:flex-none px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
//                 activeTab === "today"
//                   ? "bg-[#1c1f28] text-white shadow-sm border border-gray-700/50"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               Today&apos;s Plan
//             </button>
//             <button
//               onClick={() => setActiveTab("saved")}
//               className={`flex-1 sm:flex-none px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
//                 activeTab === "saved"
//                   ? "bg-[#1c1f28] text-white shadow-sm border border-gray-700/50"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
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

//         {/* Plans List or Empty State */}
//         {activePlans.length === 0 ? (
//           <div className="border border-dashed border-gray-800/90 bg-[#0d0e13] rounded-2xl p-8 sm:p-20 flex flex-col items-center justify-center text-center my-2">
//             <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-2">
//               NOTHING HERE YET
//             </h2>
//             <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
//               {activeTab === "today"
//                 ? "Browse the library and add a lift to get today moving."
//                 : "You haven't saved any plans yet."}
//             </p>

//             <Link href="/workout">
//               <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm py-3 px-6 rounded-full transition-all shadow-md hover:scale-105 active:scale-95">
//                 Go to workouts
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <div className="flex flex-col gap-4 my-2">
//             {activePlans.map((plan: LibraryType) => (
//               <div
//                 key={plan.id}
//                 className="bg-[#12141a] border border-gray-800/70 rounded-2xl p-3 flex items-center gap-4"
//               >
//                 {/* Thumbnail */}
//                 <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl">
//                   <Image
//                     src={plan.image}
//                     alt={plan.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Name + meta */}
//                 <div className="flex-1 min-w-0">
//                   <h3 className="font-black text-sm sm:text-base text-white uppercase tracking-wide truncate">
//                     {plan.name}
//                   </h3>
//                   <p className="text-gray-400 text-xs mb-1.5">
//                     {plan.equipment}
//                   </p>

//                   <div className="flex items-center gap-4 text-xs text-gray-400">
//                     <div className="flex items-center gap-1">
//                       <svg
//                         className="h-3.5 w-3.5"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           cx="12"
//                           cy="12"
//                           r="9"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M12 7v5l3 3"
//                         />
//                       </svg>
//                       {plan.duration} min
//                     </div>

//                     <div className="flex items-center gap-1">
//                       <svg
//                         className="h-3.5 w-3.5 text-orange-400"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 2c-1.5 3-4 5-4 8a4 4 0 108 0c0-1-.3-1.8-.8-2.6.5 1.8-.5 2.6-1.2 2.6-1 0-1.5-.8-1-1.8C13.5 6.5 13.5 4 12 2z" />
//                       </svg>
//                       {plan.caloriesBurned} kcal
//                     </div>

//                     <div className="flex items-center gap-1">
//                       <svg
//                         className="h-3.5 w-3.5 text-[#ccff00]"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
//                       </svg>
//                       {plan.rating}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center gap-2 shrink-0">
//                   <Link href={`/workout/${plan.id}`}>
//                     <button className="hidden sm:inline-flex px-4 py-2 rounded-full border border-gray-700 text-xs font-semibold text-white hover:bg-[#1c1f28] transition-colors whitespace-nowrap">
//                       View Details
//                     </button>
//                   </Link>

//                   <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold transition-colors whitespace-nowrap">
//                     <svg
//                       className="h-3.5 w-3.5"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={3}
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     Mark as Done
//                   </button>

//                   <button
//                     aria-label="Remove plan"
//                     className="text-gray-500 hover:text-white transition-colors p-1"
//                   >
//                     <svg
//                       className="h-4 w-4"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default MyPlanPage;



// "use client";

// import React, { useContext, useState } from "react";
// import { LibrariesContext } from "@/CreateContext/LibrariesProvider";
// import { LibraryType } from "../Component/Types/LibraryType";
// import Link from "next/link";
// import Image from "next/image";
// import SummaryState from "../Component/Shared/SummaryState";
// import { toast } from "react-toastify";

// type SortOption = "duration" | "calories" | "rating";

// const SORT_LABELS: Record<SortOption, string> = {
//   duration: "Duration",
//   calories: "Calories",
//   rating: "Rating",
// };

// const MyPlanPage = () => {
//   const { myPlans, savedPlans, setMyPlans, setSavedPlans } = useContext(LibrariesContext);
//   const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
//   const [sortBy, setSortBy] = useState<SortOption>("duration");
//   const [sortMenuOpen, setSortMenuOpen] = useState(false);

//   const activePlans = activeTab === "today" ? myPlans : savedPlans;

//   const totalExercises = activePlans.length;
//   const totalMinutes = activePlans.reduce(
//     (sum: number, plan: LibraryType) => sum + plan.duration,
//     0,
//   );
//   const totalCalories = activePlans.reduce(
//     (sum: number, plan: LibraryType) => sum + plan.caloriesBurned,
//     0,
//   );

//   // Sort a copy — never mutate the original array from context
//   const sortedPlans = [...activePlans].sort((a: LibraryType, b: LibraryType) => {
//     if (sortBy === "duration") return b.duration - a.duration;
//     if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
//     return b.rating - a.rating;
//   });

//   const handleRemove = (id: number) => {
//     if (activeTab === "today") {
//       setMyPlans(myPlans.filter((plan: LibraryType) => plan.id !== id));
//       toast.success('removed successfuly')
//     } else {
//       setSavedPlans(savedPlans.filter((plan: LibraryType) => plan.id !== id));
//       toast.success('removed successfuly')
//     }
//   };

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
//         <SummaryState
//           totalExercises={totalExercises}
//           totalMinutes={totalMinutes}
//           totalCalories={totalCalories}
//         />

//         {/* Controls Header: Tabs & Sort Dropdown */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
//           {/* Toggle Tabs */}
//           <div className="bg-[#12141a] p-1 rounded-xl border border-gray-800/80 flex items-center w-full sm:w-auto">
//             <button
//               onClick={() => setActiveTab("today")}
//               className={`flex-1 sm:flex-none px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
//                 activeTab === "today"
//                   ? "bg-[#1c1f28] text-white shadow-sm border border-gray-700/50"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               Today&apos;s Plan
//             </button>
//             <button
//               onClick={() => setActiveTab("saved")}
//               className={`flex-1 sm:flex-none px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
//                 activeTab === "saved"
//                   ? "bg-[#1c1f28] text-white shadow-sm border border-gray-700/50"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               Saved
//             </button>
//           </div>

//           {/* Sort Select Dropdown */}
//           <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
//             <span className="text-gray-400">Sort By</span>
//             <div className="relative">
//               <button
//                 onClick={() => setSortMenuOpen((prev) => !prev)}
//                 className="bg-[#12141a] border border-gray-800 text-gray-200 font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2 hover:border-gray-700 transition-colors"
//               >
//                 <span>{SORT_LABELS[sortBy]}</span>
//                 <svg
//                   className={`w-3.5 h-3.5 text-gray-400 transition-transform ${
//                     sortMenuOpen ? "rotate-180" : ""
//                   }`}
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

//               {sortMenuOpen && (
//                 <>
//                   {/* Backdrop to close the menu on outside click */}
//                   <div
//                     className="fixed inset-0 z-10"
//                     onClick={() => setSortMenuOpen(false)}
//                   />
//                   <div className="absolute right-0 mt-2 w-36 bg-[#12141a] border border-gray-800 rounded-lg shadow-lg z-20 overflow-hidden">
//                     {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
//                       <button
//                         key={option}
//                         onClick={() => {
//                           setSortBy(option);
//                           setSortMenuOpen(false);
//                         }}
//                         className={`w-full text-left px-3 py-2 text-xs font-semibold transition-colors ${
//                           sortBy === option
//                             ? "bg-[#1c1f28] text-[#ccff00]"
//                             : "text-gray-300 hover:bg-[#1c1f28] hover:text-white"
//                         }`}
//                       >
//                         {SORT_LABELS[option]}
//                       </button>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Plans List or Empty State */}
//         {sortedPlans.length === 0 ? (
//           <div className="border border-dashed border-gray-800/90 bg-[#0d0e13] rounded-2xl p-8 sm:p-20 flex flex-col items-center justify-center text-center my-2">
//             <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-2">
//               NOTHING HERE YET
//             </h2>
//             <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
//               {activeTab === "today"
//                 ? "Browse the library and add a lift to get today moving."
//                 : "You haven't saved any plans yet."}
//             </p>

//             <Link href="/workout">
//               <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm py-3 px-6 rounded-full transition-all shadow-md hover:scale-105 active:scale-95">
//                 Go to workouts
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <div className="flex flex-col gap-4 my-2">
//             {sortedPlans.map((plan: LibraryType) => (
//               <div
//                 key={plan.id}
//                 className="bg-[#12141a] border border-gray-800/70 rounded-2xl p-3 flex items-center gap-4"
//               >
//                 {/* Thumbnail */}
//                 <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl">
//                   <Image
//                     src={plan.image}
//                     alt={plan.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Name + meta */}
//                 <div className="flex-1 min-w-0">
//                   <h3 className="font-black text-sm sm:text-base text-white uppercase tracking-wide truncate">
//                     {plan.name}
//                   </h3>
//                   <p className="text-gray-400 text-xs mb-1.5">
//                     {plan.equipment}
//                   </p>

//                   <div className="flex items-center gap-4 text-xs text-gray-400">
//                     <div className="flex items-center gap-1">
//                       <svg
//                         className="h-3.5 w-3.5"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           cx="12"
//                           cy="12"
//                           r="9"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M12 7v5l3 3"
//                         />
//                       </svg>
//                       {plan.duration} min
//                     </div>

//                     <div className="flex items-center gap-1">
//                       <svg
//                         className="h-3.5 w-3.5 text-orange-400"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 2c-1.5 3-4 5-4 8a4 4 0 108 0c0-1-.3-1.8-.8-2.6.5 1.8-.5 2.6-1.2 2.6-1 0-1.5-.8-1-1.8C13.5 6.5 13.5 4 12 2z" />
//                       </svg>
//                       {plan.caloriesBurned} kcal
//                     </div>

//                     <div className="flex items-center gap-1">
//                       <svg
//                         className="h-3.5 w-3.5 text-[#ccff00]"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
//                       </svg>
//                       {plan.rating}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center gap-2 shrink-0">
//                   <Link href={`/workout/${plan.id}`}>
//                     <button className="hidden sm:inline-flex px-4 py-2 rounded-full border border-gray-700 text-xs font-semibold text-white hover:bg-[#1c1f28] transition-colors whitespace-nowrap">
//                       View Details
//                     </button>
//                   </Link>

//                   {activeTab === "today" && (
//                     <button
//                       onClick={() => handleRemove(plan.id)}
//                       className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold transition-colors whitespace-nowrap"
//                     >
//                       <svg
//                         className="h-3.5 w-3.5"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={3}
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                       Mark as Done
//                     </button>
//                   )}

//                   <button
//                     onClick={() => handleRemove(plan.id)}
//                     aria-label="Remove plan"
//                     className="text-gray-500 hover:text-white transition-colors p-1"
//                   >
//                     <svg
//                       className="h-4 w-4"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default MyPlanPage;

import React from "react";
import PlanManager from "../Component/MyPlan/PlanManager";

const MyPlanPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0e] text-white flex flex-col justify-between font-sans selection:bg-[#ccff00] selection:text-black">
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 flex-1 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <PlanManager />
      </main>
    </div>
  );
};

export default MyPlanPage;