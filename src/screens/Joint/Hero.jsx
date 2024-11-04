import HeroVid from '../../assets/Videos/herovid.mp4'
import Stackable from '../../assets/images/0E4A7784.png'


function Hero() {
    return (
      <div>
          <div className=' lg:h-[70vh] h-[80vh] w-[100vw] z-1 relative'>
              <div className='  lg:h-[70vh] h-[80vh] w-[100vw] z-1 absolute bg-black opacity-50'></div>
                <video 
                        className="w-[100vw]  lg:h-[70vh] h-[80vh] object-cover" 
                        src={HeroVid} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    />
                <div className=" absolute top-[80px] w-[100vw]">
                <div className="flex lg:flex-row flex-col-reverse gap-5 items-center">
                        <div className="flex-1 text-center lg:text-left px-5">
                            <h1 className="text-white lg:text-6xl text-5xl font-bold animate-textIn mb-5 text-center">Plug into Profits with Mopawa!</h1>
                        </div>
                        
                        <div className="flex-1">
                        <img className="animate-zoom-pulse lg:h-[60vh] object-cover" src={Stackable} alt="" />
                        </div>
                    </div>
                                
                </div>
              </div> 
      </div>
    )
  }
  
  export default Hero