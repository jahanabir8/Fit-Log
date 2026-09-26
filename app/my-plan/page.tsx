
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