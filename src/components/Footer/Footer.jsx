import Logo from "../../assets/images/mopawalogo.png"
import { FaFacebookF, FaInstagramSquare, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";

function Footer() {
    const [curretYear, setCurrentYear] = useState("")

    const getYear =()=>{
        const date = new Date()
        const year = date.getFullYear()
        setCurrentYear(year)
    }

    useEffect(()=>{
        getYear()
    },[])

 return (
    <div className="z-[1] w-full ">
        <div className="lg:flex lg:flex-row lg:justify-around bg-black p-10">
            {/* First Column */}
            <div className="flex-1 py-5 lg:py-0">
                <div className="flex flex-row items-center my-5">
                    <img src={Logo} alt="logo" className="h-[50px]" />
                    <p className="text-white font-bold text-3xl ml-4">Mopawa</p>
                </div>
                <p className="text-gray-400">
                    Mopawa Software Limited<br />
                    Victoria Towers<br />
                    Kilimanjaro Road<br />
                    Email: info@mopawa.co.ke<br />
                    Phone: +254 708 999 666<br />
                </p>

                <div className=" flex flex-row items-center mt-5">
                    <a href="https://www.facebook.com/mopawasoftware" target="_blank" className="border border-white p-2"><FaFacebookF color="white" size={27}/></a>
                    <a href="https://www.instagram.com/mopawasoftwareke/" target="_blank" className="border border-white p-2"><FaInstagramSquare color="white" size={27}/></a>
                    <a href="https://x.com/MopawaLtd" target="_blank" className="border border-white p-2"><FaXTwitter color="white" size={27}/></a>
                </div>
            </div>

            {/* Second Column with a Border */}
            <div className="flex-1 border-t lg:border-l lg:border-t-0 border-gray-600 lg:pl-10 py-5">
                <p className="text-white font-bold mb-3 text-3xl">Latest Posts</p>
                <a href="/blog" className="text-gray-400 hover:underline">
                    <strong>What is Power Bank Sharing and How to Start This Business? </strong>
                    <br/> <br/>
                    Before looking into what “sharing power bank station” is, we need to figure out what is sharing economy, because sharing power bank is definitely a part of sharing economy. In this...              
                </a>
            </div>

            {/* Third Column with a Border */}
            <div className="flex-1 border-t lg:border-l lg:border-t-0 border-gray-600 lg:pl-10 py-5">
                <h1 className="text-white font-bold mb-3 text-3xl">Quick Links</h1>
                <ul className="text-gray-200 space-y-2">
                    <li><a href="/about">About Mopawa</a></li>
                    <li> <a href="/products">Products</a></li>
                    <li><a href="/customs">Customization</a></li>
                    <li><a href="/faq">FAQs</a></li>
                    <li> <a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
            </div>

            {/* Fourth Column with a Border */}
            <div className="flex-1 border-t lg:border-l lg:border-t-0 border-gray-600 py-5 lg:pl-10">
                <h1 className="text-white font-bold mb-3 text-3xl">Newsletter</h1>
                <p className="text-gray-400 mb-3">Subscribe for more news</p>
                <input type="text" title="Email" className="p-2 rounded-md w-full" placeholder="Your email*" />
                <button className=" bg-white rounded-md p-3 mt-5 font-bold">
                    Submit
                </button>
            </div>
        </div>

        <div className=" bg-black flex items-center justify-center text-gray-400 h-[100px]">
            <p>Copyright © {curretYear} Mopawa - Rental Power banks! All Rights Reserved.</p>
        </div>
    </div>
)}

export default Footer