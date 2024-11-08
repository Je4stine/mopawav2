import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ethio from '../../assets/images/house.jpg'
import Vodacom from '../../assets/images/quiver.png'
import Harbanos from '../../assets/images/harbanos.png'
import Alfakhere from '../../assets/images/alfakhere.png'
import Skaypark from '../../assets/images/skypark.png'
import Paris from '../../assets/images/paris.png'
import Malo from '../../assets/images/malomalo.jpg'
import Covo from '../../assets/images/covo.png'
import Art from '../../assets/images/artclub.png'
import Zae from '../../assets/images/Zaetoon.png'
import Ox from '../../assets/images/ox.png'
import Labaita from '../../assets/images/labaita.png'
import Ashaki from '../../assets/images/ashaki.png'
import Castle from '../../assets/images/castle.png'
import Barxo from '../../assets/images/barox.png'
import Amazon from '../../assets/images/amazon.png'
import Mark from '../../assets/images/mark.png'
import Tunnel from '../../assets/images/tunnel.png'
import Arena from '../../assets/images/arena.png'
import Hb from '../../assets/images/hb.png'
import Switch from '../../assets/images/switch.png'
import Fogo from '../../assets/images/fogo.png'


//Can be done better
function Outlets() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
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
            <img src={Malo} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Covo} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Art} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Zae} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Ox} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Labaita} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Ashaki} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Castle} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Barxo} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Amazon} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

            <div className=" flex flex-col items-center justify-center">
            <img src={Mark} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

             <div className=" flex flex-col items-center justify-center">
            <img src={Tunnel} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

             <div className=" flex flex-col items-center justify-center">
            <img src={Arena} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

             <div className=" flex flex-col items-center justify-center">
            <img src={Hb} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

             <div className=" flex flex-col items-center justify-center">
            <img src={Switch} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>

             <div className=" flex flex-col items-center justify-center">
            <img src={Fogo} alt="" className="  lg:h-[100px] lg:object-cover mt-10"/>

            </div>
           
        </Carousel>
    </div>
  )
}

export default Outlets