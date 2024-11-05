import Dash from '../../assets/images/web-portal.png'
import Commission from '../../assets/images/percentage.png'
import Settings from '../../assets/images/settings.png'
import Power from '../../assets/images/power-bank.png'




function Services() {
  return (
    <div 
    className="bg-gray-200 p-5 relative bg-cover bg-center" 
    style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/07/46/95/46/360_F_746954673_VaR2YwZvNk4w5rZEVuo5U3yLfkHwEVEz.jpg')` }}
  >
    {/* Blue overlay */}
    <div className="absolute inset-0 bg-blue-900 opacity-75 z-10"></div>
  
    {/* Content */}
    <h1 className="text-center font-bold text-4xl my-10 relative z-20 text-white">Mopawa Provides</h1>
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 relative z-20">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
        <img src={Dash} alt="" className="h-[80px] mb-5"/>
        <h1 className="font-bold text-lg mb-5 text-center">A web portal for monitoring Usage and Revenue in real time</h1>
      </div>
  
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
        <img src={Commission} alt="" className="h-[80px] mb-5"/>
        <h1 className="font-bold text-lg mb-5 text-center">A calculation of commission based on the revenue share</h1>
      </div>
  
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
        <img src={Power} alt="" className="h-[80px] mb-5"/>
        <h1 className="font-bold text-lg mb-5 text-center">Refill power banks lost during customer's usage free of charge</h1>
      </div>
  
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
        <img src={Settings} alt="" className="h-[80px] mb-5"/>
        <h1 className="font-bold text-lg mb-5 text-center">Scheduled maintenance for partners, during which the technician will change the dispenser parts and powerbanks for free</h1>
      </div>
    </div>
  </div>
  
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