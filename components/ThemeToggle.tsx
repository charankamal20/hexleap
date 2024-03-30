"use client";
import { useTheme } from "next-themes";
import { IoIosSunny } from "react-icons/io";
import { FaCloudMoon } from "react-icons/fa";
import { useEffect } from "react";

/**
 * Renders a toggle button for switching between light and dark themes.
 * Uses the `next-themes` library to manage the theme state.
 */
const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className={`z-40 opacity-50 hover:opacity-100 rounded-full transition-all text-xs px-4 py-2 drop-shadow-xl dark:bg-background group hover:animate-tada duration-700 bg-background-dark text-black fixed md:top-6 max-md:bottom-6 right-5 md:right-8 active:scale-95`}
    >
      <IoIosSunny
        className={`size-5 active:rotate-90 transition-all duration-300 text-background-dark dark:block hidden`}
      />
      <FaCloudMoon
        className={`text-white size-5 active:translate-x-2 transition-all duration-300 dark:hidden block`}
      />
    </button>
  );
};

export default ToggleButton;
