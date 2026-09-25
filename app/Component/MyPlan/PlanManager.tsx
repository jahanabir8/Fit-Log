"use client";

import React, { useContext, useState } from "react";
import { useLibrariesContext } from "@/CreateContext/LibrariesProvider";
import { LibraryType } from "../Types/LibraryType";
import { toast } from "react-toastify";
import SummaryState from "../Shared/SummaryState";
import PlanTabs from "./PlanTabs";
import SortDropdown from "./SortDropdown";
import PlanList from "./PlanList";

export type SortOption = "duration" | "calories" | "rating";

const PlanManager = () => {
  const { myPlans, savedPlans, setMyPlans, setSavedPlans } = useLibrariesContext();
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

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

  const sortedPlans = [...activePlans].sort((a: LibraryType, b: LibraryType) => {
    if (sortBy === "duration") return b.duration - a.duration;
    if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    return b.rating - a.rating;
  });

  const handleRemove = (id: number) => {
    if (activeTab === "today") {
      setMyPlans(myPlans.filter((plan: LibraryType) => plan.id !== id));
    } else {
      setSavedPlans(savedPlans.filter((plan: LibraryType) => plan.id !== id));
    }
    toast.success("Removed successfully");
  };

  return (
    <>
      <SummaryState
        totalExercises={totalExercises}
        totalMinutes={totalMinutes}
        totalCalories={totalCalories}
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
        <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <PlanList plans={sortedPlans} activeTab={activeTab} onRemove={handleRemove} />
    </>
  );
};

export default PlanManager;