import { IoPerson } from "react-icons/io5"; 
import { FaEye } from "react-icons/fa";
import { PiBookOpenTextLight } from "react-icons/pi";
import { IoDiamondSharp } from "react-icons/io5";
import Contact from '../../components/Contact'
import { Helmet } from "react-helmet";
import Director from '../../assets/images/20241017-092608.jpg'
import Grace from '../../assets/images/Grace.png'
import Charging from '../../assets/images/charging.jpg'
import { IoIosArrowDown } from "react-icons/io";

function About() {
  

  return (
    <>
     <Helmet>
        <title>About Us </title>
        <meta name="description" content=" Best Sharing Power Bank Staion Manufacturer. Reliable Power Bank Rental Service Provider.  " />
        <meta name="keywords" content="shared power bank, rental powerbank, mopawa, power bank" />
      </Helmet>

    <div className=' h-[90vh] w-[100vw] z-1 relative'>
        <div className=' h-[90vh] w-[100vw] z-1 absolute bg-black opacity-50'></div>
            <img src="https://images.unsplash.com/photo-1693902997450-7e912c0d3554?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMGNpdHl8ZW58MHx8MHx8fDA%3D" alt=' Hero section' className=' w-[100vw] h-[90vh] object-cover '/>
        <div className=" lg:pl-[15%]">
            <h1 className=' absolute lg:top-[40%] top-[20%] text-white lg:text-6xl text-4xl ml-10 font-bold z-0'>About Mopawa<br/>
            <span className=' lg:text-2xl text-lg font-normal'>Mopawa - Best Sharing Power Bank Station Manufacturer. Reliable Power Bank Rental Service Provider.</span></h1>
         
        </div>

        <div className=" absolute bottom-[10%] right-[50%] z-0 animate-bounce">
          <IoIosArrowDown color="white" size={60}/>
        </div>
       
    </div> 




    <div className=" bg-gray-200 flex flex-col-reverse lg:flex-row items-center justify-center p-10">
          <div className="flex flex-col flex-1">
            <img src={Charging} alt="chrging" className="lg:h-[400px] lg:w-[80%] object-cover"/>
          </div>
          <div className=" p-5 flex flex-col flex-1 items-center">
              <h1 className="lg:text-4xl text-2xl font-bold mb-5">Who are we?</h1>
              <p>Mopawa Software Limited is a dynamic and innovative technology company founded in Kenya in 2022 that provides cutting-edge solutions, and has since grown and evolved organically. <br/><br/>Our services include shared power bank station manufacturing, payment gateway integration, and management system development.
              <br/><br/>We are committed to providing the best service for those who run out of battery on the go, and we strive to make our daily work and operations as resource-efficient as possible.
              </p>
          </div>    
    </div>

    <div className=" bg-black p-10">
          <div className=" p-5 flex flex-col flex-1 items-center">
              <h1 className="lg:text-4xl text-2xl font-bold mb-5 text-white">Meet Our Team</h1>
          </div>

          <div className=" lg:flex lg:justify-around">
              <div className=" flex flex-col items-center justify-center lg:mb-0 mb-20">
                  <img src={Director} alt="director image" className=" h-[300px] w-300px] mb-5" />
                  <h1 className=" text-white font-bold text-xl">Managing Director</h1>
                  <h1 className=" text-white">Mr. Peter Wang</h1>
              </div>
              <div className=" flex flex-col items-center justify-center">
                  <img src={Grace} alt="director image" className=" h-[300px] w-300px] mb-5" />
                  <h1 className=" text-white font-bold text-xl">General Manager</h1>
                  <h1 className=" text-white">Madam Grace</h1>
              </div>
          </div>    
    </div>

    <div className=" flex flex-col items-center py-10 bg-gray-100">
      <h1 className="lg:text-4xl text-2xl font-bold mb-5">Mopawa Enterprise Culture</h1>

      <div className=" lg:flex lg:justify-around lg:flex-1">


          <div className="flex flex-col items-center flex-1">
              <div className="flex flex-col items-center justify-center border border-gray-400 border-opacity-50 rounded-full h-[180px] w-[180px] mb-4">
                <div className="bg-gray-400 rounded-full p-[40px]">
                  <IoPerson size={50} color="white" />
                </div>
              </div>

              <div className="w-[45%] flex flex-col items-center">
                <h1>Profile</h1>
                <p className="text-center text-gray-400">
                  Leading full chain service provider in the shared power bank industry.
                </p>
              </div>
          </div>



        <div className=" flex flex-col items-center flex-1">
            <div className="flex flex-col items-center justify-center border border-gray-400 border-opacity-50 rounded-full h-[180px] w-[180px] mb-4">
              <div className=" bg-gray-400 rounded-full p-[40px]">
                <FaEye size={50} color="white"/>
              </div>
            </div>

            <div className=" w-[45%] flex flex-col items-center">
                  <h1>Vision</h1>
                  <p className=" text-center text-gray-400">To be a company that benefits all mankind.</p>
              </div>
        </div>
       
        <div className=" flex flex-col items-center flex-1">
        <div className="flex flex-col items-center justify-center border border-gray-400 border-opacity-50 rounded-full h-[180px] w-[180px] mb-4">
        <div className=" bg-gray-400 rounded-full p-[40px]">
            <PiBookOpenTextLight size={50} color="white"/>
          </div>
        </div>
        <div className=" w-[45%] flex flex-col items-center">
                  <h1>Mission</h1>
                  <p className=" text-center text-gray-400">People-oriented, make wisdom and great love products Keep forging ahead, and realize global operation</p>
        </div>
        </div>

        <div className=" flex flex-col items-center flex-1">
        <div className="flex flex-col items-center justify-center border border-gray-400 border-opacity-50 rounded-full h-[180px] w-[180px] mb-4">
        <div className=" bg-gray-400 rounded-full p-[40px]">
            <IoDiamondSharp size={50} color="white"/>
          </div>
        </div>
        <div className=" w-[45%] flex flex-col items-center">
                  <h1>Values</h1>
                  <p className=" text-center text-gray-400">Innovation, Sustainability, Integrity and agility.</p>
        </div>
        </div>

      </div>
    </div>
    <Contact/>
    </>
  )
}

export default About