"use client";

import React, { useState } from "react";
import { SortOption } from "./PlanManager";
import { HiChevronDown } from "react-icons/hi2";

const SORT_LABELS: Record<SortOption, string> = {
  duration: "Duration",
  calories: "Calories",
  rating: "Rating",
};

interface SortDropdownProps {
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
}

const SortDropdown = ({ sortBy, setSortBy }: SortDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
      <span className="text-gray-400">Sort By</span>
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-[#12141a] border border-gray-800 text-gray-200 font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2 hover:border-gray-700 transition-colors"
        >
          <span>{SORT_LABELS[sortBy]}</span>
          <HiChevronDown
            className={`w-3.5 h-3.5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setOpen(false)}
            />
            <div className="absolute right-0 mt-2 w-36 bg-[#12141a] border border-gray-800 rounded-lg shadow-lg z-20 overflow-hidden">
              {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs font-semibold transition-colors ${
                    sortBy === option
                      ? "bg-[#1c1f28] text-[#ccff00]"
                      : "text-gray-300 hover:bg-[#1c1f28] hover:text-white"
                  }`}
                >
                  {SORT_LABELS[option]}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SortDropdown;
