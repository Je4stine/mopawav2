import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const TestimonialSlide = ({ image, name, title, testimonial }) => {
  return (
    <div className="text-left">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="object-cover w-full mx-auto rounded-t-2xl h-60"
        />
        <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
      </div>
      <div className="relative m-5 p-5">
        <svg
          className="absolute left-0 w-6 fill-indigo-500"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
        </svg>
        <p className="text-gray-100 text-xl px-5">{testimonial}</p>
        <svg
          className="absolute right-0 w-6 fill-indigo-500"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
        </svg>
        <div className="text-sm mt-5 mx-5">
          <p className="font-medium text-white">{name}</p>
          <p className="mt-1 text-gray-300">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
      name: "John Doe",
      title: "Marketing Manager",
      testimonial:
        "Outstanding service, this team went above and beyond to ensure our satisfaction",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
      name: "Ajimon",
      title: "CEO Of Marketing",
      testimonial:
        "Outstanding service, this team went above and beyond to ensure our satisfaction",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="my-8"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <TestimonialSlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
