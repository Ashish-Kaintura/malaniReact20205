/* eslint-disable no-unused-vars */
import { useParams, Link } from "react-router-dom";
import TilesData from "../data/titelscollection.json";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
export default function TilesCategory() {
  const { slug } = useParams();
  const category = TilesData.find((c) => c.slug === slug);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    window.scroll(0, 0)
  })

  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{category.metatitle}</title>
        <meta name="description" content={category.metades}></meta>
        <link rel="canonical" href={`https://www.malanimarbles.com/tiles-collections/${category.slug}`} />
      </Helmet>
      <div className="relative">
        <img className="w-full" src={category.banner} alt={category.name + "Banner"} />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 z-10">

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8 uppercase gradient-text">
          {category.title}
        </h1>
        <p className="text-sm mb-12 max-w-6xl mx-auto text-center line-clamp-2" >Malani Marbles Pvt. Ltd., one of India's best and largest marble collections of Italian marble, imported marble, Indian marble, onyx marble, travertine marble and other natural stone slabs for your residential, commercial and architectural projects. One of the foremost marble supplier in India, builders, interior designers, leading architects and marble dealers rely on Malani Marbles Pvt. Ltd. marble collections to bring all the elements of high quality marble, luxury finishes and precision craftsmanship. All the marble slabs in our collection are hand-picked from the finest quarries in the world and processed with the highest quality Italian processing equipment to achieve unparalleled durability, high gloss polish and timeless beauty. Every marble slab in our collection is meant to provide the very best of elegance, strength and grace in the case of flooring marble, wall-cladding marble, kitchen countertop marble and other decorative marble applications. And of course, marble is always going to elevate the sophistication of every space!
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {category.products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(p)}
              className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {p.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/marble-collection"
            className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-900 transition"
          >
            ← Back to Collections
          </Link>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full mx-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Zoom>
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-full object-contain max-h-[80vh]"
                />
              </Zoom>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {selected.name}
                </h2>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
