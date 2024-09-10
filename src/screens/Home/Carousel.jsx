import { Carousel } from "flowbite-react";
import Slide1 from '../../assets/images/chargeeight-shared-powerbabnk-station.jpg'

export function CarouselComponent() {
  return (
    <div className="h-[70vh]">
      <Carousel>
        <div className=" h-full relative">
            <div className=" absolute h-full w-full bg-black opacity-50"></div>
            <img src={Slide1} alt="" className=" h-full w-full object-cover"/>
            <div className=" absolute h-full w-full top-[10%] lg:ml-[19%] ml-[8%]">

                <div className=" my-10">
                    <div className="flex flex-row">
                        <div className=" w-[6px] bg-yellow-400"></div>
                        <div><p className=" text-white ml-3">Shared powerbank rental station</p></div>
                    </div>

                </div>
                <h1 className=" text-white lg:text-7xl text-4xl font-bold">Seize The<br/> Viewable<br/> future<br/></h1>
                <p className="text-white lg:text-2xl mt-10">Powerbank sharing is the future of outdoor charging solution,<br/> join us to dive in the potential market</p>

                <div className=" mt-10 flex flex-row">
                    <div className="p-5 bg-yellow-400 rounded-sm pl-10">
                        <p className=" text-white">KNOW MORE</p>
                    </div>
                    <div className=" w-[20px]"></div>
                    <div className="p-5 border border-white rounded-sm">
                        <p className="text-white">CONTACT US</p>
                    </div>
                </div>
            </div>
        </div>


        <div className=" h-full relative">
            <div className=" absolute h-full w-full bg-black opacity-50"></div>
            <img src="https://australiangrants.org/wp-content/webp-express/webp-images/uploads/2021/11/joint-venture-entrepreneurs.jpg.webp" alt="" className=" h-full w-full object-cover"/>
            <div className=" absolute h-full w-full top-[10%] lg:ml-[19%] ml-[8%]">

                <div className=" my-10">
                    <div className="flex flex-row">
                        <div className=" w-[6px] bg-yellow-400"></div>
                        <div><p className=" text-white ml-3">Shared powerbank rental station</p></div>
                    </div>

                </div>
                <h1 className=" text-white lg:text-7xl text-4xl font-bold">Joint<br/> Entrepreneurship</h1>
                <p className="text-white lg:text-2xl mt-10">Join us in making charging easy<br/> join us to dive in the potential market</p>

                <div className=" mt-10 flex flex-row">
                    <div className="p-5 bg-yellow-400 rounded-sm pl-10">
                        <p className=" text-white">KNOW MORE</p>
                    </div>
                    <div className=" w-[20px]"></div>

                </div>
            </div>
        </div>
    
      </Carousel>
    </div>
  );
}