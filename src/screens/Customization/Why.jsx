
import { BiSolidLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import Mopawa from '../../assets/images/mopawalogo.png'

function Why() {
  return (
    <div className=" bg-gray-100 py-10 flex lg:flex-row flex-col justify-center items-center px-10">
        <div className=" bg-black w-[30vh] h-[30vh] flex items-center justify-center mr-10">
            <img src={Mopawa} alt="" className=" w-[200px]"/>
        </div>
        <div>
            <h1 className=" font-bold text-3xl mb-10">Why Mopawa?</h1>

            <div className=" flex items-center mb-5">
                <BiSolidLike color="grey" size={40} className=" mr-5"/>
                <div>
                    <h1 className=" font-bold text-xl mb-3">Reliable</h1>
                    <p> Mopawa is a reliable partner been cooperated with 300+ entities around the world, we strive to grow up with our clients</p>
                </div>
            </div>

            <div className=" flex items-center mb-5">
                <FaEye color="grey" size={40} className=" mr-5"/>
                <div>
                <h1 className=" font-bold text-xl mb-3">Innovative Product Design</h1>
                <p>We provide the most suitable design for both power banks and stations to fit in your audience</p>
                </div>
            </div>
            <div className=" flex items-center mb-5">
                <GrPersonalComputer color="grey" size={40} className=" mr-5"/>
                <div>
                <h1 className=" font-bold text-xl mb-3">Strong Software Development</h1>
                <p> We're confident to say that we provides the most stable rental and payment system among the industry.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why