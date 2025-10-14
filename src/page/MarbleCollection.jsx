/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import marbleData from "../data/marblecollection.json";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function MarbleCollection() {
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <section className="pb-20 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Malani Marbles | Top Rated Marble Collection</title>
        <meta name="description" content="Browse Malani Marbles’ premium collection of Indian and imported marble — ideal for luxury interiors, flooring, and custom design projects."></meta>
        <link rel="canonical" href="https://www.malanimarbles.com/marble-collection" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Malani Marbles Pvt. Ltd.",
          "image": "https://www.malanimarbles.com/img/logo-option-1.webp",
          "@id": "https://www.malanimarbles.com/",
          "url": "https://www.malanimarbles.com/marble-collection",
          "telephone": "9810387297",
          "address": {
            "@type": "PostalAddress",
          "streetAddress": "Khasra No. 809-810 Chattarpur Mandir Road, Near Tivoli Garden",
          "addressLocality": "New Delhi",
          "postalCode": "110074",
          "addressCountry": "IN"
  },
          "geo": {
            "@type": "GeoCoordinates",
          "latitude": 28.4999511,
          "longitude": 77.18502749999999
  },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
          ],
          "opens": "09:00",
          "closes": "23:59"
  },
          "sameAs": [
          "https://www.facebook.com/malanimarbles",
          "https://www.instagram.com/malanimarbles/",
          "https://www.youtube.com/@malanimarbles6638",
          "https://www.linkedin.com/company/malani-marbles",
          "https://in.pinterest.com/malanimarbles1/"
          ] 
}`}
        </script>

      </Helmet>
      <div className="relatove overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-10">

        </div>
        <img className="w-full object-cover" src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/Banner-02.webp" alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <h1 className="text-xl font-semibold text-center gradient-text mb-3 uppercase">
          Marble Collection
        </h1>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-3 ">Explore the Finest Marble Collection in India
        </h2>
        <p className="text-sm mb-12 max-w-6xl mx-auto text-center line-clamp-2" >Malani Marbles Pvt. Ltd., one of India's best and largest marble collections of Italian marble, imported marble, Indian marble, onyx marble, travertine marble and other natural stone slabs for your residential, commercial and architectural projects. One of the foremost marble supplier in India, builders, interior designers, leading architects and marble dealers rely on Malani Marbles Pvt. Ltd. marble collections to bring all the elements of high quality marble, luxury finishes and precision craftsmanship. All the marble slabs in our collection are hand-picked from the finest quarries in the world and processed with the highest quality Italian processing equipment to achieve unparalleled durability, high gloss polish and timeless beauty. Every marble slab in our collection is meant to provide the very best of elegance, strength and grace in the case of flooring marble, wall-cladding marble, kitchen countertop marble and other decorative marble applications. And of course, marble is always going to elevate the sophistication of every space!
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {marbleData.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white cursor-pointer"
            >
              <Link to={`/marble-collection/${cat.slug}`}>
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <h2 className="text-xl font-semibold text-white tracking-wide text-center">
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
