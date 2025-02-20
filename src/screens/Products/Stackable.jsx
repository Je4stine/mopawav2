import Eight from "../../assets/images/powerbankdispenser.png";

function Stackable() {
  return (
    <div>
      <div className=" h-[80px] bg-black"></div>
      <div className=" min-h-[20vh]">
        <div className=" lg:flex items-center justify-center p-4">
          <img src={Eight} alt="" className=" flex flex-1 lg:w-[100px] " />
          <div className=" flex flex-col flex-1">
            <h1 className=" font-bold text-3xl mb-5">
              Stackable Desktop Station
            </h1>
            <p>
              Applicable to: catering, bar, KTV, hotel, guide desk and other
              small and medium-sized scenes. You can choose one layer(8 slots of
              power banks) or two layers (16 slots of power bank) flexible
              depending on the customer traffic.
            </p>
            {/* <ul className=' list-disc p-10'>
                
                    <li>4G Stable signal/Imported ST Micro chip</li>
                    <li>Intelligent voice service prompts</li>
                    <li>Safe and stable hard material PCB antennas</li>
                    <li>VO grade fire-proof ABS + PC material</li>
                    <li>Anti-theft clip with patented deceleration motor</li>
                    <li>Wireless and portable models available</li>
                    <li>12 slots power bank supply</li>
                    <li>Customized logo, color, and pattern</li>
                </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stackable;
