import { FaCalendarDays } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function BlogCard({
    tittle, body, date,image, handleNavigate
}) {
  return (
    <div>
        <div className=" w-[380px]">
            <img className=" h-[500px] w-full object-cover" src={image} alt="" />
            <div className=" h-[10px] w-full bg-yellow-300"></div>
            <div className=" border-b border-l border-r p-2">
                <h1 className=" text-xl font-bold">{tittle}</h1>
                <div className=" flex items-center my-5">
                    <FaCalendarDays color="grey" className=" mr-5"/>
                    <p>{date}</p>
                </div>
                <div className=" text-ellipsis line-clamp-4"  dangerouslySetInnerHTML={{ __html: body}}>
                </div>
                <div onClick={handleNavigate} className=" mt-5 flex items-center justify-between hover:cursor-pointer" >
                    <h1 className=" font-bold text-yellow-300">READ MORE</h1>
                    <IoIosArrowForward className="text-yellow-300 " size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard