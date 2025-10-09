import { ArrowBigDown } from "lucide-react";
import React from "react";

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero-bg h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background video (replace src with your video file or url) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp29yKjyM5ZpKI5HjImkeclnXWlN5rOwRSBA&s" // fallback poster image
      >
        <source src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/video/home%20page%20video.mp4" type="video/mp4" />
        {/* Example public URL you can replace:
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        */}
      </video>

      {/* overlay above video */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/10 z-10"></div>

      {/* content */}
      <div
        className="relative z-20 text-center text-white max-w-5xl mx-auto px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
          <span className="gradient-text">Malani Marble Pvt.Ltd.</span>
        </h2>
        <p className="md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Crafting Timeless Elegance with Premium Natural Stone for Over Three
          Decades
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("products")}
            className="btn-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            aria-label="Explore Collection"
          >
            <i className="fas fa-gem mr-2" /> Explore Collection
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all"
            aria-label="Get Quote"
          >
            <i className="fas fa-phone mr-2" /> Get Quote
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white floating z-30">
        <ArrowBigDown size={40} />
      </div>
    </section>
  );
}
