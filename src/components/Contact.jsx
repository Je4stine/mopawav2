import { IoMdCall } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function Contact() {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const sendMessage =async()=>{
        const data ={
            name, country, message, phone, email
        }

        try{
            const response = await fetch("https://mailer.mopawa.co.ke/sendRequest",{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                
            })

            if(response.status != 200){
                toast("An error occured while sending your message")
            }

            toast("Your message has been received, we will call you back");
            setCountry("")
            setEmail("")
            setMessage("")
            setName("")

        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className=" lg:flex p-5 bg-white">
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
            <div className=" flex items-center mt-5">
                <MdOutlineMail className=" mr-5" size={25}/>
                <p className=" font-bold text-xl">info@mopawa.co.ke</p>
            </div>
        </div>

        <div className=" flex flex-col flex-[2] lg:px-[80px] py-10">
            <h1 className=" mb-10">Message Us</h1>

            
            <div className=" lg:flex w-full mb-10">
                <div className=" flex flex-col flex-1">
                    <label htmlFor="" className=" mb-5" > Name*</label>
                    <input type="text" title="Email" className="p-2 rounded-md w-full"  onChange={(e)=>{setName(e.target.value)}}/>
                </div>

                <div className=" flex flex-col flex-1 lg:ml-10">
                    <label htmlFor="" className=" mb-5"> City/Country*</label>
                    <input type="text" title="Email" className="p-2 rounded-md w-full"  onChange={(e)=>{setCountry(e.target.value)}}/>
                </div>
            </div>


            <div className=" lg:flex w-full mb-10">
            <div className=" flex flex-col flex-1">
                <label htmlFor="" className=" mb-5"> Email*</label>
                 <input type="text" title="Email" className="p-2 rounded-md w-full" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className=" flex flex-col flex-1 lg:ml-10">
                    <label htmlFor="" className=" mb-5"> Phone/ WhatsApp Number</label>
                    <input type="text" title="Email" className="p-2 rounded-md w-full"  onChange={(e)=>{setPhone(e.target.value)}}/>
            </div>
          
            </div>
                <div>
                    <label htmlFor="" className=" mb-5"> Message</label>
                    <textarea className="p-2 rounded-md w-full"  rows="4"cols="50" onChange={(e)=>{setMessage(e.target.value)}}/>
                </div>

                <div className=" mt-3">
                    <button onClick={sendMessage} className=" bg-yellow-400 text-white px-5 py-3 rounded-md">
                        Submit
                    </button>
                    <ToastContainer />
                </div>
        </div>
    </div>
  )
}

export default Contact