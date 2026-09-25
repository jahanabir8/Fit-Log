"use client";

import { LibrariesContext } from "@/CreateContext/LibrariesProvider";
import Link from "next/link";
import React, { useContext } from "react";
import { LibraryType } from "../Types/LibraryType";
import { toast } from "react-toastify";

export interface BtnPlanType {
  myPlan: LibraryType;
}

const TodayBtn = ({ myPlan }: BtnPlanType) => {
  // const hellos = LibrariesContext()
  const { myPlans, setMyPlans } = useContext(LibrariesContext);

  const handleMyPlans = () => {
    // const alreadyExists = savedPlans.some((plan) => plan.id === myPlan.id);
    //       if (alreadyExists) {
    //     toast.info(`${myPlan.name} is already in your saved plans`);
    //     return;
    //   }

    const alreadyExists = myPlans.some((plan) => plan.id === myPlan.id);
        if (alreadyExists) {
        toast.info(`${myPlan.name} is already in your contains plans`);
        return;
    }

    setMyPlans([...myPlans, myPlan]);
    toast.success("Plan Added Successfuly");
  };
  // console.log(myPlans, 'myPlans');

  return (
    <button
      onClick={() => handleMyPlans()}
      className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold py-2.5 px-4 rounded-xl text-xs md:text-sm flex items-center justify-center gap-2 transition-colors"
    >
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
  );
};

export default TodayBtn;