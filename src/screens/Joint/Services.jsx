import { FaComputer } from "react-icons/fa6";
import { MdCalculate } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { ImPowerCord } from "react-icons/im";


function Services() {
  return (
    <>
    <div className=" p-10 grid relative place-content-center bg-gradient-to-t from-green-900 to-black w-full lg:min-h-[40vh] min-h-[50vh]">
         {/* <img src="https://i.pinimg.com/564x/84/6b/45/846b45cca587f713cc2218074eb50dd1.jpg" alt="" className=" absolute w-full lg:h-[40vh] h-[50vh] object-cover"/> */}
        <div className=" absolute top-0 w-full">
           <h1 className=" text-4xl font-bold text-center my-5 text-white mb-5"> Mopawa provides;</h1>

           
            <div className=" grid grid-cols-2 gap-10 p-5">

                 <div className=" lg:flex lg:items-center justify-center ">
                    <div>
                        <div className=" rounded-full mr-5 flex items-center justify-center text-4xl font-bold"><FaComputer color="white" size={50}/></div>
                    </div>
                    <div >
                        <h1 className=" lg:text-xl text-white">A web portal for monitoring Usage and Revenue</h1>
                     
                </div>
            </div>

            <div>
                 <div className=" lg:flex lg:items-center justify-center ">
                    <div>
                        <div className=" rounded-full mr-5 flex items-center justify-center text-4xl font-bold"><MdCalculate color="white" size={50}/></div>
                    </div>
                    <div >
                        <h1 className=" lg:text-xl text-white">Calculate the Agency commission at the rate of 70% on revenue</h1>
                     
                        </div>
                    </div>
            </div>

            <div>
                 <div className=" lg:flex lg:items-center justify-center ">
                    <div>
                        <div className=" rounded-full mr-5 flex items-center justify-center text-4xl font-bold"><ImPowerCord color="white" size={50}/></div>
                    </div>
                    <div >
                        <h1 className=" lg:text-xl text-white ">Refill power banks lost during customer's usage</h1>
                     
                        </div>
                    </div>
            </div>

            <div>
                 <div className=" lg:flex lg:items-center justify-center ">
                    <div>
                        <div className=" rounded-full mr-5 flex items-center justify-center text-4xl font-bold"><GrVmMaintenance color="white" size={50}/></div>
                    </div>
                    <div >
                        <h1 className=" lg:text-xl text-white">Scheduled maintainance for partners,during which the technician will change the dispenser parts and powerbanks for free</h1>
                     
                        </div>
                    </div>
            </div>


            </div>
        </div>
    </div>
    </>
  )
}

export default Services




///  <h1 className=" text-4xl font-bold text-center my-5 text-white"> Mopawa provides;</h1>
        // <div className=" flex items-center mb-10 ">
        //     <div>
        //         <div className=" rounded-full bg-white mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold">01</div>
        //     </div>
        //     <div >
        //         <h1 className=" font-bold text-lg mb-5 text-white">A web portal for monitoring Usage and Revenue</h1>
        //         <p className="text-white"> 
        //            You will be able to view the usage statistics and revenue in real time from the web portal 
        //         </p>
        //     </div>
        // </div>

        // <div className=" flex items-center mb-10 ">
        //     <div>
        //         <div className=" rounded-full bg-white mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold">02</div>
        //     </div>
        //     <div>
        //         <h1 className=" font-bold text-lg mb-5 text-white">Calculate the Agency commission at the rate of 70% on revenue (less Mpesa Transaction charged at 5/=)</h1>
         
        //     </div>
        // </div>

        // <div className=" flex items-center mb-10">
        //     <div>
        //         <div className=" rounded-full bg-white mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold">03</div>
        //     </div>
        //     <div>
        //         <h1 className=" font-bold text-lg mb-5 text-white">Refill power banks lost during customer's usage (based on the system record)</h1>
        
        //     </div>
        // </div>

        // <div className=" flex items-center">
        //     <div>
        //         <div className=" rounded-full bg-white mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold">04</div>
        //     </div>
        //     <div>
        //         <h1 className=" font-bold text-lg mb-5 text-white">Scheduled maintainance for partners,during which the technician will change the dispenser parts and powerbanks for free</h1>
             
        //     </div>
        // </div>