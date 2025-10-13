import React from "react";
import Hero from "../components/Hero";
import { ArrowBigDown } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function VisionMission() {
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <div className="w-full block">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Mission - Malani Marbles</title>
        <link rel="canonical" href="https://www.malanimarbles.com/our-vision-and-mission" />
      </Helmet>
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
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
            <span className="gradient-text">Malani Marble</span>
          </h2>
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
          <p className="leading-relaxed text-gray-700 md:w-1/2 text-center md:text-left">
            At <span className="font-semibold text-red-600">Malani Marbles Pvt. Ltd</span>
            , we have assembled a terrific team of well over 250 qualified professionals to take the natural stone industry in a new direction with quality excellence. From our home base of Delhi NCR and Kishangarh, we have state-of-the-art showrooms, manufacturing facilities, and stockyards to ensure a professional process from selection to installation. Our experts have combined decades of experience with an artistic touch and engineering precision to reflect your needed design/meticulous detail on the raw stone.

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
            At Malani Marbles Pvt. Ltd, we strive to exceed all of our clients’ expectations by providing excellent value in every product and service we offer. From our top-quality natural marble and stone products and special design and installation services to our reliability and quality, we deliver high quality every time.

          </p>
          <br />
          <p className="text-lg leading-relaxed bg-black/50 p-6 rounded-xl shadow-lg">
            We understand that every customer has their own individual wants and work-related requirements, which is why we take a fully personalized customer approach so that the outcome receives complete buyer satisfaction. Whether we are working with residential interiors, commercial developments, or architectural spaces, we provide unique marble solutions that illustrate quality, durability, and beauty.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-md">
            At Malani Marbles Pvt. Ltd., our mission and vision are to face the challenges of our sector and become a recognized supplier of quality natural marble and stone. At Malani Marble we have a vision to establish new approaches for precision, quality, and service through the regular delivery of high-grade natural stone products that fulfill the needs of our customers. We wish to be the respected supplier of choice for architects, interior designers, builders, and homeowners in need of the enduring beauty and longevity that only natural stone provides. </p>
        </div>
      </section>

      {/* img */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <img
            src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Clientel/28-years-banner.webp"
            alt="Malani marble work with "
          />
        </div>
      </section>
    </div>
  );
}
