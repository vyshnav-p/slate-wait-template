import React, { } from 'react';
import { siteDetails } from '../data/siteDetails';

export default function Outro() {

    return (
        <section className="bg-background flex flex-col items-center mx-auto z-10 relative mt-[25rem]">
            <h1 className='absolute bottom-[0.5rem] left-1/2 transform -translate-x-1/2 text-[20rem] font-bold text-foreground-muted opacity-20 hover:cursor-pointer hover:translate-y-[-3.5rem] hover:text-foreground hover:opacity-100 transition-all duration-500 ease-in-out z-0'>
                {siteDetails.siteName}
            </h1>


            <div className='h-56 flex bg-background items-center justify-center w-full z-10 relative text-foreground-muted'>
              <div className='flex max-w-[90vw] md:w-[45rem] lg:w-[50rem] items-center justify-between'>
               <p>@2025, Toko</p>
               <p>Company</p>
              </div>
            </div>
        </section>

    );
}
