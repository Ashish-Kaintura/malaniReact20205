import React from "react";
import Hero from "../components/Hero";
import { ArrowBigDown } from "lucide-react";
import {useEffect} from "react";
export default function VisionMission() {
  useEffect(()=>{
  window.scroll(0,0)
})
  return (
    <div className="w-full block">
      <section
        className="hero-bg h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(
                "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/ourmissionvission/our%20misiion%20banner.webp"
              )`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10"></div>

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

      {/* Our Team Section */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-col relative justify-center items-center ">
          <span className="absolute sm:h-[2.544vw] h-[8.544vw] sm:w-[3.646vw] w-[11.646vw] mr-40 top-[-2px] border-t-4 border-l-4 border-[#e02529]"></span>
          <h1 className="max-w-max px-2 text-4xl my-4">Our Team</h1>
          <span className="absolute sm:-bottom-[4px] bottom-[-2.002vw] sm:h-[2.344vw] h-[8.344vw] sm:w-[3.646vw] w-[11.646vw] ml-40 border-r-4 border-b-4 border-[#e02529]"></span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-4">
          <img
            className="w-full md:w-1/2 rounded-xl shadow-lg"
            src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/ourmissionvission/team.webp" // replace with actual team image
            alt="Malani Marble Team"
          />
          <p className="text-lg leading-relaxed text-gray-700 md:w-1/2 text-center md:text-left">
            At <span className="font-semibold text-red-600">Malani Marble</span>
            , we believe that every project is a masterpiece in the making. Our
            dedicated team blends passion, expertise, and creativity to bring
            your vision to life with timeless elegance, providing unparalleled
            quality and service.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="bg-fixed bg-cover bg-center bg-no-repeat py-16 px-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/9990201/pexels-photo-9990201.jpeg')", // replace with marble background
        }}
      >
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed bg-black/50 p-6 rounded-xl shadow-lg">
            We aim to exceed our client’s expectations by delivering excellent
            value in every product and service we offer. Our mission is to
            fulfill our customers’ unique needs, ensuring their utmost
            satisfaction with our craftsmanship and service.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-md">
            Our vision is to triumph over challenges, becoming the industry
            leader in natural marble supply. We strive to deliver outstanding
            quality stones while catering to the evolving needs of our customers
            with excellence and trust.
          </p>
        </div>
      </section>

      {/* img */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <img
            src="https://malanimarbles.com/img/26%20expe.webp"
            alt="Malani marble work with "
          />
        </div>
      </section>
    </div>
  );
}
