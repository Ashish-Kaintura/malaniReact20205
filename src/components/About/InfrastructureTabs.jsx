import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

const tabs = [
  {
    name: "Processing Center",
    content: (
      <div className="space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-4xl sm:text-5xl font-semibold text-gray-900"
        >
          Processing Center
        </motion.h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700">
          Delivering you the best-of-its-quality products is made possible
          because of our cutting-edge technology combined with the unparalleled
          skills of our team.
        </p>
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col sm:flex-row gap-8">
            <img
              src="https://malanimarbles.com/img/site%20side%20img.webp"
              alt="malani marble"
              className="w-full sm:w-96 h-64 object-cover rounded-lg"
            />
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 ">
                Delhi, NCR, Chattarpur and Kishangarh.
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Malani Marble's state-of-the-art processing center, we blend
                age-old craftsmanship with modern innovation to bring you the
                finest natural stone solutions. Our center, equipped with
                cutting-edge technology, is the heart of our commitment to
                delivering exceptional quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Showrooms",
    content: (
      <div className="space-y-10">
        <h1 className="text-center text-4xl sm:text-5xl font-semibold text-gray-900">
          Showrooms
        </h1>
        <p className="text-center text-lg text-gray-700">
          We have two of our showrooms in Chattarpur.
        </p>
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col sm:flex-row gap-8">
            <img
              src="/img/our misiion banner.webp"
              alt="malani marble showroom"
              className="w-full sm:w-96 h-64 object-cover rounded-lg"
            />
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Delhi, NCR, Chattarpur
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Discover the epitome of elegance and natural beauty at Malani
                Marble's exquisite showrooms in Chattarpur. With two
                conveniently located showrooms, we invite you to immerse
                yourself in a world of premium marbles, granites, and natural
                stones.
              </p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14027.989543472555!2d77.17098420209169!3d28.479625373102525"
                  width="250"
                  height="180"
                  className="rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Stockyards",
    content: (
      <div className="space-y-10">
        <h1 className="text-center text-4xl sm:text-5xl font-semibold text-gray-900">
          Stockyards
        </h1>
        <p className="text-center text-lg text-gray-700">
          Leading provider of high-quality marbles, granites and other natural
          stones.
        </p>
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col sm:flex-row gap-8">
            <div className="space-y-4">
              <img
                src="/img/infrastructure/stockyard 1.webp"
                alt="Stockyard 1"
                className="w-full sm:w-96 h-60 object-cover rounded-lg"
              />
              <img
                src="/img/infrastructure/stockyard 2.webp"
                alt="Stockyard 2"
                className="w-full sm:w-96 h-60 object-cover rounded-lg"
              />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Delhi, NCR, Chattarpur and Kishangarh.
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Malani Marbles boasts of having one of the largest stockyards in
                the industry using the latest technology, which is the main
                factor in its success and reputation as a leading provider of
                high-quality marbles, granites and other natural stones.
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-sm">
                    F1: Farm Number 6 Bandh Road 3rd Avenue, Chatarpur, Delhi
                    110074
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.533768825785!2d77.18368807526527!3d28.463467691738437"
                    width="200"
                    height="120"
                    className="rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-sm">
                    F2: A 11 Shani Dham Mandir Road, Asola, Chatarpur, New Delhi
                    110074
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4201659055875!2d77.17069399678955!3d28.466890500000016"
                    width="200"
                    height="120"
                    className="rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function InfrastructureTabs() {
  return (
    <div
      className="py-12 px-5 sm:px-12 bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6634143/pexels-photo-6634143.jpeg')",
      }}
    >
      <Tab.Group>
        <Tab.List className="flex justify-center space-x-6 mb-10">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                `px-6 py-2 text-lg font-medium rounded-full transition-all ${
                  selected
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white/80 text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab) => (
            <Tab.Panel key={tab.name} className="focus:outline-none">
              {tab.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
