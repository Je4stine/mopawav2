import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

// RatingStars Component
const RatingStars = () => {
  return (
    <div className="flex gap-0.5 text-green-500">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <svg
            key={i}
            className="size-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
    </div>
  );
};

// SlideButtons Component
const SlideButtons = ({ slider }) => (
    <div className="hidden lg:mt-8 lg:flex lg:gap-4">
      <button
        aria-label="Previous slide"
        onClick={() => slider && slider.prev()} 
        className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
        disabled={!slider} 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 rtl:rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
  
      <button
        aria-label="Next slide"
        onClick={() => slider.next()} 
        className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
        disabled={!slider} 
      >
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 rtl:rotate-180"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );

// TestimonialSlide Component
const TestimonialSlide = ({ title, text, author }) => (
  <div className="keen-slider__slide">
    <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
      <div>
        <RatingStars />
        <div className="mt-4">
          <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{title}</p>
          <p className="mt-4 leading-relaxed text-gray-700">{text}</p>
        </div>
      </div>
      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
        &mdash; {author}
      </footer>
    </blockquote>
  </div>
);

// Testimonials Component with keen-slider
const Testimonials = ({ testimonials }) => {
    
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
      },
    },
  });

  return (
    <div className="-mx-6 lg:col-span-2 lg:mx-0">
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((testimonial, index) => (
          <TestimonialSlide
            key={index}
            title={testimonial.title}
            text={testimonial.text}
            author={testimonial.author}
          />
        ))}
      </div>
      <SlideButtons slider={slider} />
    </div>
  );
};

// Section Component
const Section = ({ testimonials }) => (
  <section className="bg-gray-50">

    <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
        
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Don't just take our word for it...
          </h2>
          <p className="mt-4 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo
            placeat harum porro optio fugit a culpa sunt id!
          </p>
        </div>

        <Testimonials testimonials={testimonials} />
      </div>
    </div>
  </section>
);
  



  export default Section

