/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Smile, Gem, Users, Star } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Gem className="w-10 h-10 text-red-600" />,
      title: "Harmony & Ease",
      desc: "Seamlessly blending tradition with modern design, our marbles bring harmony and ease to every space.",
    },
    {
      icon: <Smile className="w-10 h-10 text-red-600" />,
      title: "Customer Satisfaction",
      desc: "Our commitment is to deliver unmatched service and exceed customer expectations every time.",
    },
    {
      icon: <Star className="w-10 h-10 text-red-600" />,
      title: "28 Years of Experience",
      desc: "With nearly three decades of expertise, we guarantee trust, quality, and craftsmanship.",
    },
    {
      icon: <Users className="w-10 h-10 text-red-600" />,
      title: "Premium Service",
      desc: "We work closely with architects, designers, and homeowners to create timeless luxury experiences.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Why Choose <span className="text-red-600">Malani Marble</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          With a legacy of excellence, we create marble solutions that embody
          elegance, durability, and timeless beauty.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 flex flex-col items-center text-center border border-gray-100"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
