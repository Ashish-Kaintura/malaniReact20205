import React from "react";
import { useEffect } from "react";
import Hero from "../components/Hero";
import HappyCustomers from "../components/About/HappyCustomers";
import { ArrowBigDown } from "lucide-react";

export default function Clientele() {
  useEffect(() => {
    window.scroll(0, 0)
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10"></div>

        <div
          className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
            <span className="gradient-text">Malani Marble Pvt Ltd </span>
          </h2>
          <p className="md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Our products are loved by our clients and offered in a large range of sizes, colors, textures, and designs to fit any interior or exterior need at the best prices.
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div>
          <div className="text-center">
            <h1 className="text-5xl text-[#da373d] mb-4">
              Step Into Luxury
              <br />
              <span className="text-3xl text-gray-700">
                Explore Our Exclusive Marble Collection in Person
              </span>
            </h1>

          </div>

          <div className="flex justify-center mt-4 mb-10">
            <div className="border-b-2 border-[#da373d] w-24"></div>
          </div>

          <div className="py-8 text-gray-700  leading-relaxed max-w-7xl mx-auto">
            <p className="text-center ">
              Malani Marbles Pvt. Ltd. a renowned name in the stone industry, has been in business since 1997 and is in the top ten of marble suppliers in India. We deal, wholesale, supply, and export many varieties of marbles and granites, semi-precious stones, as well as all other natural stones. In addition, we also provide complete professional marble flooring services for residential and commercial jobs as a reliable natural stone supplier.
            </p>
            <br />
            <p className="text-center ">
              All manufactured products are manufactured using the best quality materials using the most advanced methods under the care of our experienced professionals. Our products are loved by our clients and offered in a large range of sizes, colors, textures, and designs to fit any interior or exterior need at the best prices.
            </p>
            <br />
            <p className="text-center ">
              We employ a skilled and qualified team that works with purpose to achieve our company's vision and maintain our standing as one of the premier granite and marble wholesalers. They help us ensure that we keep people's trust in us and still remain relevant.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 ">
        <img
          src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Clientel/26%20exp%20white.webp"
          alt="malnimarble from 26 year "
        />
      </div>
      <HappyCustomers />
    </>
  );
}
