import { Carousel } from "flowbite-react";
import Slide1 from '../../assets/images/chargeeight-shared-powerbabnk-station.jpg'

export function CarouselComponent() {
  return (
    <div className="h-[70vh]">
      <Carousel>
        <div className=" h-full relative">
            <div className=" absolute h-full w-full bg-black opacity-50"></div>
            <img src={Slide1} alt="" className=" h-full w-full object-cover"/>
            <div className=" absolute h-full w-full top-[25%] lg:ml-[19%]">
                <h1 className=" text-white lg:text-7xl text-6xl font-bold">Seize The<br/> Viewable<br/> future<br/></h1>
                <p className="text-white lg:text-2xl mt-10">Powerbank sharing is the future of outdoor charging solution,<br/> join us to dive in the potential market</p>

                <div className=" mt-10 flex">
                    <div className="p-5 bg-yellow-400 rounded-sm pl-10">
                        <p className=" text-white">KNOW MORE</p>
                    </div>
                    <div className="p-5 border border-white rounded-sm">
                        <p className="text-white">CONTACT US</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
    
      </Carousel>
    </div>
  );
}