import TestimonialsSlide from "./TestimonialsSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function TestimonialsSlider() {
  const testimonials_data = {
    es: 6,
    ar: 4,
    pt: 4,
  };

  const target = "es";
  const resp = [...Array(testimonials_data[target]).keys()];

  return (
    <div className="mt-9 xl:mt-14">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        speed={1000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
      >
        {resp.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialsSlide index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialsSlider;
