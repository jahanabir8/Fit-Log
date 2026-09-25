"use client";

import React from "react";

interface PlanTabsProps {
  activeTab: "today" | "saved";
  setActiveTab: (tab: "today" | "saved") => void;
}

const PlanTabs = ({ activeTab, setActiveTab }: PlanTabsProps) => {
  return (
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
  );
};

export default PlanTabs;