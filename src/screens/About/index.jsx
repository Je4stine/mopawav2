
function About() {
  

  return (
    <>
    <div className=' h-[50vh] w-[100vw] z-1 relative'>
        <div className=' h-[50vh] w-[100vw] z-1 absolute bg-black opacity-50'></div>
            <img src="https://chargeeight.com/wp-content/uploads/2024/04/%E5%9B%BE%E7%89%872-1.png" alt=' Hero section' className=' w-[100vw] h-[50vh] object-cover '/>
        <div className=" lg:pl-[15%]">
            <h1 className=' absolute lg:top-[40%] top-[20%] text-white lg:text-6xl text-4xl ml-10 font-bold z-0'>About Us<br/>
            <span className=' lg:text-2xl text-lg font-normal'>Mopawa - Best Sharing Power Bank Staion Manufacturer. Reliable Power Bank Rental Service Provider.</span></h1>
        </div>
       
    </div> 

    <div className=" bg-gray-200 lg:flex lg:justify-around lg:pl-[15%] py-10 lg:pr-[10%]">
          <div className=" p-5">
              <h1 className="lg:text-4xl font-bold mb-5">About Mopawa</h1>
              <p>
              ChargeEight is the global brand of Shenzhen Zhongdianhexin Technology Co., Ltd. One of the biggest shared power bank manufacturers. Established in 2014, our company is a high-tech company based on the Internet and IoT technology, industrial characteristics, ecological environment, and big data services. The company has been developed into a competitive high-tech enterprise of shared power bank stations integrating R & D, production, operation, sales, and service. We focus on the R & D and application of high-new technology and inspire consumers to bring new ways of technological life with wisdom and love.
              </p>
          </div>
         
          <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gQrFAFMuiYc?si=VDnxB3M0th5Fcfvb&amp;controls=0&amp;start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
    </>
  )
}

export default About