import './Joint.css'
import Eight from '../../assets/images/8slot.png'
import Stackable from '../../assets/images/stackable.png'
import { IoIosArrowForward } from "react-icons/io";
import Usage from '../../assets/images/stat1.png'
import Budget from '../../assets/images/stat2.png'
import Total from '../../assets/images/stat3.png'
import ProfitTable from './Table'
import Management from './Management'
import Services from './Services'
import Payment from './Payment'

function Joint() {
  return (
    <>

    <div className=' bg-green-700 pt-[80px] px-20'>
          <div className="flex lg:flex-row flex-col-reverse gap-5 items-center">
            <div className="flex-1 text-center lg:text-left">
                <h3 className="text-white font-light animate-slide-in-right mb-5">Permanent 100% profit |  Guaranteed Cash back</h3>
                <h1 className="text-white text-4xl font-bold animate-textIn mb-5">One-time Invetment and a lifetime income</h1>
                <a href="" className="my-10 border border-black rounded-md px-5 py-3 bg-black text-white font-bold hover:bg-gray-700 hover:border-gray-700">Talk to our team</a>
            </div>
            
            <div className="flex-1">
              <img className="animate-zoom-pulse lg:h-[500px] object-cover" src={Stackable} alt="" />
            </div>
        </div>
    </div> 
    

    <div className=' py-10 px-10'>
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 items-center">
      
    <div >
        <img src={Eight} alt="stackable" className=' h-[300px] object-cover'/>
    </div>


      <div>
            <div className="flex mb-5 items-center">
                    <div className="flex-shrink-0 w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-primary text-2xl text-green-500"></i>
                    </div>
                    <div className="pl-3">
                        <h5 className="text-lg font-semibold">Get you payout every month</h5>
                    </div>
                </div>

                <div className="flex mb-5 items-center">
                    <div className="flex-shrink-0 w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-primary text-2xl text-green-500"></i>
                    </div>
                    <div className="pl-3">
                        <h5 className="text-lg font-semibold">Buy once, get a parmanent 100% profit</h5>
                    </div>
              </div>

              <div className="flex mb-5 items-center">
                  <div className="flex-shrink-0 w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-primary text-2xl text-green-500"></i>
                  </div>
                  <div className="pl-3">
                      <h5 className="text-lg font-semibold">Lifetime after sales services and support</h5>
                  </div>
              </div>

              <div className="flex mb-5 items-center">
                  <div className="flex-shrink-0 w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-primary text-2xl text-green-500"></i>
                  </div>
                  <div className="pl-3">
                      <h5 className="text-lg font-semibold">Guarantee cashback</h5>
                  </div>
              </div>
            </div>
        </div>

        <div className=' flex flex-col items-center my-10'>
          <h1 className=' font-bold text-3xl'>Make money in just 3 steps</h1>
          
          <div className=' bg-green-500 lg:h-[60px] min-h-0 w-full rounded-xl mt-5 lg:flex justify-around items-center lg:py-0 py-5 ps-5 lg:ps-0'>
              <div className=' flex items-center mb-10 lg:mb-0'>
                <div className=' p-3 rounded-full w-3 h-3 bg-white flex items-center justify-center'><h1>1</h1></div>
                <p className='text-white font-bold mx-3'>Consult and make an order</p>
                <IoIosArrowForward color='white' size={20}/>
              </div>

              <div className=' flex items-center mb-10 lg:mb-0'>
                <div className=' p-3 rounded-full w-3 h-3 bg-white flex items-center justify-center'><h1>2</h1></div>
                <p className='text-white font-bold mx-3'>Meet our customer service representative </p>
                <IoIosArrowForward color='white' size={20}/>
              </div>

              <div className=' flex items-center'>
                <div className=' p-3 rounded-full w-3 h-3 bg-white flex items-center justify-center'><h1>3</h1></div>
                <p className='text-white font-bold mx-3'>Start earning</p>
                <IoIosArrowForward color='white' size={20}/>
              </div>
          </div>
        </div>
      </div>


      <div className=' bg-green-600 p-5'>
        <h1 className=' font-bold text-white text-center text-3xl'>How much money can you make from a powerbank?</h1>
        
        <div className=' mt-10 '>
          <p className=' text-white text-center mb-10'>
            It is estimated that one powerbank can be used for 2 hours daily at Ksh. 100 per hour. <br/>The income of 1 powerbank is Ksh. 200, and one machine per day is 200 * 8 = Ksh. 1600
          </p>

          <div className=' flex lg:flex-row flex-col items-center lg:justify-around'>
            <div className=''>
                <img src={Usage} alt="usage time" className='h-[250px]'/>
                <h1 className=' text-white font-bold text-5xl'>2 hrs </h1>
                <p className=' text-white'>Per day</p>
            </div>
            
            <div className=''>
                <img src={Budget} alt="usage time" className='h-[250px]'/>
                <h1 className=' text-white font-bold text-5xl'>Ksh. 100 </h1>
                <p className=' text-white'>Per hour</p>
            </div>

            <div className=''>
                <img src={Total} alt="usage time" className='h-[250px]'/>
                <h1 className=' text-white font-bold text-5xl'>Ksh. 1600 </h1>
                <p className=' text-white'>Per day</p>
            </div>
          </div>
        </div>
      </div>

      <ProfitTable/>
      <Management/>
      <Services/>
      <Payment/>
    </>
  )
}

export default Joint