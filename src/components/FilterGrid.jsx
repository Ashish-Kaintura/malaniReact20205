import React, { useState, useMemo } from "react";

function FilterGrid() {
  const [tab, setTab] = useState("Popular Marble");
  const [viewer, setViewer] = useState(null);

  const items = useMemo(
    () => [
      {
        title: "Calacatta Oro",
        img: "https://images.pexels.com/photos/6634143/pexels-photo-6634143.jpeg",
        type: "Popular Marble",
      },
      {
        title: "Nero Marquina",
        img: "https://images.pexels.com/photos/6394687/pexels-photo-6394687.jpeg",
        type: "Popular Marble",
      },
      {
        title: "Arabescato",
        img: "https://images.pexels.com/photos/9990201/pexels-photo-9990201.jpeg",
        type: "Popular Marble",
      },
      {
        title: "Bianco Carrara",
        img: "https://images.pexels.com/photos/6634143/pexels-photo-6634143.jpeg",
        type: "Popular Marble",
      },
      {
        title: "Desert Brown",
        img: "https://images.pexels.com/photos/9990201/pexels-photo-9990201.jpeg",
        type: "Marble by Color",
      },
    ],
    []
  );

  const filtered = items.filter((i) => i.type === tab);

  return (
    <section className="p-8">
      {/* Header */}
      <div className="flex flex-wrap max-w-7xl mx-auto items-center justify-between gap-4">
        <h2 className="rounded-full border border-gray-300 px-5 py-2 text-sm  font-semibold uppercase tracking-widest  shadow-lg text-gray-900 backdrop-blur-md">
          Signature Collection
        </h2>
        <div className="flex gap-2 rounded-full border bg-white shadow-sm p-1">
          {["Popular Marble", "Marble by Color"].map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                tab === c
                  ? "bg-red-600 text-white hover:bg-black"
                  : "text-gray-600 hover:text-white hover:bg-black"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-6 max-w-7xl mx-auto grid grid-cols-1 gap-6">
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
      </div>

      {/* Modal */}
      {viewer && (
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
      )}
    </section>
  );
}

export default FilterGrid;
