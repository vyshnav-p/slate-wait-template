"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { siteDetails } from "@/data/siteDetails";
import { aboutFeatures } from "@/data/about";

export default function Home() {
  return (
    <>
      <Hero />
      <About
        sectionLabel={`About ${siteDetails.siteName}`}
        description="Toko is the fastest way to build a website. No templates. No drag and
          drop. No friction. Just tell Toko what you need, and it builds it for
          you. Instantly. Clean, responsive, and ready to go live."
        features={aboutFeatures}
        videoSrc="/videos/team.mp4"
      />
      <Faq />
      <Footer />
    </>
  );
}
