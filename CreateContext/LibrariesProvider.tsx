'use client'

import { LibraryType } from "@/app/Component/Types/LibraryType";
// import { createContext } from "node:vm";
import React, {createContext, Dispatch, SetStateAction, useState } from "react";

export interface LibrariesContextType {
  readBooks: LibraryType[];
  setReadBooks: Dispatch<SetStateAction<LibraryType[]>>;
  wishList: LibraryType[];
  setWishList: Dispatch<SetStateAction<LibraryType[]>>;
}

export const LibrariesContext = createContext({})

const LibrariesProvider = ({ children }: { children: React.ReactNode }) => {
  const [myPlans, setMyPlans] = useState([]);
  const [savedPlans, setSavedPlans] = useState([]);

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

export default LibrariesProvider;
