import Stackable from "../../assets/images/powerbankdispenser.png";
import { AppContext } from "../../Context/AppContext";
import "./Hero.css";
import { useContext } from "react";

function Hero() {
  const { visitorCount } = useContext(AppContext);

  return (
    <div>
      <div className=" h-[60vh] w-[100vw] z-1 relative">
        <div className="h-[60vh] w-[100vw] z-1 absolute bg-gradient-to-r from-black"></div>
        <div className=" text-white absolute bottom-3 right-2">
          {visitorCount.count}
        </div>

        <img
          src="https://blueandgreentomorrow.com/wp-content/uploads/2023/04/SFDR.jpg.webp"
          alt="piggy bank hero image"
          className="w-[100vw] h-[60vh] object-cover"
        />

        <div className="absolute top-[80px] w-[100vw]">
          <div className="flex lg:flex-row flex-col-reverse gap-5 items-center">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left px-5 animate-slide-left lg:ml-10">
              <h1 className="text-white lg:text-6xl text-3xl font-bold mb-5">
                One-time Investment,
                <br />a lifetime income
              </h1>
            </div>

            {/* Stackable Image */}
            <div className="flex-1 animate-slide-right">
              <img
                className="lg:h-[35vh] md:h-[500px] h-[220px] object-cover"
                src={Stackable}
                alt="Stackable Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
