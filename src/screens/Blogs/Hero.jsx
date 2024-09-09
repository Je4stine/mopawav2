
function Hero() {
    return (
      <div>
          <div className=' h-[50vh] w-[100vw] z-1 relative'>
              <div className=' h-[50vh] w-[100vw] z-1 absolute bg-black opacity-50'></div>
                  <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg" alt=' Hero section' className=' w-[100vw] h-[50vh] object-cover '/>
              <div className=" lg:pl-[15%]">
                  <h1 className=' absolute lg:top-[40%] top-[20%] text-white lg:text-6xl text-4xl ml-10 font-bold z-0'>Blogs<br/>
              </h1>
              </div>
              
              </div> 
      </div>
    )
  }
  
  export default Hero