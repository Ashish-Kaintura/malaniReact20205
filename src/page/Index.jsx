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
import { Helmet } from "react-helmet";

export default function Index() {

  useEffect(() => {
    window.scroll(0, 0)
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Premium Marble & Granite Supplier in Delhi | Marbles Pvt. Ltd</title>
        <meta name="description" content="Explore top-quality imported marble, imported granite andonyxfrom a trusted supplier in Delhi. Find imported Italian marble, designer stones, and expert guidance for luxury interiors."></meta>
        <link rel="canonical" href="https://www.malanimarbles.com" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Malani Marbles Pvt. Ltd.",
          "description": "Best marble suppliers in Delhi, India offering premium quality Italian and Indian marble collections for residential and commercial spaces.",
          "image": "https://www.malanimarbles.com/img/logo-option-1.webp",
          "@id": "https://www.malanimarbles.com/#organization",
          "url": "https://www.malanimarbles.com/",
          "telephone": "+91-9810387297",
          "address": {
            "@type": "PostalAddress",
          "streetAddress": "Khasra No. 809-810, Chattarpur Mandir Road, Near Tivoli Garden",
          "addressLocality": "New Delhi",
          "postalCode": "110074",
          "addressRegion": "Delhi",
          "addressCountry": "IN"
  },
          "geo": {
            "@type": "GeoCoordinates",
          "latitude": 28.4999511,
          "longitude": 77.1850275
  },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
          ],
          "opens": "09:00",
          "closes": "23:59"
  },
          "sameAs": [
          "https://www.facebook.com/malanimarbles",
          "https://www.instagram.com/malanimarbles/",
          "https://www.youtube.com/@malanimarbles6638",
          "https://www.linkedin.com/company/malani-marbles",
          "https://in.pinterest.com/malanimarbles1/"
          ]
}`}
        </script>

      </Helmet>
      <Hero />
      <HomeAboutsection />
      <FilterGrid />
      <VirtualShowroom />
      <SwatchRail />
      <Testimonials />
      <Projects />
      <FAQ />
      {/* <ContactSection /> */}
    </>
  );
}
