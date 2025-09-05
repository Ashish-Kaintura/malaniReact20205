import React from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/About/WhyChooseUs";
export default function Whyus() {
  return (
    <>
      <section className="w-full">
        <Hero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
          <div className="py-12">
            <div className="py-5">
              <div className="flex flex-col relative justify-center items-center">
                <span className="absolute sm:h-[2.544vw] h-[8.544vw] sm:w-[3.646vw] w-[11.646vw] mr-40 top-[-0.685vw] border-t-4 border-l-4 border-[#e02529]"></span>
                <h1 className="max-w-max px-2 text-4xl ">Why Us</h1>
                <span className="absolute sm:bottom-[-1.002vw] bottom-[-2.002vw] sm:h-[2.344vw] h-[8.344vw] sm:w-[3.646vw] w-[11.646vw] ml-40 border-r-4 border-b-4 border-[#e02529]"></span>
              </div>
            </div>
            <div className="py-8 text-gray-700 text-lg leading-relaxed">
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
