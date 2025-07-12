import React from 'react'
import { HiOutlineSparkles } from 'react-icons/hi'
import { LuChartNoAxesColumn, LuZap } from 'react-icons/lu'

export default function About() {
    return (
        <section className="w-[50rem] min-h-screen flex flex-col items-center mx-auto z-10 bg-background relative pt-40">
            <div className="w-fit self-start flex items-center justify-center gap-1.5 rounded-lg bg-surface border border-surface-border light:border-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none p-2">
                <p className="text-xs text-foreground-muted">About Toko</p>
            </div>

            <div className='flex flex-col w-full items-center justify-center mt-5'>

                <h1 className="font-semibold text-foreground-muted text-2xl">
                    Toko is the <span className=''>fastest way to build a website</span>. No templates. No drag and drop. No friction.
                    Just tell Toko what you need, and it builds it for you. Instantly. Clean, responsive, and ready to go live.
                </h1>

                <div className="w-full relative flex items-stretch justify-between gap-4 h-[6rem] mt-5">
                    {[
                        { icon: <HiOutlineSparkles className="size-6" />, label: "Advanced ML & NLP" },
                        { icon: <LuChartNoAxesColumn className="size-6" />, label: "Easy Analytics" },
                        { icon: <LuZap className="size-6" />, label: "10x Faster" },
                        { icon: <LuZap className="size-6" />, label: "10x Faster" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="h-full w-full flex flex-col items-center justify-center gap-3 bg-surface-muted rounded-2xl border border-surface-muted-border"
                        >
                            {item.icon}
                            <p className="font-semibold text-sm">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/*  */}

                <div className='w-full h-[30rem] max-h-[30rem] mt-10'>
                    <video
                        src="/team.mp4"
                        className="w-full h-full object-cover rounded-[2.3rem] border-[7px] border-surface-muted-border"
                        loop
                        autoPlay
                        playsInline
                        muted
                    />

                </div>

            </div>

        </section>
    )
}
