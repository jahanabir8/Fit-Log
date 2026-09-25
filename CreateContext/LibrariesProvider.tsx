'use client'

import { LibraryType } from "@/app/Component/Types/LibraryType";
// import { createContext } from "node:vm";
import React, {createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export interface LibrariesContextType {
  myPlans: LibraryType[];
  setMyPlans: Dispatch<SetStateAction<LibraryType[]>>;
  savedPlans: LibraryType[];
  setSavedPlans: Dispatch<SetStateAction<LibraryType[]>>;
}

export const LibrariesContext = createContext<LibrariesContextType | undefined>(undefined);

const LibrariesProvider = ({ children }: { children: React.ReactNode }) => {
  const [myPlans, setMyPlans] = useState<LibraryType[]>([]);
  const [savedPlans, setSavedPlans] = useState<LibraryType[]>([]);

  const sharedPlans = {
    myPlans,
    setMyPlans,
    savedPlans,
    setSavedPlans,
  };

  return (
    <LibrariesContext.Provider value={sharedPlans}>
      {children}
    </LibrariesContext.Provider>
  );
};

export const useLibrariesContext = () => {
  const context = useContext(LibrariesContext);
  if (!context) {
    throw new Error("useLibrariesContext must be used within a LibrariesProvider");
  }
  return context;
};

export default LibrariesProvider;
