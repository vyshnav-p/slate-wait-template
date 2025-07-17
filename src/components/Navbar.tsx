'use client'

import React from 'react'
import Image from 'next/image'
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className='fixed w-80 left-0 right-0 top-10 mx-auto flex p-2 pl-3 items-center justify-between gap-4 bg-surface border border-surface-border rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none z-50'>
        <Image
          src={theme === "light" ? "/logo_light.png" : "/logo_dark.png"}
          alt="logo"
          width={25}
          height={25}
          priority
        />
      <button onClick={toggleTheme} className="bg-toggle-bg rounded-xl w-10 h-10 grid place-items-center border border-toggle-border">
        <FiSun className="h-[1rem] w-[1rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-icon-foreground" />
        <FaRegMoon className="absolute h-[1rem] w-[1rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-icon-foreground" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </motion.div>
  )
}
