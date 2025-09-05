import React from "react";
import Hero from "../components/Hero";
import HappyCustomers from "../components/About/HappyCustomers";

export default function Clientele() {
  return (
    <>
      <Hero />
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
          src="https://malanimarbles.com/img/26%20exp%20white.webp"
          alt="malnimarble from 26 year "
        />
      </div>
      <HappyCustomers />
    </>
  );
}
