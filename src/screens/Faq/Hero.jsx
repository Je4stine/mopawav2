
function Hero() {
  return (
    <div>
        <div className=' h-[50vh] w-[100vw] z-1 relative'>
            <div className=' h-[50vh] w-[100vw] z-1 absolute bg-black opacity-50'></div>
                <img src="https://t4.ftcdn.net/jpg/02/31/09/95/360_F_231099575_lZ0t1s4lR3YtrQbeEqUPDqiW0UsQNKcy.jpg" alt=' Hero section' className=' w-[100vw] h-[50vh] object-cover '/>
            <div className=" lg:pl-[15%]">
                <h1 className=' absolute lg:top-[40%] top-[20%] text-white lg:text-6xl text-4xl ml-10 font-bold z-0'>Frequently Asked Questions<br/>
            </h1>
            </div>
            
            </div> 
    </div>
  )
}

export default Hero