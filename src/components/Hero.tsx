import React from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { heroDetails } from "@/data/hero";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const BadgeIcon = heroDetails.badge.icon;

  return (
    <section
      id={heroDetails.sectionId}
      className="mx-auto flex w-[90vw] flex-col items-center overflow-hidden pt-48 text-center md:w-[45rem] lg:w-[50rem]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="bg-surface border-surface-border flex items-center justify-center gap-1.5 rounded-lg border p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none"
        >
          <BadgeIcon className="text-icon-foreground text-sm" />
          <p className="text-muted-foreground text-xs">
            {heroDetails.badge.text}
          </p>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="mt-5 max-w-[36rem] text-3xl font-semibold md:text-6xl"
        >
          {heroDetails.title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground mt-2 max-w-[25rem] text-sm md:text-base"
        >
          {heroDetails.subtitle}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="relative mt-8 h-[3rem] w-full md:w-[25rem]"
        >
          <input
            type="text"
            placeholder="Your email"
            className="bg-muted-surface focus:bg-surface border-muted-surface-border focus:border-surface-border h-full w-full rounded-xl border px-3 pr-[7rem] text-sm transition-colors duration-150 outline-none"
          />
          <button className="text-foreground-inverse bg-button-surface border-surface-border absolute top-1 right-1 bottom-1 rounded-xl border px-4 text-sm font-medium hover:cursor-pointer">
            Join waitlist
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {heroDetails.socialProof.images.map((imageSrc, index) => (
              <div
                key={index}
                className="relative h-7 w-7 overflow-hidden rounded-full border-[1.5px]"
              >
                <Image
                  src={imageSrc}
                  alt={`User ${index + 1}`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-[0.83rem]">
            {heroDetails.socialProof.text}
          </p>
        </motion.div>
      </motion.div>

      <div className="relative w-full">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="z-0 mt-24 flex h-[12rem] w-full items-center justify-center rounded-2xl bg-[#7a7b7c] p-0.5 md:h-[32rem] md:rounded-3xl"
        >
          <div className="flex h-full w-full rounded-2xl bg-black p-1 md:rounded-3xl md:p-2">
            <div className="relative flex h-full w-full overflow-hidden rounded-lg md:rounded-2xl">
              <Image
                src={heroDetails.heroImage}
                alt="Dashboard"
                fill
                className="object-cover object-top-left"
              />
            </div>
          </div>
        </motion.div>
        <div className="from-background absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t to-transparent md:h-36" />
      </div>
    </section>
  );
}
