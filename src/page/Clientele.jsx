import React from "react";
import {useEffect} from "react";
import Hero from "../components/Hero";
import HappyCustomers from "../components/About/HappyCustomers";
import { ArrowBigDown } from "lucide-react";

export default function Clientele() {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <>
      <section
        className="hero-bg h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(
                     "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Clientel/clientel%20banner.webp"
                   )`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>

        <div
          className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
            <span className="gradient-text">Malani Marble</span>
          </h1>
          <p className="md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Crafting Timeless Elegance with Premium Natural Stone for Over Three
            Decades
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
        <div className="">
          <div className="px-8 ">
            <div>
              <h1 className="text-center  text-5xl text-[#da373d]">
                Trust Us..
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="border-b w-96"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-96">
                <h1 className="text-right text-3xl  text-[#da373d]">
                  & Make your way here
                </h1>
              </div>
            </div>
          </div>
          <div className="py-8 text-gray-700 text-lg leading-relaxed">
            <p className="text-center">
              Malani Marbles, a well-known entity was established in 1997 and is
              engaged in Trading, Wholesaling, Supplying and Exporting high
              quality Marbles, Granites, Semi-precious and Natural Stones. We
              are also service provider of Marble Flooring Services. Our
              products are designed and crafted using the finest quality
              material and advanced techniques under the supervision of our
              skilled professionals. Our products are extremely valued by our
              esteemed clients and our products are available in various sizes,
              colors, designs and patterns as per the varied requirements of
              clients at affordable prices. We have a diligent team of capable
              qualified of capable and qualified personnel in their
              corresponding domain, which aim hard towards fulfilling our
              company’s goal and empower us to preserve our position in the
              market.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 ">
        <img
          src="hhttps://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Clientel/26%20exp%20white.webp"
          alt="malnimarble from 26 year "
        />
      </div>
      <HappyCustomers />
    </>
  );
}
