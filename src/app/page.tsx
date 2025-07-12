"use client"

import About from "./components/About";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Outro from "./components/Outro";

export default function Home() {
  return (
    <>
     <Hero/>
     <About/>
     <Faq/>
     <Outro/>
    </>
  );
}
