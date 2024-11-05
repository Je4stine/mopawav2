
import { FaHandshake } from "react-icons/fa";
import Dollar1 from '../../assets/images/30percent.png'
import Dollar2 from '../../assets/images/moreusd.png'


function Payment() {

  return (
    <div className="p-10 bg-white rounded-t-xl">
      <div className="w-full grid place-content-center">
            <h1 className=' font-bold text-4xl text-center my-10'> To earn money, you need 3 steps</h1>
            <div className=" text-center flex justify-center my-10 bg-green-600 rounded-xl max-w-[70vw] px-3 py-3 ">
              <div className=" mr-10 text-white text-xl">1.Inquiry</div>
              <div className=" mr-10 text-white text-xl">2.Make payment</div>
              <div className=" mr-10 text-white text-xl">3. Open an account with us</div>
            </div>
        </div>
 
        

       <div className="w-full">
            <h1 className=' font-bold text-4xl text-center'> Your Path to Success Starts Here</h1>
        </div>

        <div className=' flex flex-col items-center my-5'>
          <div>
           
            <h1 className=' text-center text-2xl mt-5'>To get your own cabinet, make  a payment of Ksh. 30,000 </h1>
          </div>
          <div className=' my-5'>
              <div className=' flex items-center'>
                  
                  <h1 className=' ml-5'> One time service fee - Ksh. 4,000</h1>
              </div>
              <div className=' flex items-center mt-3'>
                  
                  <h1 className=' ml-5'>  Refundable deposit fee- Ksh. 26,000 </h1>
              </div>

          </div>
          

        </div>



                  
          <div className=' my-10 flex justify-evenly w-full items-center'>
                <div className=' flex flex-col items-center'>
                    <div className=' lg:h-[250px] lg:w-[250px]  rounded-full flex items-center justify-center '>
                      <img src={Dollar2} alt="30% dollars" className=" lg:h-[300px] h-[80px] object-cover"/>
                    </div>
                    <h1 className=" text-xl mt-3 font-bold"> 70%  Partner</h1>
                </div>


                <div className=' lg:h-[150px] lg:w-[150px] rounded-full flex items-center justify-center '>
                <FaHandshake color='black' size={50} className="lg:hidden"/>
                <FaHandshake color='black' size={200} className=" hidden lg:inline-block"/>
                </div>

                <div className=' flex flex-col items-center'>
                    <div className=' lg:h-[250px] lg:w-[250px]  rounded-full flex items-center justify-center '>
                      <img src={Dollar1} alt="30% dollars" className=" lg:h-[200px] h-[50px]" />
                    </div>
                    <h1 className=" text-xl font-bold mt-3"> 30% Mopawa </h1>
                </div>

          </div>
          <div className=' flex flex-col items-center'>
            <h1 className=' px-4 py-3 bg-green-600 rounded-xl text-white font-bold'>Revenue Share</h1>
          </div>
     
    </div>
  )
}

export default Payment