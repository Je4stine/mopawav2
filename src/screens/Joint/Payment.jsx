
import Box from '../../assets/images/stackable.png'
import { FaHandshake } from "react-icons/fa";

function Payment() {
  return (
    <div className="bg-green-600 p-10">
       <div className="w-full">
            <h1 className=' text-white font-bold text-4xl text-center'> Our Policies</h1>
        </div>

        <div className=' flex flex-col items-center my-10'>
          <div>
            <div className=' bg-gray-400 rounded-full w-[280px] h-[280px] flex flex-col items-center justify-center'>
              <img src={Box} alt="" className=' h-[250px] object-cover'/>
            </div>
            <h1 className=' text-white font-bold text-center text-xl mt-5'>Refundable Deposit - Ksh. 26,000</h1>
            <h1 className=' text-white font-bold text-center text-xl'>One-time Service Fee - Ksh. 4000</h1>
          </div>

        </div>



                  
          <div className=' my-10 flex justify-evenly w-full'>
                <div className=' flex flex-col items-center'>
                    <div className=' h-[150px] w-[150px] rounded-full bg-orange-400 flex items-center justify-center '>
                      <h1 className=' text-white font-bold text-4xl'>70%</h1>
                    </div>
                    <h1 className=" text-white font-xl mt-3"> Partner</h1>
                </div>


                <div className=' h-[150px] w-[150px] rounded-full flex items-center justify-center '>
                <FaHandshake color='white' size={200}/>
                </div>

                <div className=' flex flex-col items-center'>
                    <div className=' h-[150px] w-[150px] rounded-full bg-orange-400 flex items-center justify-center '>
                      <h1  className=' text-white font-bold text-4xl'>30%</h1>
                    </div>
                    <h1 className=" text-white font-xl mt-3"> Mopawa </h1>
                </div>

          </div>
    </div>
  )
}

export default Payment