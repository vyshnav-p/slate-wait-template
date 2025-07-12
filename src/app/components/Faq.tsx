import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { TbMessages } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { faqs } from '../data/faq';
import { IFAQ } from '../type';

export default function Faq() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const leftColumn = faqs.filter((_, i) => i % 2 === 0);
    const rightColumn = faqs.filter((_, i) => i % 2 === 1);

    const renderFaqItem = (faq: IFAQ, indexInOriginal: number) => {
        const isOpen = openIndex === indexInOriginal;

        return (
            <motion.button
                onClick={() => setOpenIndex(isOpen ? null : indexInOriginal)}
                key={indexInOriginal}
                className="w-full bg-surface-muted border border-surface-muted-border rounded-2xl text-sm px-4 py-4 mb-4 hover:cursor-pointer"
            >
                <div
                    className="w-full flex items-center justify-between text-start"
                >
                    <p>{faq.question}</p>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <IoIosArrowDropdownCircle className="size-5 text-icon-foreground" />
                    </motion.div>
                </div>

                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden text-foreground-muted text-start"
                >

                    <p className='mt-3 text-[0.78rem]'>{faq.answer}</p>

                </motion.div>
            </motion.button>
        );
    };

    return (
        <section className="max-w-[90vw] md:w-[45rem] lg:w-[50rem] min-h-screen flex flex-col items-center mx-auto z-10 bg-background relative pt-40">
            <div className="w-fit self-start flex items-center justify-center gap-1.5 rounded-lg bg-surface border border-surface-border shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-2">
                <TbMessages className="text-sm text-icon-foreground" />
                <p className="text-xs text-foreground-muted">FAQ</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-4 w-full mt-10">
                {/* Left Column */}
                <div className="flex flex-col w-full">
                    {leftColumn.map((faq, i) => renderFaqItem(faq, i * 2))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col w-full">
                    {rightColumn.map((faq, i) => renderFaqItem(faq, i * 2 + 1))}
                </div>
            </div>
        </section>
    );
}
