import { PiBuildingsBold } from "react-icons/pi";
import { FaCity } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbSettingsStar } from "react-icons/tb";

function Stat() {
  return (
    <>
    <div className=" flex flex-col items-center lg:px-[100px] px-10">
            <h1 className=" text-3xl font-bold my-10">Trusted By 300+ Nation wide Partners</h1>
            <p>The shared power bank rental station is the future of phone charging on the go. The shared power bank market is anticipated to exhibit a compound annual growth rate (CAGR) of 1000% from 2024 to 2027. With this huge potential market, we’ve cooperated with 300+ clients nation wide.</p>
    </div>
    <div className=" flex lg:flex-row flex-col items-center lg:justify-around justify-center my-10">
        <div className=" flex items-center mb-10 lg:mb-0">
        <PiBuildingsBold className=" mr-5 lg:h-[50px] lg:w-[50px] w-[30px] h-[30px]"/>
            <div>
                <h1 className=" font-bold lg:text-6xl text-4xl">2022</h1>
                <p>Established</p>
            </div>
        </div>

        <div className=" flex items-center mb-10 lg:mb-0">
        <FaCity className=" mr-5 lg:h-[50px] lg:w-[50px] w-[30px] h-[30px]"/>
            <div>
                <h1 className=" font-bold lg:text-6xl text-4xl">20</h1>
                <p>Cities</p>
            </div>
        </div>

        <div className=" flex items-center mb-10 lg:mb-0">
        <FaPeopleGroup className=" mr-5 lg:h-[50px] lg:w-[50px] w-[30px] h-[30px]"/>
            <div>
                <h1 className=" font-bold lg:text-6xl text-4xl">150,000+</h1>
                <p>Cients served </p>
            </div>
        </div>

        <div className=" flex items-center mb-10 lg:mb-0">
        <TbSettingsStar className=" mr-5 lg:h-[50px] lg:w-[50px] w-[30px] h-[30px]"/>
            <div>
                <h1 className=" font-bold lg:text-6xl text-4xl">600</h1>
                <p>Capacity per day</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Stat