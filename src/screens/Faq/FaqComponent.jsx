import { useState } from "react";

import { LuPlus, LuMinus} from "react-icons/lu";

import Powerbank from '../../assets/images/Powerbanks.png'

function FaqComponent({ question, details}) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick =()=>{
        setIsOpen(!isOpen)
    }

  return (
    <>
    <div onClick={handleClick} className=" mb-5 min-h-[50px] lg:w-[70vw] w-[90vw] bg-gray-100 flex items-center hover:cursor-pointer">
        <div className=" w-[50px] min-h-[50px] flex items-center justify-center bg-yellow-300 mr-5">{isOpen? <LuMinus size={24}/>:<LuPlus size={24}/>}</div>
        <p className=" font-bold lg:text-2xl text-xl">{question}</p>

    </div>

    {
        isOpen?
        <div className=" mt-5 flex items-center lg:w-[70vw] w-[90vw]">
            <img src={Powerbank} alt="" className=" h-[200px]"/>
            <p>{details}</p>
        </div>
        :
        <div></div>
    }
</>
  )
}

export default FaqComponent