import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from '../../assets/images/avatar.png'


function Carouselq() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className=" p-10 bg-black">
        <Carousel responsive={responsive} infinite ={true} autoPlay ={true} autoPlaySpeed={8000} swipeable={false}>  
            <div className=" flex flex-col items-center justify-center bg-white shadow-md lg:w-[30vw] lg:h-[30vh] p-10">
                <img className=" h-[150px]" src={Avatar} alt="avatar" />
                <h1 className=" font-bold text-center">Mr. So and So</h1>
                <p className=" text-center">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non hic voluptatum rem deleniti repellendus dignissimos cumque reprehenderit doloremque vitae quas ullam ea, sed ipsum quam magnam modi consequuntur quis?"
                </p>
            </div>
            <div className=" flex flex-col items-center justify-center bg-white shadow-md lg:w-[30vw] lg:h-[30vh] ">
                <img className=" h-[150px]" src={Avatar} alt="avatar" />
                <h1 className=" font-bold text-center">Mr. So and So</h1>
                <p className=" text-center">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non hic voluptatum rem deleniti repellendus dignissimos cumque reprehenderit doloremque vitae quas ullam ea, sed ipsum quam magnam modi consequuntur quis?"
                </p>
            </div>

            <div className=" flex flex-col items-center justify-center bg-white shadow-md lg:w-[30vw] lg:h-[30vh] ">
                <img className=" h-[150px]" src={Avatar} alt="avatar" />
                <h1 className=" font-bold text-center">Mr. So and So</h1>
                <p className=" text-center">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non hic voluptatum rem deleniti repellendus dignissimos cumque reprehenderit doloremque vitae quas ullam ea, sed ipsum quam magnam modi consequuntur quis?"
                </p>
            </div>

            
        </Carousel>
    </div>
  )
}

export default Carouselq