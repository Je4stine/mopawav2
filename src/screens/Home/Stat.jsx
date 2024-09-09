import { PiBuildingsBold } from "react-icons/pi";
import { FaCity } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbSettingsStar } from "react-icons/tb";

function Stat() {
  return (
    <>
    <div className=" flex flex-col items-center lg:px-[100px] px-10">
            <h1 className=" text-3xl font-bold my-10">Trusted By 300+ Global Partners</h1>
            <p>The shared power bank rental station is the future of phone charging on the go. The shared power bank market is anticipated to exhibit a compound annual growth rate (CAGR) of 18.4% from 2020 to 2027. With this huge potential market, we’ve cooperated with 300+ clients around the world.</p>
    </div>
    <div className=" flex lg:flex-row flex-col items-center lg:justify-around justify-center my-10">
        <div className=" flex items-center">
        <PiBuildingsBold size={50} className=" mr-5"/>
            <div>
                <h1 className=" font-bold text-6xl">2022</h1>
                <p>Established</p>
            </div>
        </div>

        <div className=" flex items-center">
        <FaCity size={50} className=" mr-5"/>
            <div>
                <h1 className=" font-bold text-6xl">20</h1>
                <p>Cities</p>
            </div>
        </div>

        <div className=" flex items-center">
        <FaPeopleGroup size={50} className=" mr-5"/>
            <div>
                <h1 className=" font-bold text-6xl">150,000+</h1>
                <p>Cients served </p>
            </div>
        </div>

        <div className=" flex items-center">
        <TbSettingsStar size={50} className=" mr-5"/>
            <div>
                <h1 className=" font-bold text-6xl">300</h1>
                <p>Capacity per day</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Stat