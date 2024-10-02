import { MdMailOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";


function GetIn() {
  return (
    <div className=" mb-5 bg-gray-200">
        <div className=" flex lg:flex-row flex-col mt-10 justify-around items-center">
            <div className=" relative flex flex-col items-center flex-1 px-[100px]">
                <div className=" absolute bg-black opacity-50 top-0 w-[200px] h-[200px]">
               
                </div>
                <div className=" absolute top-[30%] flex flex-col items-center">
                    <MdMailOutline color="white" size={55}/>
                    <p className=" text-white font-bold">Contact Us</p>
                </div>
                
                <img className=" w-[200px] h-[200px] object-cover" src="https://media.istockphoto.com/id/1458164457/photo/businessman-using-laptop-and-smartphone-with-contact-icons-on-virtual-screen-searching-web.jpg?s=612x612&w=0&k=20&c=MGgwv8LPiylmsFqbT2w2lfY2qTpBmnprS9O3oMjkkS8=" alt="" />
                <p className=" text-center mt-3">For more questions please contact us directly, we’ll be in touch shortly.</p>
            </div>

            <div className=" relative flex flex-col items-center flex-1 px-[100px]">
                <div className=" absolute bg-black opacity-50 top-0 w-[200px] h-[200px]"></div>
                <div className=" absolute top-[30%] flex flex-col items-center">
                    <IoHomeOutline color="white" size={55}/>
                    <p className=" text-white font-bold">Pay a Visit</p>
                </div>
                <img className=" w-[200px] h-[200px] object-cover" src="https://community.connection.com/wp-content/uploads/2023/10/2371335-Smart-Factory-Blog.jpg" alt="" />
                <p className=" text-center mt-3">We would be very honored if you could come by our office and manufacturer.</p>
            </div>
            <div className=" relative flex flex-col items-center flex-1 px-[100px]">
                <div className=" absolute bg-black opacity-50 top-0 w-[200px] h-[200px]"></div>
                <div className=" absolute top-[30%] flex flex-col items-center">
                    <FaRegClock color="white" size={55}/>
                    <p className=" text-white font-bold">Office Hours</p>
                </div>
                <img className=" w-[200px] h-[200px] object-cover" src="https://t3.ftcdn.net/jpg/03/14/48/56/360_F_314485667_bKPfO5dZrUEGgyGdPtFP7RYHy85NFjng.jpg" alt="" />
                <p className=" text-center mt-3">Our office remains open to our clients at any time, just contact your sales rep before coming.</p>
            </div>
            <div className=" relative flex flex-col items-center flex-1 px-[100px]">
                
                <div className=" absolute bg-black opacity-50 top-0 w-[200px] h-[200px]"></div>
                <div className=" absolute top-[30%] flex flex-col items-center">
                    <FaHandshake color="white" size={55}/>
                    <p className=" text-white font-bold">Marketing Collaboration</p>
                </div>
                <img className=" w-[200px] h-[200px] object-cover" src="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg" alt="" />
                <p className=" text-center mt-3">Want to cooperate with us in marketing, or promotion business, please also submit a message to us.</p>
            </div>
        </div>
    </div>
  )
}

export default GetIn