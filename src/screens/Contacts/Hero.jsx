

function Hero() {
    return (
      <div>
           <div className=' h-[50vh] w-[100vw] z-1 relative'>
                <div className=' h-[50vh] w-[100vw] z-1 absolute bg-black opacity-50'></div>
                    <img src="https://media.istockphoto.com/id/185895589/photo/keyboard-with-customize-orange-button.jpg?s=612x612&w=0&k=20&c=GWlqj6ensZWJbbGQlCVWSlZNajhzpnRnHKCqsoPmpzU=" alt=' Hero section' className=' w-[100vw] h-[50vh] object-cover '/>
                <div className=" lg:pl-[15%]">
                    <h1 className=' absolute lg:top-[40%] top-[20%] text-white lg:text-6xl text-4xl ml-10 font-bold z-0'>
                    Get in Touch with Us</h1>
                </div>
                
            </div> 
            
      </div>
    )
  }
  
  export default Hero