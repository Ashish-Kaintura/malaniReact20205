import React from "react";

export default function Projects() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of stunning marble installations that
              showcase the beauty and versatility of natural stone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white card-hover"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop"
                alt="Luxury Hotel Lobby"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3 glass-morphism">
                  Commercial
                </span>
                <h3 className="text-2xl font-bold font-display mb-2">
                  Luxury Hotel Lobby
                </h3>
                <button className="flex items-center text-white/80 hover:text-white transition-colors">
                  View Details <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white card-hover"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop"
                alt="Modern Kitchen Design"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3 glass-morphism">
                  Residential
                </span>
                <h3 className="text-2xl font-bold font-display mb-2">
                  Modern Kitchen Design
                </h3>
                <button className="flex items-center text-white/80 hover:text-white transition-colors">
                  View Details <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white card-hover"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=500&h=400&fit=crop"
                alt="Grand Staircase"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3 glass-morphism">
                  Architectural
                </span>
                <h3 className="text-2xl font-bold font-display mb-2">
                  Grand Staircase
                </h3>
                <button className="flex items-center text-white/80 hover:text-white transition-colors">
                  View Details <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
