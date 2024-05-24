"use client";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export function ThemedButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="text-xl">
      {theme === "light" ? <BiMoon /> : <BiSun />}
    </div>
  );
}
