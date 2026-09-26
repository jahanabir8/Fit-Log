"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useContext } from "react";
import {
  // LibrariesContext,
  useLibrariesContext,
} from "@/CreateContext/LibrariesProvider";

const NavBar = () => {
  const pathName = usePathname();

  const { myPlans, savedPlans } = useLibrariesContext();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`rounded-full px-4 py-2 text-xs ${
            pathName === "/"
              ? "bg-[#1A2312] text-[#C2F800]"
              : "text-[#8C8F91] hover:bg-[#1A2312] hover:text-[#C2F800]"
          }`}
        >
          Workout
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={`rounded-full px-4 py-2 text-xs ${
            pathName === "/my-plan"
              ? "bg-[#1A2312] text-[#C2F800]"
              : "text-[#8C8F91] hover:bg-[#1A2312] hover:text-[#C2F800]"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="border-b border-[#1B1E20] bg-[#1C1F26] sticky top-0 left-0">
      <div className="navbar container mx-auto min-h-17.5 max-w-280 px-4 sm:px-5">
        {/* Left: Logo + Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm mr-1 px-2 text-[#C2F800] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-48 rounded-box border border-[#1B1E20] bg-[#0D0F10] p-2 shadow-xl"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="btn btn-ghost flex h-auto gap-2 px-1 text-lg font-bold text-white hover:bg-transparent sm:text-xl"
          >
            <Image
              src="/logo.png"
              alt="FITLOG logo"
              width={26}
              height={26}
              className="object-contain"
            />

            <span>FITLOG</span>
          </Link>
        </div>

        {/* Center Navigation - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {links}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2 sm:gap-5">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs text-[#B5B7B8] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#C2F800] px-1 text-[10px] font-bold text-black">
              {myPlans.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs text-[#B5B7B8] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-4.5 min-w-4.5 items-center justify-center rounded-full border border-[#34383B] px-1 text-[10px] text-[#8C8F91]">
              {savedPlans.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
