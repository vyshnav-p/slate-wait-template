import React, { } from 'react';
import { siteDetails } from '../data/siteDetails';
import { RiTwitterXFill } from 'react-icons/ri';
import { TbBrandYoutube } from 'react-icons/tb';

export default function Footer() {

    return (
        <footer className="bg-background flex flex-col items-center mx-auto z-10 relative mt-[12rem] md:mt-[25rem] overflow-x-clip">
            <h1 className='absolute bottom-[8rem] md:bottom-[4rem] lg:bottom-[0.5rem] left-1/2 transform -translate-x-1/2 text-[9rem] md:text-[15rem] lg:text-[20rem] font-bold text-muted-foreground opacity-20 hover:cursor-pointer hover:translate-y-[-3.5rem] hover:text-foreground hover:opacity-100 transition-all duration-500 ease-in-out z-0'>
                {siteDetails.siteName}
            </h1>
            <div className='h-56 flex bg-background items-center justify-center w-full z-10 relative text-muted-foreground'>
              <div className='flex w-[90vw] md:w-[45rem] lg:w-[50rem] items-center justify-between text-sm'>
               <p>@2025, Toko</p>
             <div className='flex items-center justify-center gap-2'>
                <RiTwitterXFill className='text-icon-foreground size-5 hover:text-foreground hover:cursor-pointer duration-300'/>
                <TbBrandYoutube className='text-icon-foreground size-5 hover:text-foreground hover:cursor-pointer duration-300'/>
             </div>
              </div>
            </div>
        </footer>

    );
}
