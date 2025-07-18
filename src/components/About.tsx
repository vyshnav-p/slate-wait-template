import { motion, Variants } from "motion/react";
import { aboutDetails } from "@/data/about";

export default function About() {
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

  return (
    <motion.section
      id={aboutDetails.sectionId}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="mx-auto flex w-[90vw] flex-col items-center pt-36 md:w-[45rem] lg:w-[50rem]"
    >
      <div className="bg-surface border-surface-border self-start rounded-lg border p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none">
        <p className="text-muted-foreground text-xs">
          {aboutDetails.sectionLabel}
        </p>
      </div>

      <div className="mt-5 flex w-full flex-col items-center justify-center gap-5">
        <motion.h1
          variants={itemVariants}
          className="text-foreground text-xl font-semibold md:text-2xl"
        >
          {aboutDetails.description}
        </motion.h1>

        <div className="flex h-[30rem] w-full flex-col items-center gap-4 md:h-[6rem] md:flex-row">
          {aboutDetails.features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-muted-surface border-muted-surface-border flex h-full w-[15rem] flex-col items-center justify-center gap-3 rounded-2xl border md:w-full"
              >
                <Icon className="size-6" />
                <p className="text-muted-foreground text-sm font-semibold">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 h-[30rem] max-h-[30rem] w-full">
          <video
            src={aboutDetails.videoSrc}
            key={aboutDetails.videoSrc}
            className="border-surface-border h-full w-full rounded-4xl border-[10px] object-cover"
            loop
            autoPlay
            playsInline
            muted
            aria-label="About section video showing product demo"
          />
        </div>
      </div>
    </motion.section>
  );
}
