import React from "react";
import Hero from "../components/Hero";
import HomeAboutsection from "../components/HomeAboutsection";
import FilterGrid from "../components/FilterGrid";
import VirtualShowroom from "../components/VirtualShowroom";
import SwatchRail from "../components/SwatchRail";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";

export default function Index() {
  return (
    <>
      <Hero />
      <HomeAboutsection />
      <FilterGrid />
      <VirtualShowroom />
      <SwatchRail />
      <Testimonials />
      <Projects />
      {/* <ContactSection /> */}
    </>
  );
}
