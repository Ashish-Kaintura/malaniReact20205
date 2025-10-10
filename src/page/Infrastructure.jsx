import React from "react";
import Hero from "../components/Hero";
import InfrastructureTabs from "../components/About/InfrastructureTabs";
import { ArrowBigDown } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function Infrastructure() {
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Infrastructure | World-Class Marble Processing Facilities</title>
        <link rel="canonical" href="https://www.malanimarbles.com/infrastructure" />
      </Helmet>
      <section
        className="hero-bg h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(
                "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/infrastructure/Infrastructure.webp"
              )`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10"></div>

        <div
          className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
            Infrastructure  <span className="gradient-text">Malani Marble Pvt Ltd. </span>
          </h2>
          {/* <p className="md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Crafting Timeless Elegance with Premium Natural Stone for Over Three
            Decades
          </p> */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onclick="scrollToSection('products')"
                      className="btn-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <i className="fas fa-gem mr-2"></i>Explore Collection
                    </button>
                    <button
                      onclick="scrollToSection('contact')"
                      className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all"
                    >
                      <i className="fas fa-phone mr-2"></i>Get Quote
                    </button>
                  </div> */}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white floating">
          <ArrowBigDown size={40} />
        </div>
      </section>
      <div className="pt-12">
        <div className="flex flex-col relative justify-center items-center">
          <span className="sm:flex hidden absolute sm:h-[2.544vw] h-[8.544vw] sm:w-[3.646vw] w-[11.646vw] mr-[750px] top-[-0.685vw] border-t-4 border-l-4 border-[#e02529]"></span>
          <h1 className="max-w-max px-2 text-4xl ">Our Infrastructure: Built for Quality & Scale</h1>
          <span className="sm:flex hidden absolute sm:bottom-[-1.002vw] bottom-[-2.002vw] sm:h-[2.344vw] h-[8.344vw] sm:w-[3.646vw] w-[11.646vw] ml-[750px] border-r-4 border-b-4 border-[#e02529]"></span>
        </div>
      </div>
      <div className="flex justify-center  py-8 px-5 sm:px-12">
        <div className="max-w-7xl text-gray-700">
          <p className="py-5  text-left">
            At Malani Marbles Pvt. Ltd., our world-class infrastructure is the foundation of a commitment to quality and on-time deliveries. With over 26 years of experience, we have distribution points throughout Delhi NCR, stockyards, warehouses, and showrooms located in Chattarpur and Kishangarh.
          </p>
          <p className="py-6  text-left">
            Our modern facilities have the latest technology to provide safe, modern storage and handling capacity for all natural stone products. As one of the largest marble stockholders in India, we have the capacity to fill bulk orders in a fast and precise manner. From selection to supply, you will have a memorable experience and utter confidence with every delivery
          </p>
        </div>
      </div>

      <InfrastructureTabs />
    </>
  );
}
