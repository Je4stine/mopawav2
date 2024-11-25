
import { FaHandshake } from "react-icons/fa";
import Dollar1 from '../../assets/images/30percent.png'
import Dollar2 from '../../assets/images/moreusd.png'
import Minimumrisk from '../../assets/images/minimumrisk.png'
import Mopawabg from '../../assets/images/mopawabg.jpg'


function Payment() {
  return (
    <div className="relative p-10 rounded-t-xl w-full">
    
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Mopawabg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,         
          zIndex: -1,            
        }}
      ></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold">
          8 slot cabinet needs payment of Ksh. 30,000
        </h1>

        <div className="my-5 lg:flex items-center">
          <h1 className="text-xl mr-10 font-bold">Include:</h1>

          <div className="flex items-center ml-5">
            <h1 className="lg:text-xl">Service fee - Ksh. 4,000,</h1>
          </div>
          <div className="flex items-center ml-5">
            <h1 className="lg:text-xl">Refundable deposit fee - Ksh. 26,000</h1>
          </div>
          <div className="flex items-center mt-5 lg:mt-0">
            <img
              src={Minimumrisk}
              alt="Minimum risk"
              className="h-[200px] animate-zoom-pulse"
            />
          </div>
        </div>
      </div>

      <div className="my-10 flex justify-evenly w-full items-center">
        <div className="flex flex-col items-center">
          <div className="lg:h-[250px] lg:w-[250px] rounded-full flex items-center justify-center">
            <img
              src={Dollar2}
              alt="70% partner"
              className="lg:h-[300px] h-[80px] object-cover"
            />
          </div>
          <h1 className="text-xl mt-3 font-bold">70% Partner</h1>
        </div>

        <div className="lg:h-[150px] lg:w-[150px] rounded-full flex flex-col items-center justify-center">
          <FaHandshake color="black" size={50} className="lg:hidden" />
          <FaHandshake color="black" size={200} className="hidden lg:inline-block" />
          <h1 className="text-xl font-bold mt-3">Revenue share</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="lg:h-[250px] lg:w-[250px] rounded-full flex items-center justify-center">
            <img
              src={Dollar1}
              alt="30% Mopawa"
              className="lg:h-[200px] h-[50px]"
            />
          </div>
          <h1 className="text-xl font-bold mt-3">30% Mopawa</h1>
        </div>
      </div>
    </div>
  );
}

export default Payment;