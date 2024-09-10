import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Payment() {
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
    <div className=" p-10 bg-gray-100">
        <h1 className=" text-3xl text-center font-bold my-5">Supported payment API</h1>
        <Carousel responsive={responsive} infinite ={true} autoPlay ={true} autoPlaySpeed={2000}>  
            <div className=" flex flex-col items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg" alt="" className=" w-[200px] h-[200px]" />
            </div>
            {/* <div className=" flex flex-col items-center justify-center">
            <img src="https://airtel.africa/assets/images/logo/airtel-logo.png" alt="" className=" w-[200px] h-[200px]" />
            </div> */}
            <div className=" flex flex-col items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MTN_Logo.svg/200px-MTN_Logo.svg.png?20190223171412" alt="" className=" w-[300px] h-[200px]"/>

            </div>
            <div className=" flex flex-col items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg" alt="" className=" w-[300px] h-[200px]"/>

            </div>
        </Carousel>
    </div>
  )
}

export default Payment