import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ethio from '../../assets/images/house.jpg'
import Vodacom from '../../assets/images/quiver.png'
import Harbanos from '../../assets/images/harbanos.png'
import Alfakhere from '../../assets/images/alfakhere.png'
import Skaypark from '../../assets/images/skypark.png'
import Paris from '../../assets/images/paris.png'
import Malo from '../../assets/images/malomalo.jpg'


function Outlets() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className=" p-10 bg-black">
        <h1 className=" text-3xl text-center font-bold my-5 text-white">Our partners</h1>
        <Carousel responsive={responsive} infinite ={true} autoPlay ={true} autoPlaySpeed={2000}>  
            <div className=" flex flex-col items-center justify-center">
                <img src={Harbanos} alt="" className=" lg:object-cover lg:h-[200px]" />
            </div>
             <div className=" flex flex-col items-center justify-center">
            <img src={Vodacom} alt="" className=" lg:object-cover lg:h-[200px]"/>

            </div>
            
            <div className=" flex flex-col items-center justify-center">
            <img src={Ethio} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Alfakhere} alt="" className="  lg:h-[150px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Skaypark} alt="" className="  lg:h-[150px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Paris} alt="" className="  lg:h-[150px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Malo} alt="" className="  lg:h-[150px] lg:object-cover mt-10"/>

            </div>
           
        </Carousel>
    </div>
  )
}

export default Outlets