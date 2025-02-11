import { IoPerson } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { PiBookOpenTextLight } from "react-icons/pi";
import { IoDiamondSharp } from "react-icons/io5";
import Contact from "../../components/Contact";
import { Helmet } from "react-helmet";
import Director from "../../assets/images/20241017-092608.jpg";
import Grace from "../../assets/images/Grace.png";
import BrandCard from "./BrandCard";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us </title>
        <meta
          name="description"
          content=" Best Sharing Power Bank Staion Manufacturer. Reliable Power Bank Rental Service Provider.  "
        />
        <meta
          name="keywords"
          content="shared power bank, rental powerbank, mopawa, power bank"
        />
      </Helmet>

      <div className=" h-[80vh] w-[100vw] z-1 relative">
        <div className=" h-[80vh] w-[100vw] z-1 absolute bg-black opacity-40"></div>
        <img
          src="https://i.pinimg.com/originals/7a/22/a6/7a22a6a1a2c449687f0ea85b91d97419.gif"
          alt=" Hero section"
          className=" w-[100vw] h-[80vh] object-cover "
        />
        <div className="text-white absolute h-full w-full top-0 left-0 lg:ml-[10%] flex flex-col justify-center lg:items-start items-center">
          <h1 className=" font-bold text-4xl mb-10">About Us</h1>
          <span className=" lg:text-2xl text-lg font-normal">
            Mopawa - Best Sharing Power Bank Station Manufacturer.
            <br /> Reliable Power Bank Rental Service Provider.
          </span>
        </div>
      </div>

      <div className=" bg-gray-200 flex flex-col-reverse lg:flex-row items-center justify-center p-10">
        <div className="flex flex-col flex-1">
          <iframe
            className="w-96 h-64 sm:w-[560px] sm:h-[315px] md:w-[640px] md:h-[360px]"
            src="https://www.youtube.com/embed/-PNC-CUpXw0?si=jgfgCxuvfjFhnXF5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
        </div>

        <div className=" p-5 flex flex-col flex-1 items-center">
          <h1 className="lg:text-4xl text-2xl font-bold mb-5">Who are we?</h1>
          <p>
            Mopawa Software Limited is a dynamic and innovative technology
            company founded in Kenya in 2022 that provides cutting-edge
            solutions, and has since grown and evolved organically. <br />
            <br />
            Our services include shared power bank station manufacturing,
            payment gateway integration, and management system development.
            <br />
            <br />
            We are committed to providing the best service for those who run out
            of battery on the go, and we strive to make our daily work and
            operations as resource-efficient as possible.
          </p>
        </div>
      </div>
      <BrandCard />

      <div className=" bg-black p-10">
        <div className=" p-5 flex flex-col flex-1 items-center">
          <h1 className="lg:text-4xl text-2xl font-bold mb-5 text-white">
            Meet Our Team
          </h1>
        </div>

        <div className=" lg:flex lg:justify-around">
          <div className=" flex flex-col items-center justify-center lg:mb-0 mb-20">
            <img
              src={Director}
              alt="director image"
              className=" h-[300px] w-300px] mb-5 object-cover"
            />
            <h1 className=" text-white font-bold text-xl">MD</h1>
            <h1 className=" text-white">Mr. Peter Wang</h1>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <img
              src={Grace}
              alt="director image"
              className=" lg:h-[300px] lg:w-[300px] mb-5 object-cover"
            />
            <h1 className=" text-white font-bold text-xl">GM</h1>
            <h1 className=" text-white">Mrs. Grace</h1>
          </div>
        </div>
      </div>

     

      <div className=" flex flex-col items-center py-10 bg-gray-100">
        <h1 className="lg:text-4xl text-2xl font-bold mb-5">
          Mopawa Enterprise Culture
        </h1>

        <div className=" lg:flex lg:justify-around lg:flex-1">
          <div className="flex flex-col items-center flex-1">
            <div className="flex flex-col items-center justify-center border border-gray-400 border-opacity-50 rounded-full h-[180px] w-[180px] mb-4">
              <div className="bg-gray-400 rounded-full p-[40px]">
                <IoPerson size={50} color="white" />
              </div>
            </div>

            <div className="w-[45%] flex flex-col items-center">
              <h1>Profile</h1>
              <p className="text-center text-gray-400">
                Leading full chain service provider in the shared power bank
                industry.
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center flex-1">
            <div className="flex flex-col items-center justify-center border border-gray-400 border-opacity-50 rounded-full h-[180px] w-[180px] mb-4">
              <div className=" bg-gray-400 rounded-full p-[40px]">
                <FaEye size={50} color="white" />
              </div>
            </div>

            <div className=" w-[45%] flex flex-col items-center">
              <h1>Vision</h1>
              <p className=" text-center text-gray-400">
                To be a company that benefits all mankind.
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center flex-1">
            <div className="flex flex-col items-center justify-center border border-gray-400 border-opacity-50 rounded-full h-[180px] w-[180px] mb-4">
              <div className=" bg-gray-400 rounded-full p-[40px]">
                <PiBookOpenTextLight size={50} color="white" />
              </div>
            </div>
            <div className=" w-[45%] flex flex-col items-center">
              <h1>Mission</h1>
              <p className=" text-center text-gray-400">
                People-oriented, make wisdom and great love products Keep
                forging ahead, and realize global operation
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center flex-1">
            <div className="flex flex-col items-center justify-center border border-gray-400 border-opacity-50 rounded-full h-[180px] w-[180px] mb-4">
              <div className=" bg-gray-400 rounded-full p-[40px]">
                <IoDiamondSharp size={50} color="white" />
              </div>
            </div>
            <div className=" w-[45%] flex flex-col items-center">
              <h1>Values</h1>
              <p className=" text-center text-gray-400">
                Innovation, Sustainability, Integrity and agility.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default About;
