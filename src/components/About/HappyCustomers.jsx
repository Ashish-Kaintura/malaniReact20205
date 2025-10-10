import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

export default function HappyCustomers() {
  const customers = [
    {
      name: "Rahul Mehta",
      img: "https://wp.logos-download.com/wp-content/uploads/2019/11/Radisson_Blue_Hotel_Logo_black_text.png?dl",
    },
    {
      name: "Ananya Sharma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6s3aNyZkEHtNsj1U9rH4L9MDBISQbeudQQ&s",
    },
    {
      name: "Amit Patel",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjhqeC-YRek930S8TXNoDrYZdzlGconVBlw&s",
    },
    {
      name: "Priya Singh",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytGGXmbtYt66vvujgkS_SpKKJSeNP3dErjQ&s",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-center text-red-600 mb-12">
          Happy customers
          <span className="block text-lg font-normal mt-2 text-red-600">
            Your satisfaction is our pride <br /> Since 1997
          </span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className=" my-6 py-6 h-1/2"
        >
          {customers.map((c, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 my-6">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-28 h-28 rounded-full object-contain shadow-md mb-4"
                />
                {/* <h3 className="text-lg font-semibold text-gray-700">
                  {c.name}
                </h3> */}
                {/* <div className="flex justify-center mt-2 mb-4 text-yellow-400">
                  {Array.from({ length: c.rating }).map((_, idx) => (
                    <Star key={idx} size={18} fill="gold" stroke="none" />
                  ))}
                </div> */}
                {/* <p className="text-gray-600 text-sm leading-relaxed">
                  “{c.review}”
                </p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
