"use client";

import React, { FC, useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { useThemeContext } from "@/contexts/ThemeContextProvider";

const ThemeSwitch: FC = () => {
  const { theme, toggleTheme } = useThemeContext(); 
  
  return (
    <button onClick={toggleTheme} className="fixed bottom-5 right-5 bg-white 
      w-[3rem] h-[3rem] rounded-full border border-white/40 backdrop-blur-[0.5rem] bg-opacity-80 
      shadow-2xl flex items-center justify-center hover:scale-[1.15] active:scale-105 
      transition-all dark:bg-gray-950">
        {
          theme === "light" ? <BsSun /> : <BsMoon />
        }
    </button>
  )
}

export default ThemeSwitch