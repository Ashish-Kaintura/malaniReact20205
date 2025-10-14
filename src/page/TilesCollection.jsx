/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Data from "../data/titelscollection.json";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function TilesCollection() {
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    // tilebanner
    <section className="pb-20 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Premium Marble and Tiles Collection | Malani Marbles</title>
        <meta name="description" content="Explore our exclusive tile collections at Malani Marbles — marble-look, stone-textured, and designer tiles perfect for modern walls and floors."></meta>
        <link rel="canonical" href={`https://www.malanimarbles.com/tiles-collections/`} />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Malani Marbles Pvt. Ltd.",
          "image": "https://www.malanimarbles.com/img/logo-option-1.webp",
          "@id": "https://www.malanimarbles.com/",
          "url": "https://www.malanimarbles.com/tiles-collections",
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
      <div className="overflow-hidden h-[760px]">
        <img className="w-full object-cover" src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/tiles-collection/main-tile-banner.webp" alt="BANNER" />
      </div>
      <div className="max-w-7xl mx-auto px-6 ">
        <h1 className="text-xl font-semibold text-center gradient-text mb-3 uppercase">
          Slimtech Tiles Collection
        </h1>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-3 ">Explore Premium Tiles Collections in India

        </h2>
        <p className="text-sm mb-12 max-w-6xl mx-auto text-center line-clamp-2" >Malani Marbles Pvt. Ltd. offers an impressive range of tiles specifically developed to cater to the needs of modern architects, builders, and marble dealers in India. Our ceramics to buy offer options for ceramic tiles, vitrified tiles, porcelain tiles, wall tiles, floor tiles, bathroom tiles, kitchen tiles, outdoor tiles, and designer tiles as we have engineered them for durability, stain resistance, and timeless beauty. As one of the leading tile suppliers in India, we are a unique product from some of the latest design trends from Italy married to the latest in modern surface finishing technology for high-performing tiles for luxury homes, commercial space, hotels, or retail interior spaces. We carry a full range of colors from our beautiful white tiles, grey tiles, black tiles, and marble ring finish tiles ensuring your project is stylish, strong, and beautifully built to last.
        </p>
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
