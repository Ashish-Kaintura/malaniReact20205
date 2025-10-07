import React from "react";
import { Award, Shield, Truck, Users } from "lucide-react";

export default function HomeAboutsection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-3xl font-bold font-display text-red-600 mb-4">
            Malani Marbles Pvt. Ltd  <br /> <span className="text-3xl text-gray-900"> The Trusted Name for the Best Marble in India</span>
          </h1>
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For over three decades, we've been the trusted name in premium
            marble and natural stone, delivering excellence in every project.
          </p> */}
        </div>

        {/* Legacy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div data-aos="fade-right" className="">
            {/* <h3 className="text-3xl font-bold font-display text-gray-900 mb-6">
              Our Legacy
            </h3> */}
            <p className=" text-gray-600 mb-6 leading-relaxed">
              Welcome to Malani Marbles Pvt. Ltd., the leading supplier of marble dedicated to delivering the best natural stone in the world to your projects. With over 20 years of defining luxury marble, Malani is one of the top contenders for providing the best marble in India. In our passion to provide the best possible quality Malani Marbles Pvt. Ltd has dedicated professionals around the world who source the best marble and granite from the best quarries.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As a leading marble company, we are proud to offer a full range of rare imported premium slabs such as Statuario, Blue Roma, and world-class Indian granites to choose from. Our in-house finishing & logistics capabilities will provide a seamless process from selection to installation. Select Malani Marbles Pvt. Ltd for the best material, education and value to elevat e any space.

            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 marble-pattern rounded-lg card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                <div className="text-gray-600 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-6 marble-pattern rounded-lg card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">
                  5000+
                </div>
                <div className="text-gray-600 font-medium">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <img
              src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/home.webp"
              alt="Marble craftsmanship"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center shadow-xl">
              <Award className="text-white w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="text-center p-8 marble-pattern rounded-xl card-hover"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Quality Assurance
            </h3>
            <p className="text-gray-600">
              Every piece undergoes rigorous quality checks to ensure perfection
            </p>
          </div>

          <div
            className="text-center p-8 marble-pattern rounded-xl card-hover"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Timely Delivery
            </h3>
            <p className="text-gray-600">
              Professional installation and delivery services nationwide
            </p>
          </div>

          <div
            className="text-center p-8 marble-pattern rounded-xl card-hover"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Expert Support
            </h3>
            <p className="text-gray-600">
              Dedicated team of marble specialists and design consultants
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
