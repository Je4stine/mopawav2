import { IoMdCall } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  return (
    <div className=" lg:flex p-5">
        <div className=" flex flex-col flex-1">
            <h1 className=" font-bold text-3xl mb-5">GET IN TOUCH</h1>
            <p>Interested in sharing power bank station business? Or want to know more about Mopawa? Simply submit a message to us. We'll get back to you within 24 hours. You can also contact us through the below information to get a prompt response.</p>
            <div className=" flex items-center mt-5">
                <IoMdCall className=" mr-5" size={25}/>
                <p className=" font-bold text-xl">+254 708 999 666</p>
            </div>
            <div className=" flex items-center mt-5">
                <BsWhatsapp className=" mr-5" size={25}/>
                <p className=" font-bold text-xl">+254 708 999 666</p>
            </div>
        </div>

        <div className=" flex flex-col flex-[2] px-[80px] py-10">
            <h1 className=" mb-10">Message Us</h1>

            
            <div className=" lg:flex w-full mb-10">
                <div className=" flex flex-col flex-1">
                    <label htmlFor="" className=" mb-5"> Name*</label>
                    <input type="text" title="Email" className="p-2 rounded-md w-full"  />
                </div>

                <div className=" flex flex-col flex-1 lg:ml-10">
                    <label htmlFor="" className=" mb-5"> City/Country*</label>
                    <input type="text" title="Email" className="p-2 rounded-md w-full"  />
                </div>
            </div>


            <div className=" lg:flex w-full mb-10">
            <div className=" flex flex-col flex-1">
                <label htmlFor="" className=" mb-5"> Email*</label>
                 <input type="text" title="Email" className="p-2 rounded-md w-full" />
            </div>
            <div className=" flex flex-col flex-1 lg:ml-10">
                    <label htmlFor="" className=" mb-5"> Phone/ WhatsApp Number</label>
                    <input type="text" title="Email" className="p-2 rounded-md w-full"  />
            </div>
          
            </div>
                <div>
                    <label htmlFor="" className=" mb-5"> Message</label>
                    <textarea className="p-2 rounded-md w-full"  rows="4"cols="50" />
                </div>
        </div>
    </div>
  )
}

export default Contact