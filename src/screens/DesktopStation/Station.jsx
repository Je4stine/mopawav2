import Hero from "./Hero";
import Powerbanks from "../../assets/images/337.png";
import NewStation from "../../assets/images/powerbankdispenser.png";

function Station() {
  return (
    <div>
      <Hero />
      <div className=" min-h-[20vh] flex flex-col items-center justify-center">
        <img
          src={NewStation}
          alt="stand"
          className=" lg:h-[35vh] object-cover my-5"
        />
        <hr />
        <img
          src={Powerbanks}
          alt="stand"
          className=" lg:h-[35vh] object-cover my-5"
        />
      </div>
      <p className=" text-center my-5 text-xl">
        We offer various Desktop stations from 8 slot to 12 slot and a stackable
        desktop station{" "}
      </p>
    </div>
  );
}

export default Station;
