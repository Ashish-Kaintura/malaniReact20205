import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import {useEffect} from "react";
export default function ContactUs() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  useEffect(()=>{
    window.scroll(0,0)
  })

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS
        "YOUR_TEMPLATE_ID", // from EmailJS
        formRef.current,
        "YOUR_PUBLIC_KEY" // from EmailJS
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          formRef.current.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };


  return (
    <section
      className="py-20"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6634143/pexels-photo-6634143.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your marble project? Contact us today for a
            consultation and personalized quote.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Contact Info</h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start p-5 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600 sm:max-w-sm mx-auto">
                    Malani Marbles Pvt. Ltd.
                    Khasra No. 809-810 Chattarpur Mandir Road, Near Tivoli Garden New Delhi- 110074, India 
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start p-5 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 9810387297</p>
                  <p className="text-gray-600">+91 9811012011</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start p-5 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@malanimarbles.com</p>
                  <p className="text-gray-600">sales@malanimarbles.com</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">
                Business Hours
              </h4>
              <p className="flex justify-between text-gray-600">
                <span>Mon - Sat:</span>
                <span className="font-medium">9:00 AM - 12:00 AM</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span>Sunday:</span>
                <span className="font-medium">Week off</span>
              </p>
            </div>
          </div>

          {/* Right Form Section */}
          <div
            className="bg-white p-8 rounded-xl shadow-lg"
            // data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Message
            </h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <select
                name="service"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Service</option>
                <option value="marble-supply">Marble Supply</option>
                <option value="installation">Installation</option>
                <option value="consultation">Consultation</option>
                <option value="maintenance">Maintenance</option>
                <option value="custom-design">Custom Design</option>
              </select>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your project... *"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-red-700 transition-all"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i> Send Message
                  </>
                )}
              </button>

              {sent && (
                <p className="text-green-600 font-medium text-center">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
