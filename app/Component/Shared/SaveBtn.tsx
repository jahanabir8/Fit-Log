"use client";

import Link from "next/link";
import React, { useContext } from "react";
// import Libraries from "../Homepage/Libraries";
import { LibrariesContext } from "@/CreateContext/LibrariesProvider";
import { BtnPlanType } from "./TodayBtn";
import { toast } from "react-toastify";

const SaveBtn = ({ myPlan }: BtnPlanType) => {
  const { savedPlans, setSavedPlans } = useContext(LibrariesContext);
  // console.log(hellos);

  const handleSavedPlans = () => {
    const alreadyExists = savedPlans.some((plan) => plan.id === myPlan.id);

    if (alreadyExists) {
      toast.info(`${myPlan.name} is already in your saved plans`);
      return;
    }

    setSavedPlans([...savedPlans, myPlan]);
    toast.success("Plan Saved Successfuly");
  };

  //   console.log(savedPlans, 'savedPlans');

  return (
    <button
      onClick={() => handleSavedPlans()}
      className="border border-gray-700 hover:border-gray-500 bg-[#14161d] text-gray-300 font-medium py-2.5 px-4 rounded-xl text-xs md:text-sm flex items-center justify-center gap-2 transition-colors"
    >
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
  );
};

export default SaveBtn;
