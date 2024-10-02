
function Hero() {
  return (
    <div>
        <div className=' h-[50vh] w-[100vw] z-1 relative'>
            <div className=' h-[50vh] w-[100vw] z-1 absolute bg-black opacity-50'></div>
                <img src="https://www.shutterstock.com/image-photo/our-products-letters-golden-cubes-260nw-1573611139.jpg" alt=' Hero section' className=' w-[100vw] h-[50vh] object-cover '/>
            <div className=" lg:pl-[15%]">
                <h1 className=' absolute lg:top-[40%] top-[20%] text-white lg:text-6xl text-4xl ml-10 font-bold z-0'>Our Products<br/>
               </h1>
            </div>
            
            </div> 
    </div>
  )
}

export default Hero