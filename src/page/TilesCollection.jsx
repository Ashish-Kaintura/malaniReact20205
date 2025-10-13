/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Data from "../data/titelscollection.json";
import {useEffect} from "react";
import { Helmet } from "react-helmet";
export default function TilesCollection() {
  useEffect(()=>{
  window.scroll(0,0)
})
  return (
    // tilebanner
    <section className="pb-20 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Premium Marble and Tiles Collection | Malani Marbles</title>
        <link rel="canonical" href={`https://www.malanimarbles.com/tiles-collections/${Data.slug}`} />
      </Helmet>
      <div className="overflow-hidden h-[760px]">
        <img className="w-full object-cover" src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/tiles-collection/main-tile-banner.webp" alt="BANNER" />
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
       Slimtech Tiles Collection
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Data.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white cursor-pointer"
            >
              <Link to={`/tiles-collections/${cat.slug}`}>
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <h2 className="text-3xl font-semibold text-white tracking-wide">
                    {cat.name}
                  </h2>
                </div>
                <div className="text-center p-4"> 
                  <h2>{cat.name}</h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
