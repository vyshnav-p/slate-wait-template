import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { motion, Variants } from "motion/react";
import { faqDetails, faqs } from "../data/faq";
import { IFAQs } from "@/type";

export default function Faq() {
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 === 1);

  const renderFaqItem = (faq: IFAQs, indexInOriginal: number) => {
    const isOpen = openIndex === indexInOriginal;

    return (
      <motion.button
        onClick={() => setOpenIndex(isOpen ? null : indexInOriginal)}
        key={indexInOriginal}
        variants={itemVariants}
        className="bg-muted-surface border-muted-surface-border mb-4 w-full rounded-2xl border px-4 py-4 text-sm hover:cursor-pointer"
      >
        <div className="flex w-full items-center justify-between text-start">
          <p>{faq.question}</p>
          <div
            className={`${isOpen && "rotate-180"} transition-transform duration-300`}
          >
            <IoIosArrowDropdownCircle className="text-icon-foreground size-5" />
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-muted-foreground overflow-hidden text-start"
        >
          <p className="mt-3 text-[0.78rem]">{faq.answer}</p>
        </motion.div>
      </motion.button>
    );
  };

  return (
    <motion.section
      id={faqDetails.sectionId}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="mx-auto flex w-[90vw] flex-col items-center pt-36 md:w-[45rem] lg:w-[50rem]"
    >
      <div className="bg-surface border-surface-border self-start rounded-lg border p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none">
        <p className="text-muted-foreground text-xs">
          {faqDetails.sectionLabel}
        </p>
      </div>

      <div className="mt-10 flex w-full flex-col lg:flex-row lg:gap-4">
        <div className="flex w-full flex-col">
          {leftColumn.map((faq, i) => renderFaqItem(faq, i * 2))}
        </div>
        <div className="flex w-full flex-col">
          {rightColumn.map((faq, i) => renderFaqItem(faq, i * 2 + 1))}
        </div>
      </div>
    </motion.section>
  );
}
