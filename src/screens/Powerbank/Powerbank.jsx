import Hero from "./Hero";
import Powerbanks from "../../assets/images/newpbImage.png";

function Powerbank() {
  return (
    <div>
      <Hero />
      <div className=" min-h-[20vh] flex flex-col items-center justify-center">
        <img src={Powerbanks} alt="stand" className=" lg:h-[50vh]" />
      </div>
      <p className=" font-bold text-center my-5 text-2xl">Our power bank </p>
      <p className=" text-center">
        Our power bank comes equiped with 3 different cables;
      </p>
      <ul className=" list-disc text-center">
        <li>Micro USB</li>
        <li>USB-TYPE C </li>
        <li>iOS</li>
      </ul>
    </div>
  );
}

export default Powerbank;
