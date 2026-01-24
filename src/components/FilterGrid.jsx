import React, { useState, useMemo } from "react";
import { Link, useNavigate } from 'react-router-dom'
function FilterGrid() {
  const [tab, setTab] = useState("Popular Marble");
  const [viewer, setViewer] = useState(null);

  const items = useMemo(
    () => [
      {
        title: "Bottochino Classico",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/beige/BOTTICHINO%20CLASSICO.webp",
        type: "Popular Marble",
        category: "beige-marble",
        slug: "bottochino-classico"
      },
      {
        title: "Statuario Venatino",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/white/STATUARIO%20VENATINO.webp",
        type: "Popular Marble",
        category: "white-marble",
        slug: "statuario-venatino"
      },
      {
        title: "Brecia Blue",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/beige/bLUE%20BRECIA.webp",
        type: "Popular Marble",
        category: "beige-marble",
        slug: "brecia-blue"
      },
      {
        title: "Statuario Calacutta",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/white/STATUARIO%20CALACUTTA.webp",
        type: "Popular Marble",
        category: "white-marble",
        slug: "statuario-calacutta"
      },
      {
        title: "Lasa White",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/white/LASA%20WHITE.webp",
        type: "Popular Marble",
        category: "white-marble",
        slug: "lasa-white"
      },
      {
        title: "Michael Angelo",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/white/michelangelo%20PEACH.webp",
        type: "Popular Marble",
        category: "white-marble",
        slug: "michael-angelo"
      },
      {
        title: "Beige Marble",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/beige/gREY%20bRECIA.webp",
        type: "Marble By Category",
        slug: "beige-marble"
      },
      {
        title: "Travertino Marble",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/traventino/COKE%20TRAVETINO.webp",
        type: "Marble By Category",
        slug: "travertino-marble"
      },
      {
        title: "Italian Marble",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/beige/CASA%20NOVA.webp",
        type: "Marble By Category",
        slug: "italian-marble"
      },
      {
        title: "Brazilian Granite",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/brazil/Monalisa.webp",
        type: "Marble By Category",
        slug: "brazilian-granite"
      },
      {
        title: "White Marble",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/white/sWISS%20wHITE.webp",
        type: "Marble By Category",
        slug: "white-marble"
      },
      {
        title: "Onyx Marble",
        img: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/onyx/MEXICAN%20ONYX.webp",
        type: "Marble By Category",
        slug: "onyx-marble"
      },
    ],
    []
  );
  let navigate = useNavigate()
  const filtered = items.filter((i) => i.type === tab);

  return (
    <section className="p-8">
      {/* Header */}
      <div className="flex flex-wrap max-w-7xl mx-auto items-center justify-between gap-4">
        <h2 className="rounded-full border border-gray-300 px-5 py-2 text-sm  font-semibold uppercase tracking-widest  shadow-lg text-gray-900 backdrop-blur-md">
          Signature Collection
        </h2>
        <div className="flex gap-2 rounded-full border bg-white shadow-sm p-1">
          {["Popular Marble", "Marble By Category"].map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${tab === c
                ? "bg-red-600 text-white hover:bg-black"
                : "text-gray-600 hover:text-white hover:bg-black"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-5">
        {filtered.map((item, id) => (
          <div
            key={id}
            className="group bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Image */}
            <Link
              to={
                tab === "Popular Marble"
                  ? `/marble-collection/${item.category}/${item.slug}`
                  : `/marble-collection/${item.slug}`
              }
              className="block overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>

            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="font-semibold text-base sm:text-lg mb-3">
                {item.title}
              </h3>

              {/* Quick View Button */}
              <Link
                to={
                  tab === "Popular Marble"
                    ? `/marble-collection/${item.category}/${item.slug}`
                    : `/marble-collection/${item.slug}`
                }
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300 hover:bg-primary hover:scale-105"
              >
                Quick View
              </Link>
            </div>
          </div>
        ))}
      </div>


      {/* Grid */}
      {/* <div className="mt-6 max-w-7xl mx-auto grid grid-cols-1 gap-6">
        {filtered.map((it) => (
          <article
            key={it.title}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
          >
            <img
              src={it.img}
              alt={it.title}
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
              <h3 className="text-xl font-semibold text-white drop-shadow">
                {it.title}
              </h3>
              <button
                onClick={() => setViewer(it)}
                className="rounded-full bg-white/90 px-3 py-1 text-xs text-gray-800 backdrop-blur hover:bg-white"
              >
                Quick view
              </button>
            </div>
          </article>
        ))}
      </div> */}

      {/* Modal */}
      {/* {viewer && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
          onClick={() => setViewer(null)}
        >
          <div
            className="max-w-4xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={viewer.img}
              alt={viewer.title}
              className="max-h-[80vh] w-full object-cover"
            />
            <div className="flex items-center justify-between p-4">
              <div>
                <h4 className="text-lg font-semibold">{viewer.title}</h4>
                <p className="text-sm text-gray-500">
                  Premium natural stone slab
                </p>
              </div>
              <button
                onClick={() => setViewer(null)}
                className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
}

export default FilterGrid;
