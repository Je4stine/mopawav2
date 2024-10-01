import React from "react";
import { PiBuildingsBold } from "react-icons/pi";
import { FaCity, FaPeopleGroup } from "react-icons/fa6";
import { TbSettingsStar } from "react-icons/tb";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Stat() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <div ref={ref} className="flex flex-col items-center lg:px-[100px] px-10">
        <h1 className="text-3xl font-bold my-10 text-center">
          Trusted By 300+ Nationwide Partners
        </h1>
        <p className="text-center">
          The shared power bank rental station is the future of phone charging
          on the go. The shared power bank market is anticipated to exhibit a
          compound annual growth rate (CAGR) of 1000% from 2024 to 2027. With
          this huge potential market, we’ve cooperated with 300+ clients
          nationwide.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-col lg:flex-row items-center justify-around my-10 lg:px-[100px] px-5 w-full">
        {/* Established */}
        <div className="flex items-center mb-10 lg:mb-0">
          <PiBuildingsBold className="mr-5 lg:h-[50px] lg:w-[50px] w-[30px] h-[30px]" />
          <div className="text-center">
            <h1 className="font-bold lg:text-6xl text-4xl">
              {inView ? <CountUp end={2022} duration={2} /> : "0"}
            </h1>
            <p>Established</p>
          </div>
        </div>

        {/* Cities */}
        <div className="flex items-center mb-10 lg:mb-0">
          <FaCity className="mr-5 lg:h-[50px] lg:w-[50px] w-[30px] h-[30px]" />
          <div className="text-center">
            <h1 className="font-bold lg:text-6xl text-4xl">
              {inView ? <CountUp end={20} duration={2} /> : "0"}
            </h1>
            <p>Cities</p>
          </div>
        </div>

        {/* Clients Served */}
        <div className="flex items-center mb-10 lg:mb-0">
          <FaPeopleGroup className="mr-5 lg:h-[50px] lg:w-[50px] w-[30px] h-[30px]" />
          <div className="text-center">
            <h1 className="font-bold lg:text-6xl text-4xl">
              {inView ? <CountUp end={150000} separator="," duration={2.5} /> : "0"}
            </h1>
            <p>Clients served</p>
          </div>
        </div>

        {/* Capacity per day */}
        <div className="flex items-center mb-10 lg:mb-0">
          <TbSettingsStar className="mr-5 lg:h-[50px] lg:w-[50px] w-[30px] h-[30px]" />
          <div className="text-center">
            <h1 className="font-bold lg:text-6xl text-4xl">
              {inView ? <CountUp end={600} duration={2} /> : "0"}
            </h1>
            <p>Capacity per day</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stat;
