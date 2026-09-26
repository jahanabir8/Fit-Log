"use client";

import React from "react";
import Link from "next/link";
import { LibraryType } from "../Types/LibraryType";
import PlanCard from "./PlanCard";

interface PlanListProps {
  plans: LibraryType[];
  activeTab: "today" | "saved";
  onRemove: (id: number) => void;
}

const PlanList = ({ plans, activeTab, onRemove }: PlanListProps) => {
  if (plans.length === 0) {
    return (
      <div className="border border-dashed border-gray-800/90 bg-[#0d0e13] rounded-2xl p-8 sm:p-20 flex flex-col items-center justify-center text-center my-2">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-2">
          NOTHING HERE YET
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
          {activeTab === "today"
            ? "Browse the library and add a lift to get today moving."
            : "You haven't saved any plans yet."}
        </p>

        <Link href="/">
          <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm py-3 px-6 rounded-full transition-all shadow-md hover:scale-105 active:scale-95">
            Go to workouts
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 my-2">
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} activeTab={activeTab} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default PlanList;