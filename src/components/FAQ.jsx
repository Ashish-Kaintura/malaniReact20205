import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for the FAQ
const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What makes your products premium?",
        answer: "Our products are crafted with the highest quality materials, featuring unique designs and a meticulous attention to detail. We partner with skilled artisans to ensure every piece is a work of art."
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship our products worldwide. Shipping costs and delivery times may vary depending on your location. You can view the final cost at checkout."
      },
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy on all eligible items. Products must be in their original condition and packaging. Please visit our full return policy page for more details."
      },
    ],
  },
  {
    category: "Product & Care",
    questions: [
      {
        question: "How should I care for my marble tiles?",
        answer: "To maintain the beauty of your marble tiles, use a pH-neutral cleaner and a soft cloth. Avoid using acidic or abrasive cleaners as they can damage the surface. Regular sealing is also recommended."
      },
      {
        question: "Are your products eco-friendly?",
        answer: "Sustainability is a core value for us. We strive to source our materials responsibly and use eco-friendly processes whenever possible. We are continuously working to reduce our environmental footprint."
      },
    ],
  },
  {
    category: "Installation",
    questions: [
      {
        question: "Do you provide installation services?",
        answer: "While we do not provide installation services directly, we can recommend certified professionals in your area who specialize in our product types. Please contact our support team for a list of recommended installers."
      },
    ],
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200 py-6"
      layout
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-xl text-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50 transition-colors duration-200 hover:text-indigo-600"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3 },
              opacity: { duration: 0.2, delay: 0.1 },
            }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-lg text-gray-500 mb-16 max-w-2xl mx-auto">
          We've compiled a list of common questions to help you find the information you need quickly.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12">
          {faqData.map((category, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold text-gray-700 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((item, i) => (
                  <FAQItem key={i} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center bg-white border border-gray-200 rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Still have questions?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            If you couldn't find an answer to your question, our support team is ready to help.
          </p>
          <a
            href="/contact" // Replace with your contact page link
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-700"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;