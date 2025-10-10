import React from "react";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/About/WhyChooseUs";
import { BiDownArrow } from "react-icons/bi";
import { ArrowBigDown } from "lucide-react";
import {useEffect} from "react";
import { Helmet } from "react-helmet";
export default function Whyus() {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <>
      <section className="w-full">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Why Choose Malani Marbles</title>
          <link rel="canonical" href="https://www.malanimarbles.com/why-us" />
        </Helmet>
        <section
          className="hero-bg h-screen flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage: `url(
          "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/whyus/Why%20us.webp"
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
              <span className="gradient-text">Malani Marbles Pvt. Ltd.</span>
            </h2>
            <p className="md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Crafting Timeless Elegance with Premium Natural Stone for Over
              Three Decades
            </p>
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
          <div className="py-12">
            <div className="py-5">
              <div className="flex flex-col relative justify-center items-center">
                <span className="absolute sm:h-[2.544vw] h-[8.544vw] sm:w-[3.646vw] w-[11.646vw] mr-40 top-[-0.685vw] border-t-4 border-l-4 border-[#e02529]"></span>
                <h2 className="max-w-max px-2 text-4xl ">Why Us</h2>
                <span className="absolute sm:bottom-[-1.002vw] bottom-[-2.002vw] sm:h-[2.344vw] h-[8.344vw] sm:w-[3.646vw] w-[11.646vw] ml-40 border-r-4 border-b-4 border-[#e02529]"></span>
              </div>
            </div>
            <div className="py-8 text-gray-700  leading-relaxed">
              <p className="text-center">
                With a remarkable 26+ year presence in the industry, Malani
                Marbles has consistently been catering to customer requirements
                and exceeds expectations. Our commitment to excellent service
                and superior products has allowed us to expand across India. We
                are always trying to improve the quality of our products and
                enhance these with remarkable features, which is not only easy
                on the pocket but also increase their demand in the market.
              </p>
            </div>
          </div>
        </div>

        <Testimonials />

        <WhyChooseUs />
      </section>
    </>
  );
}
