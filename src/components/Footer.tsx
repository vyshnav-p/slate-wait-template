import React from "react";
import { siteDetails } from "../data/siteDetails";
import { footerDetails } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="relative mx-auto flex items-center justify-center overflow-x-clip pt-[15rem] md:pt-[25rem]">
      <h1 className="text-muted-foreground hover:text-foreground absolute bottom-[8rem] left-1/2 z-0 -translate-x-1/2 transform text-[9rem] font-bold opacity-20 transition-all duration-500 ease-in-out hover:translate-y-[-3.5rem] hover:cursor-pointer hover:opacity-100 md:bottom-[4rem] md:text-[15rem] lg:bottom-[0.5rem] lg:text-[20rem]">
        {siteDetails.siteName}
      </h1>
      <div className="bg-background text-muted-foreground z-10 flex h-56 w-full items-center justify-center">
        <div className="flex w-[90vw] items-center justify-between text-sm md:w-[45rem] lg:w-[50rem]">
          <p>{footerDetails.copyrightNotice}</p>
          <div className="flex items-center justify-center gap-2">
            {footerDetails.socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground text-icon-foreground duration-300"
                >
                  <Icon className="size-5 hover:cursor-pointer" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
