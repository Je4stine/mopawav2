
import { FaHandshake } from "react-icons/fa";
import Dollar1 from '../../assets/images/30percent.png'
import Dollar2 from '../../assets/images/dolllars-min.png'


function Payment() {
  return (
    <div className="p-10">
       <div className="w-full">
            <h1 className=' font-bold text-4xl text-center'> Start business immediately</h1>
        </div>

        <div className=' flex flex-col items-center my-5'>
          <div>
            {/* <div className=' bg-gray-400 rounded-full w-[280px] h-[280px] flex flex-col items-center justify-center'>
              <img src={Box} alt="" className=' h-[250px] object-cover'/>
            </div> */}
            <h1 className=' text-center text-2xl mt-5'>To start earning, make  a payment of Ksh. 30,000 </h1>
          </div>
          <div className=' my-5'>
              <div className=' flex items-center'>
                  <div className="flex-shrink-0 w-[30px] h-[30px] border border-gray-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary text-xl text-green-500"></i>
                  </div>
                  <h1 className=' ml-5'> One time service fee - Ksh. 4,000</h1>
              </div>
              <div className=' flex items-center mt-3'>
                  <div className="flex-shrink-0 w-[30px] h-[30px] border border-gray-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary text-xl text-green-500"></i>
                  </div>
                  <h1 className=' ml-5'>  Refundable deposit fee- Ksh. 26,000 </h1>
              </div>

          </div>
          

        </div>



                  
          <div className=' my-10 flex justify-evenly w-full items-center'>
                <div className=' flex flex-col items-center'>
                    <div className=' lg:h-[250px] lg:w-[250px]  rounded-full flex items-center justify-center '>
                      <img src={Dollar2} alt="30% dollars" />
                    </div>
                    <h1 className=" text-xl mt-3 font-bold"> Partner</h1>
                </div>


                <div className=' lg:h-[150px] lg:w-[150px] rounded-full flex items-center justify-center '>
                <FaHandshake color='black' size={200}/>
                </div>

                <div className=' flex flex-col items-center'>
                    <div className=' lg:h-[250px] lg:w-[250px]  rounded-full flex items-center justify-center '>
                      <img src={Dollar1} alt="30% dollars" />
                    </div>
                    <h1 className=" text-xl font-bold mt-3"> Mopawa </h1>
                </div>

          </div>
          <div className=' flex flex-col items-center'>
            <h1 className=' px-4 py-3 bg-green-600 rounded-xl text-white font-bold'>Revenue Share</h1>
          </div>
     
    </div>
  )
}

export default Payment