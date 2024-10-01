import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'


function ProductsCard( {name, image, goToDetails}) {
  return (
    <div className=" mx-10">
        <img src={image} alt="" className="h-[300px]" />
        <div className=" flex flex-col items-center pt-5 border-t border-l border-r border-gray-300 lg:w-[15vw] min-h-11">
            <h1 className=" font-bold text-lg text-center mx-3">{name}</h1>
            <div className=" flex items-center mt-3">
                <FaStar size={20} color="red"/>
                <FaStar size={20} color="red"/>
                <FaStar size={20} color="red"/>
                <FaStar size={20} color="red"/>
                <FaStar size={20} color="red"/>
            </div>
            <Link to={goToDetails} className=" border border-gray-300 py-2 px-3 mt-10 self-baseline group hover:bg-yellow-400 hover:cursor-pointer">
                <h1 className=" text-gray-400 font-bold group-hover:text-white group-hover:bg-yellow-400 ">DETAILS</h1>
            </Link>
        </div>
    </div>
  )
}

export default ProductsCard