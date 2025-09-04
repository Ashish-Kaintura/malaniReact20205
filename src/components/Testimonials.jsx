import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function Testimonials() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-12">
            What Our Clients Say
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
          >
            {[
              {
                name: "Rajesh Sharma",
                role: "Architect",
                text: "Malani Marble's quality and service are unmatched. They've been our go-to supplier for years.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
              },
              {
                name: "Priya Patel",
                role: "Interior Designer",
                text: "The marble quality is exceptional, and their team always delivers on time.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JspgTQtYvHcB08PL2AP_hGEmoAoUVAJhTg&s",
              },
              {
                name: "Amit Singh",
                role: "Homeowner",
                text: "Beautiful marble work in my home. The craftsmanship and attention to detail is outstanding.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
              },
            ].map((t) => (
              <SwiperSlide key={t.name}>
                <div className="glass-morphism p-8 rounded-xl">
                  <p className="italic mb-6">“{t.text}”</p>
                  <div className="flex items-center justify-center">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-gray-400 text-sm">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
