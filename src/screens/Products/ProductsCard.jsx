import { FaStar } from "react-icons/fa";

function ProductsCard( {name, image}) {
  return (
    <div className=" mx-10">
        <img src={image} alt="" className="h-[300px]" />
        <div className=" flex flex-col items-center pt-5 border-t border-l border-r border-gray-300 lg:w-[15vw] min-h-11">
            <h1 className=" font-bold text-xl text-center">{name}</h1>
            <div className=" flex items-center mt-3">
                <FaStar size={25} color="brown"/>
                <FaStar size={25} color="brown"/>
                <FaStar size={25} color="brown"/>
                <FaStar size={25} color="brown"/>
                <FaStar size={25} color="brown"/>
            </div>
            <div className=" border border-gray-300 py-2 px-3 mt-10 self-baseline">
                <h1 className=" text-gray-400 font-bold">DETAILS</h1>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard