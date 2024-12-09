import Hero from "./Hero";
import Powerbanks from "../../assets/images/337.png";

function Station() {
  return (
    <div>
      <Hero />
      <div className=" min-h-[20vh] flex flex-col items-center justify-center">
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
      {/* <h1 className=' font-bold text-xl'>The features include;</h1>
            <div className=' flex justify-center w-full'>
            <ul className=' list-disc p-10'>
                <li>4G Stable signal</li>
                <li>Imported ST Micro chip</li>
                <li>1280*800 high-definition</li>
                <li>A-grade screen with imported chip</li>
                <li>Intelligent voice service prompts</li>
                <li>Safe and stable hard material</li>
                <li>PCB antennas</li>
                <li>VO grade fire-proof</li>
                <li>ABS + PC material</li>
                <li>Anti-theft clip with patented deceleration motor</li>
                <li>4G Stable signal / Imported Microchip</li>
                <li>1280*800 high-definition</li>
                <li>10.1-inch screen</li>
                <li>178° wide viewing angle</li>
                <li>A-grade screen with imported chip</li>
                <li>Intelligent voice service prompts</li>
                <li>Safe and stable hard material</li>
                <li>PCB antennas</li>
                <li>VO grade fire-proof</li>
                <li>ABS + PC material</li>
                <li>Anti-theft clip with patented deceleration motor</li>
              </ul>
              </div> */}
    </div>
  );
}

export default Station;
