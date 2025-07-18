"use client";

import Image from "next/image";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-surface border-surface-border fixed top-10 right-0 left-0 z-50 mx-auto flex w-80 items-center justify-between gap-4 rounded-2xl border p-2 pl-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none"
    >
      <Image
        src={theme === "light" ? "/logo_light.png" : "/logo_dark.png"}
        alt="Site logo"
        width={25}
        height={25}
        priority
      />
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark/light theme"
        className="bg-toggle-bg border-toggle-border grid h-10 w-10 place-items-center rounded-xl border"
      >
        <FiSun className="text-icon-foreground h-[1rem] w-[1rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <FaRegMoon className="text-icon-foreground absolute h-[1rem] w-[1rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </motion.div>
  );
}
