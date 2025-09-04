import React from "react";

function SwatchRail() {
  const swatches = [
    {
      name: "Carrara White",
      img: "https://images.pexels.com/photos/6634143/pexels-photo-6634143.jpeg",
    },
    {
      name: "Nero Marquina",
      img: "https://images.pexels.com/photos/6394687/pexels-photo-6394687.jpeg",
    },
    {
      name: "Arabescato",
      img: "https://images.pexels.com/photos/9990201/pexels-photo-9990201.jpeg",
    },
    {
      name: "Statuario",
      img: "https://images.pexels.com/photos/6634143/pexels-photo-6634143.jpeg",
    },
    {
      name: "Emperador",
      img: "https://images.pexels.com/photos/6394687/pexels-photo-6394687.jpeg",
    },
  ];

  return (
    <section className="w-full flex justify-center py-12">
      <div className="w-full max-w-7xl px-4 md:px-8">
        <div className="flex items-center px-2 md:px-8 mb-8">
          <h2 className="rounded-full border border-gray-300 px-5 py-2 text-sm  font-semibold uppercase tracking-widest  shadow-lg text-gray-900 backdrop-blur-md">
            Coloured & Textures
          </h2>
        </div>

        <div className="relative mt-2">
          {/* Left fade gradient */}
          <div className="absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-gradient-to-r from-[#f8fafc] to-transparent pointer-events-none" />
          {/* Right fade gradient */}
          <div className="absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-gradient-to-l from-[#f8fafc] to-transparent pointer-events-none" />

          {/* Horizontal scrollable swatches */}
          <div className="scrollbar-none flex snap-x gap-6 overflow-x-auto px-2 md:px-8 pb-2 pt-4">
            {swatches.map((s) => (
              <div
                key={s.name}
                className="snap-start flex flex-col items-center group transition-transform duration-300 hover:scale-105"
              >
                <div className="h-36 w-36 md:h-44 md:w-44 shrink-0 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl relative transition-shadow duration-300 group-hover:shadow-2xl">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                </div>
                <p className="mt-3 w-36 md:w-44 text-center text-base font-medium text-gray-800 tracking-wide group-hover:text-black transition-colors duration-300">
                  {s.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SwatchRail;
