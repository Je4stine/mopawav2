import Stackable from '../../assets/images/powerbanks_lq.png'
import './Hero.css'


function Hero() {
  return (
      <div>
          <div className='lg:h-[70vh] h-[80vh] w-[100vw] z-1 relative'>
              <div className='lg:h-[70vh] h-[80vh] w-[100vw] z-1 absolute bg-gradient-to-r from-black'></div>
              
          
              <img 
                  src="https://blueandgreentomorrow.com/wp-content/uploads/2023/04/SFDR.jpg.webp" 
                  alt="piggy bank hero image"  
                  className="w-[100vw] lg:h-[70vh] h-[80vh] object-cover"
              />

              <div className="absolute top-[80px] w-[100vw]">
                  <div className="flex lg:flex-row flex-col-reverse gap-5 items-center">
                      
                      {/* Text Content */}
                      <div className="flex-1 text-center lg:text-left px-5 animate-slide-left lg:ml-10">
                          <h1 className="text-white lg:text-6xl text-5xl font-bold mb-5">
                              Plug into Profits<br/> with Mopawa!
                          </h1>
                      </div>
                      
                      {/* Stackable Image */}
                      <div className="flex-1 animate-slide-right">
                          <img 
                              className="lg:h-[600px] md:h-[500px] h-[400px] object-cover" 
                              src={Stackable} 
                              alt="Stackable Image" 
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

  
  export default Hero