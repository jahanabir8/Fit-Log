"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LibraryType } from "../Types/LibraryType";

interface PlanCardProps {
  plan: LibraryType;
  activeTab: "today" | "saved";
  onRemove: (id: number) => void;
}

const PlanCard = ({ plan, activeTab, onRemove }: PlanCardProps) => {
  return (
    <div className="bg-[#12141a] border border-gray-800/70 rounded-2xl p-3 flex items-center gap-4">
      <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl">
        <Image src={plan.image} alt={plan.name} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-black text-sm sm:text-base text-white uppercase tracking-wide truncate">
          {plan.name}
        </h3>
        <p className="text-gray-400 text-xs mb-1.5">{plan.equipment}</p>

        <div className="flex items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
            </svg>
            {plan.duration} min
          </div>

          <div className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c-1.5 3-4 5-4 8a4 4 0 108 0c0-1-.3-1.8-.8-2.6.5 1.8-.5 2.6-1.2 2.6-1 0-1.5-.8-1-1.8C13.5 6.5 13.5 4 12 2z" />
            </svg>
            {plan.caloriesBurned} kcal
          </div>

          <div className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5 text-[#ccff00]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
            {plan.rating}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Link href={`/workout/${plan.id}`}>
          <button className="hidden sm:inline-flex px-4 py-2 rounded-full border border-gray-700 text-xs font-semibold text-white hover:bg-[#1c1f28] transition-colors whitespace-nowrap">
            View Details
          </button>
        </Link>

        {activeTab === "today" && (
          <button
            onClick={() => onRemove(plan.id)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold transition-colors whitespace-nowrap"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Mark as Done
          </button>
        )}

        <button
          onClick={() => onRemove(plan.id)}
          aria-label="Remove plan"
          className="text-gray-500 hover:text-white transition-colors p-1"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PlanCard;