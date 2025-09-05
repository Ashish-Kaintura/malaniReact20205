import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(
          "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/pexels-photo-19916721.webp"
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white floating">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
