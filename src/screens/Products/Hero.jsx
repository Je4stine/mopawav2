
function Hero() {
  return (
    <div>
        <div className=' h-[50vh] w-[100vw] z-1 relative'>
            <div className=' h-[50vh] w-[100vw] z-1 absolute bg-black opacity-50'></div>
                <img src="https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=' Hero section' className=' w-[100vw] h-[50vh] object-cover '/>
            <div className=" lg:pl-[15%]">
                <h1 className=' absolute lg:top-[40%] top-[20%] text-white lg:text-6xl text-4xl ml-10 font-bold z-0'>Our Products<br/>
               </h1>
            </div>
            
            </div> 
    </div>
  )
}

export default Hero