import Image from "next/image";
import { LibraryType } from "../Types/LibraryType"; // adjust path as needed
import Link from "next/link";

export interface LibraryCardProps {
  exercise: LibraryType;
}

export default function LibraryCard({ exercise }: LibraryCardProps) {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = exercise;

  return (
    <Link href={`/workout/${id}`}>
      <div className="overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-lg">
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            {muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black uppercase tracking-wide"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="text-xl font-extrabold text-white uppercase tracking-wide mb-1">
            {name}
          </h2>

          {/* Equipment */}
          <p className="text-sm text-neutral-400 mb-4">{equipment}</p>

          {/* Meta info */}
          <div className="flex items-center justify-start gap-3 border-t border-neutral-800 pt-4 text-sm text-neutral-300">
            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-neutral-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7v5l3 3"
                />
              </svg>
              {duration} min
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-neutral-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c-1.5 3-4 5-4 8a4 4 0 108 0c0-1-.3-1.8-.8-2.6.5 1.8-.5 2.6-1.2 2.6-1 0-1.5-.8-1-1.8C13.5 6.5 13.5 4 12 2z" />
              </svg>
              {caloriesBurned} kcal
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-lime-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
              {rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
