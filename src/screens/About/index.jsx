import { IoPerson } from "react-icons/io5"; 
import { FaEye } from "react-icons/fa";
import { PiBookOpenTextLight } from "react-icons/pi";
import { IoDiamondSharp } from "react-icons/io5";
import Contact from '../../components/Contact'

function About() {
  

  return (
    <>
    <div className=' h-[50vh] w-[100vw] z-1 relative'>
        <div className=' h-[50vh] w-[100vw] z-1 absolute bg-black opacity-50'></div>
            <img src="https://chargeeight.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%872-1.png" alt=' Hero section' className=' w-[100vw] h-[50vh] object-cover '/>
        <div className=" lg:pl-[15%]">
            <h1 className=' absolute lg:top-[40%] top-[20%] text-white lg:text-6xl text-4xl ml-10 font-bold z-0'>About Us<br/>
            <span className=' lg:text-2xl text-lg font-normal'>Mopawa - Best Sharing Power Bank Staion Manufacturer. Reliable Power Bank Rental Service Provider.</span></h1>
        </div>
       
    </div> 



    <div className=" bg-gray-200 lg:flex lg:items-center lg:justify-center p-10">
          <div className=" p-5 flex flex-col flex-1 items-center">
              <h1 className="lg:text-4xl text-2xl font-bold mb-5">About Mopawa</h1>
              <p>
              Mopawa is the global brand of Shenzhen Zhongdianhexin Technology Co., Ltd. One of the biggest shared power bank manufacturers. Established in 2014, our company is a high-tech company based on the Internet and IoT technology, industrial characteristics, ecological environment, and big data services. The company has been developed into a competitive high-tech enterprise of shared power bank stations integrating R & D, production, operation, sales, and service. We focus on the R & D and application of high-new technology and inspire consumers to bring new ways of technological life with wisdom and love.
              </p>
          </div>
         
          <div className="flex flex-col flex-1 items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gQrFAFMuiYc?si=VDnxB3M0th5Fcfvb&amp;controls=0&amp;start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
    </div>

    <div className=" flex flex-col items-center py-10 bg-gray-100">
      <h1 className="lg:text-4xl text-2xl font-bold mb-5">Mopawa Enterprise Culture</h1>

      <div className=" lg:flex lg:justify-around lg:flex-1">

        <div className=" flex flex-col items-center">
              <div className=" flex flex-col items-center justify-center mr-10 border border-gray-400 border-opacity-50 rounded-full h-[250px] w-[250px]">
                <div className=" bg-gray-400 rounded-full p-[40px]">
                  <IoPerson size={50} color="white"/>
                </div>
              </div>
              <div className=" w-[45%] flex flex-col items-center">
                  <h1>Profile</h1>
                  <p className=" text-center text-gray-400">Leading full chain service provider in the shared power bank industry.</p>
              </div>
        </div>


        <div className=" flex flex-col items-center mb-10">
            <div className="flex flex-col items-center justify-center mr-10 border border-gray-400 border-opacity-50 rounded-full h-[250px] w-[250px]">
              <div className=" bg-gray-400 rounded-full p-[40px]">
                <FaEye size={50} color="white"/>
              </div>
            </div>

            <div className=" w-[45%] flex flex-col items-center">
                  <h1>Vision</h1>
                  <p className=" text-center text-gray-400">To be a company that benefits all mankind.</p>
              </div>
        </div>
       
        <div className=" flex flex-col items-center mb-10">
        <div className="flex flex-col items-center justify-center mr-10 border border-gray-400 border-opacity-50 rounded-full h-[250px] w-[250px]">
        <div className=" bg-gray-400 rounded-full p-[40px]">
            <PiBookOpenTextLight size={50} color="white"/>
          </div>
        </div>
        <div className=" w-[45%] flex flex-col items-center">
                  <h1>Mission</h1>
                  <p className=" text-center text-gray-400">People-oriented, make wisdom and great love products Keep forging ahead, and realize global operation</p>
        </div>
        </div>

        <div className=" flex flex-col items-center mb-10">
        <div className="flex flex-col items-center justify-center mr-10 border border-gray-400 border-opacity-50 rounded-full h-[250px] w-[250px]">
        <div className=" bg-gray-400 rounded-full p-[40px]">
            <IoDiamondSharp size={50} color="white"/>
          </div>
        </div>
        <div className=" w-[45%] flex flex-col items-center">
                  <h1>Values</h1>
                  <p className=" text-center text-gray-400">Punctuality, trustworthiness, modesty and uprightness.</p>
        </div>
        </div>

      </div>
    </div>
    <Contact/>
    </>
  )
}

export default About