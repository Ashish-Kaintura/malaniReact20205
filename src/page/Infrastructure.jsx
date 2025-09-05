import React from "react";
import Hero from "../components/Hero";
import InfrastructureTabs from "../components/About/InfrastructureTabs";
import { ArrowBigDown } from "lucide-react";

export default function Infrastructure() {
  return (
    <>
      <section
        className="hero-bg h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(
                "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/infrastructure/infrastature%20banner.webp"
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
      <div className="pt-12">
        <div className="flex flex-col relative justify-center items-center">
          <span className="absolute sm:h-[2.544vw] h-[8.544vw] sm:w-[3.646vw] w-[11.646vw] mr-64 top-[-0.685vw] border-t-4 border-l-4 border-[#e02529]"></span>
          <h1 className="max-w-max px-2 text-4xl ">Infrastructure</h1>
          <span className="absolute sm:bottom-[-1.002vw] bottom-[-2.002vw] sm:h-[2.344vw] h-[8.344vw] sm:w-[3.646vw] w-[11.646vw] ml-64 border-r-4 border-b-4 border-[#e02529]"></span>
        </div>
      </div>
      <div className="flex justify-center  py-8 px-5 sm:px-12">
        <div className="max-w-7xl text-gray-700">
          <p className="py-5 text-lg  text-left">
            We have a capacious infrastructure that allows us to meet the bulk
            demands of our clients within a given timeline. Our infrastructure
            has all the basic amenities to keep all the products to safe from
            water and dirt.
          </p>
          <p className="py-6  text-lg text-left">
            Delivering the best-of-its-quality products is made possible because
            of our cutting-edge technology combined with the unparalleled skills
            of our team. We are based in Delhi / NCR, however we have our
            stockyards and warehouses spread all over in Delhi, NCR, Chattarpur
            and Kishangarh. We have two of our Showrooms in Chattarpur,
            Stockyards Malani Marbles boasts of having one of the largest
            stockyards in the industry using the latest technology, which is the
            main factor in its success and reputation as a leading provider of
            high-quality marbles, granites and other natural stones. Our
            customers are sure to find exactly what they are looking for.
          </p>
        </div>
      </div>

      <InfrastructureTabs />
    </>
  );
}
