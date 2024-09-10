

function Hero() {
  return (
    <div>
         <div className=' h-[50vh] w-[100vw] z-1 relative'>
        <div className=' h-[50vh] w-[100vw] z-1 absolute bg-black opacity-50'></div>
            <img src="https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?t=st=1725871167~exp=1725874767~hmac=7ef00de287d5799909442d413b6c5739ad68fc601335eca1ef123e415729c70b&w=1380" alt=' Hero section' className=' w-[100vw] h-[50vh] object-cover '/>
        <div className=" lg:pl-[15%]">
            <h1 className=' absolute lg:top-[40%] top-[20%] text-white lg:text-6xl text-4xl ml-10 font-bold z-0'>Brand Customization<br/>
            <span className=' lg:text-2xl text-lg font-normal'>Power bank station brand customization · Application development · Payment gateway connection · Specialty manufacturing</span></h1>
        </div>
       
    </div> 
    </div>
  )
}

export default Hero