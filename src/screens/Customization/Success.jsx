import Section from "./RatingStar";
import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

function Success() {
  const testimonialData = [
    {
      title: "Stayin' Alive",
      text: "No, Rose, they are not breathing. And they have no arms or legs … Where are they?",
      author: "Michael Scott",
    },
    {
      title: "Outstanding Service",
      text: "This team went above and beyond to ensure our satisfaction!",
      author: "Jim Halpert",
    },
    {
      title: "Outstanding Service",
      text: "This team went above and beyond to ensure our satisfaction!",
      author: "Jim Halpert",
    },
    {
      title: "Outstanding Service",
      text: "This team went above and beyond to ensure our satisfaction!",
      author: "Jim Halpert",
    },
  ];

  const sliderRef = useRef(null);
  const sliderInstance = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 15,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });
    }

    return () => sliderInstance.current?.destroy();
  }, []);

  const handlePrevious = () => sliderInstance.current?.prev();
  const handleNext = () => sliderInstance.current?.next();

  return (
    <div>
      <Section testimonials={testimonialData} />
    </div>
  );
}

export default Success;
