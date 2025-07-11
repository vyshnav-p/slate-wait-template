import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { CgWebsite } from 'react-icons/cg'

export default function Hero() {
  return (
     <section id="hero" className="w-[50rem] mx-auto flex flex-col items-center text-center pt-48">
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} className="flex items-center justify-center gap-1.5 rounded-lg bg-surface border border-surface-border light:border-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none p-2">
          <CgWebsite className="text-sm text-icon-foreground" />
          <p className="text-xs text-foreground-muted">AI Powered</p>
        </motion.div>
        <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className="text-6xl font-semibold mt-3 max-w-[36rem]">Build Stunning Websites in Seconds</motion.h1>
        <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="max-w-[25rem] mt-3 text-[#959595]">Create pixel-perfect websites with the power of AI. Just drag, drop, and go live.</motion.p>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }} className="relative w-[25rem] h-[3rem] mt-8 ">
          <input
            type="text"
            placeholder="Your email"
            className="w-full h-full px-3 pr-[7rem] bg-surface-muted focus:bg-surface transition-colors duration-150 outline-none focus:outline-none border border-surface-muted-border focus:border-surface-border rounded-xl"
          />
          <button
            className="absolute text-foreground-inverse  top-1 bottom-1 right-1 px-4 bg-button-surface text-sm font-medium rounded-xl border border-surface-border"
          >
            Join waitlist
          </button>
        </motion.div>

        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }} className="flex items-center mt-6 gap-3">
          <div className="flex -space-x-2">
            {['/profile_1.jpg', '/profile_2.jpg', '/profile_3.jpg'].map((src, index) => (
              <div
                key={index}
                className="relative w-7 h-7 rounded-full border-[1.5px] border-white dark:border-black overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`User ${index + 1}`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-[0.83rem] text-foreground-muted">1000 + already joined the waitlist</p>
        </motion.div>
        {/* device */}

        <div className="relative z-0 w-full">
          <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 0.5,delay: 0.8 }} className="flex items-center justify-center w-full h-[32rem] bg-[#7a7b7c] rounded-3xl mt-24 p-0.5 z-0">
            <div className="flex items-center justify-center w-full h-full rounded-3xl p-2 bg-black">
              <div className="relative flex items-center justify-center w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/dashboard.png"
                  alt="Dashboard"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </motion.div>
          {/*  */}
          <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-background to-transparent" />
        </div>



      </section>
  )
}
