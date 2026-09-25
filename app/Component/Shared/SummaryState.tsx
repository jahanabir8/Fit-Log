import React from 'react';

interface TotalType{
    totalCalories: number,
    totalMinutes: number,
    totalExercises: number
}

const SummaryState = ({totalCalories, totalMinutes, totalExercises}: TotalType) => {
    return (
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
    );
};

export default SummaryState;