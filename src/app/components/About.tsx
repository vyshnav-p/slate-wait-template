import { motion } from 'motion/react'
import React from 'react'
import Image from 'next/image'
import { HiOutlineSparkles } from 'react-icons/hi'
import { LuChartNoAxesColumn, LuZap } from 'react-icons/lu'

export default function About() {
    return (
        <section className="w-[50rem] min-h-screen mx-auto z-10 bg-background relative pt-32">
            <div className="w-fit flex items-center justify-center gap-1.5 rounded-lg bg-surface border border-surface-border light:border-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none p-2">
                <p className="text-xs text-foreground-muted">About Toko</p>
            </div>
            {/*  */}
            <div className="w-full grid grid-rows-2 gap-5 mt-10">

                {/* Row 1 */}
                <div className="w-full flex items-center justify-between gap-5 min-h-20">
                    <div className="h-full place-content-center bg-surface-muted rounded-2xl border border-surface-muted-border max-w-xl p-5">
                        <h1 className="text-lg font-semibold text-foreground-muted">
                            Toko is the fastest way to build a website. No templates. No drag and drop. No friction.
                            Just tell Toko what you need, and it builds it for you. Instantly. Clean, responsive, and ready to go live.
                        </h1>
                    </div>

                    <div className='flex relative w-full h-full rounded-2xl'>
                        <Image
                            src={'/dashboard.png'}
                            alt={'dashboard'}
                            fill
                            className="object-cover"
                        />

                    </div>
                </div>

                {/* Row 2 - Grid for equal width cards */}
                <div className="w-full grid grid-cols-4 gap-5 h-full">
                    <div className="flex flex-col items-center justify-center gap-3 bg-surface-muted rounded-2xl border border-surface-muted-border py-5">
                        <HiOutlineSparkles className="text-icon-foreground size-6" />
                        <p className="text-foreground-muted font-semibold">Advanced ML & NLP</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 bg-surface-muted rounded-2xl border border-surface-muted-border py-5">
                        <LuChartNoAxesColumn className="text-icon-foreground size-6" />
                        <p className="text-foreground-muted font-semibold">Easy Analytics</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 bg-surface-muted rounded-2xl border border-surface-muted-border py-5">
                        <LuZap className="text-icon-foreground size-6" />
                        <p className="text-foreground-muted font-semibold">10x Faster</p>
                    </div>
                     <div className="flex flex-col items-center justify-center gap-3 bg-surface-muted rounded-2xl border border-surface-muted-border py-5">
                        <LuZap className="text-icon-foreground size-6" />
                        <p className="text-foreground-muted font-semibold">10x Faster</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
