import { FaCalendarDays } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function BlogCard() {
  return (
    <div>
        <div className=" w-[380px]">
            <img className=" h-[500px] w-full object-cover" src="https://chargeeight.com/wp-content/uploads/2022/09/power-bank-rental-business.jpg" alt="" />
            <div className=" h-[20px] w-full bg-yellow-300"></div>
            <div className=" border-b border-l border-r p-2">
                <h1 className=" text-xl font-bold">What is Power Bank Rental Business Model, and How is it Classify?</h1>
                <div className=" flex items-center my-5">
                    <FaCalendarDays color="grey" className=" mr-5"/>
                    <p>09/09/2022</p>
                </div>
                <p className=" text-ellipsis">At present, online traffic is becoming more and more expensive, and offline traffic still plays a key role in the market. Sharing economy is bringing...</p>
                <div className=" mt-5 flex items-center justify-between" >
                    <h1 className=" font-bold text-yellow-300">READ MORE</h1>
                    <IoIosArrowForward className="text-yellow-300 " size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard