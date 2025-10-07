import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const managementData = [
  {
    id: "parmanand",
    name: "Mr. Parmanand Malani",
    title: "Chairman",
    image:
      "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/About/management1.webp",
    details:
      "Mr. Parmanand Malani is the Chairman of our Company. He brings a wealth of expertise in strategic planning and business development, playing a crucial role in driving our company towards new opportunities and expansion.",
  },
  {
    id: "ramanand",
    name: "Mr. Ramanand Malani",
    title: "Managing Director",
    image:
      "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/About/management2.webp",
    details:
      "Mr. Ramanand Malani is our Managing Director who is responsible for overseeing operations and ensuring operational excellence. He has a proven track record of implementing efficient processes and optimizing resource utilization.",
  },
];

export default function About() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <div className="w-full">
      {/* 🎥 Hero Section with Video Banner */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/video/Malani%20Marble%20(1).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6 text-center text-white"
        >
          <h1 className="text-5xl sm:text-6xl font-bold font-serif mb-6">
            About <span className="text-[#e02529]">Malani Marbles Pvt.Ltd.</span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed">
            Established in 1997, Malani Marbles Pvt.Ltd. is a premier and trusted name in the world of natural stone, serving as a leading wholesaler and importer of luxurious marble, granite, and onyx in India.
          </p>
        </motion.div>
      </section>

      {/* ✨ About Content Section */}
      <section className="sm:flex justify-around items-center max-w-7xl sm:px-12 px-5 py-20 gap-8 bg-white sm:h-screen ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Bringing Nature’s Finest Stones to Your Home
          </h3>
          <p className="mt-4 text-sm text-gray-700 leading-relaxed">
            Our foundation is built on a simple, yet powerful vision: to provide architects, designers, and homeowners across the nation with the most exquisite stones sourced directly from the world’s finest quarries. For over two decades, this commitment has secured our reputation as a key contender for the title of the best marble in India.

          </p>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Our unparalleled collection is a direct result of meticulous global procurement. Our specialized team travels to the renowned stone regions of Italy, Spain, Turkey, and beyond, hand-selecting every block to ensure superior quality, aesthetic appeal, and durability. Beyond our vast inventory, we operate a streamlined national supply chain and utilize advanced in-house finishing facilities, ensuring that every slab—from rare imported varieties like Statuario and Blue Roma to premium Indian Granites—is delivered with flawless integrity and exceptional value. Malani Marbles Pvt. Ltd. is your dedicated partner in elevating any space with the timeless elegance of natural stone
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden sm:flex"
        >
          <img
            src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/About/company%20pic2.webp"
            alt="malani marble"
            className="w-96 rounded-xl shadow-lg"
          />
          <img
            src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/About/company%20pic1.webp"
            alt="malani marble"
            className="absolute w-80 top-1/2 left-1/3 rounded-xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* 👨‍💼 Management Section */}
      <section className="sm:px-12 px-5 py-16 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold font-serif text-gray-900">
            Our Leadership
          </h2>
          <p className="max-w-6xl mx-auto mt-4  text-gray-700 text-sm">
            Malani Marbles Pvt. Ltd. is guided by a dynamic leadership team that embodies vision, integrity, and excellence. Under the guidance of our managing director, Mr. Ramanand Malani, the company continues to set new benchmarks in the natural stone industry. Our Chairman, Mr. Parmanand Malani, drives innovation and operational excellence, ensuring that every project reflects the brand’s commitment to quality and craftsmanship. Together, their strategic foresight and customer-centric approach have positioned Malani Marbles as a leader in the world of premium marble and granite.

          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-16 justify-center">
          {managementData.map((person) => (
            <motion.div
              key={person.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedPerson(person)}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-96 h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {person.name}
                </h3>
                <p className="text-gray-600">{person.title}</p>
                <p className="mt-2 text-sm text-[#e02529] underline">
                  Read More
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedPerson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="bg-white max-w-lg rounded-2xl shadow-2xl overflow-hidden relative"
          >
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X size={24} />
            </button>
            <img
              src={selectedPerson.image}
              alt={selectedPerson.name}
              className="w-full h-72 object-contain py-4"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                {selectedPerson.name}
              </h2>
              <p className="text-center text-gray-500 mb-4">
                {selectedPerson.title}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {selectedPerson.details}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
