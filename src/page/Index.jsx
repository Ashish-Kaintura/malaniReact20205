import React, { useEffect } from "react";
import Hero from "../components/Hero";
import HomeAboutsection from "../components/HomeAboutsection";
import FilterGrid from "../components/FilterGrid";
import VirtualShowroom from "../components/VirtualShowroom";
import SwatchRail from "../components/SwatchRail";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";

export default function Index() {

  useEffect(()=>{
    window.scroll(0,0)
  })

  return (
    <>
      <Hero />
      <HomeAboutsection />
      <FilterGrid />
      <VirtualShowroom />
      <SwatchRail />
      <Testimonials />
      <Projects />
      <FAQ/>
      {/* <ContactSection /> */}
    </>
  );
}
