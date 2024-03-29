"use client";
import { useTheme } from "next-themes";

const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="text-xs px-4 py-2 bg-gray-400 text-black rounded-lg fixed top-4 right-10 active:scale-95 transition-all duration-200"
    >
      Toggle Theme
    </button>
  );
};

export default ToggleButton;
