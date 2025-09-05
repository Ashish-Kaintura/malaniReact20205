import React from "react";
import Hero from "../components/Hero";
import InfrastructureTabs from "../components/About/InfrastructureTabs";

export default function Infrastructure() {
  return (
    <>
      <Hero />
      <div className="pt-12">
        <div className="flex flex-col relative justify-center items-center">
          <span className="absolute sm:h-[2.544vw] h-[8.544vw] sm:w-[3.646vw] w-[11.646vw] mr-64 top-[-0.685vw] border-t-4 border-l-4 border-[#e02529]"></span>
          <h1 className="max-w-max px-2 text-4xl ">Infrastructure</h1>
          <span className="absolute sm:bottom-[-1.002vw] bottom-[-2.002vw] sm:h-[2.344vw] h-[8.344vw] sm:w-[3.646vw] w-[11.646vw] ml-64 border-r-4 border-b-4 border-[#e02529]"></span>
        </div>
      </div>
      <div className="flex justify-center  py-8 px-5 sm:px-12">
        <div className="max-w-7xl text-gray-700">
          <p className="py-5 text-lg  text-left">
            We have a capacious infrastructure that allows us to meet the bulk
            demands of our clients within a given timeline. Our infrastructure
            has all the basic amenities to keep all the products to safe from
            water and dirt.
          </p>
          <p className="py-6  text-lg text-left">
            Delivering the best-of-its-quality products is made possible because
            of our cutting-edge technology combined with the unparalleled skills
            of our team. We are based in Delhi / NCR, however we have our
            stockyards and warehouses spread all over in Delhi, NCR, Chattarpur
            and Kishangarh. We have two of our Showrooms in Chattarpur,
            Stockyards Malani Marbles boasts of having one of the largest
            stockyards in the industry using the latest technology, which is the
            main factor in its success and reputation as a leading provider of
            high-quality marbles, granites and other natural stones. Our
            customers are sure to find exactly what they are looking for.
          </p>
        </div>
      </div>

      <InfrastructureTabs />
    </>
  );
}
