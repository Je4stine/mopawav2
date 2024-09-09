
function Venue() {
  return (
    <div>
        <h1 className=" py-10 text-3xl font-bold text-center">Highly Used Venues for Power Bank Rental Stations</h1>
        <div className=" grid lg:grid-cols-4">
            <div className=" relative group">
                <img  src="https://chargeeight.com/wp-content/uploads/2022/08/powerbank-sharing-venue-restuarant.jpg" alt="" />
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-80"></div>
                <div className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className=" text-black font-bold text-xl">
                        Resturants
                    </p>
                </div>
            </div>

            <div className=" relative group">
                <img src="https://chargeeight.com/wp-content/uploads/2022/08/powerbank-sharing-venue-station.jpg" alt="" />
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-80"></div>
                    <div className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <p className=" text-black font-bold text-xl">
                            Station
                        </p>
                    </div>
            </div>

            <div className=" relative group">
                <img src="https://chargeeight.com/wp-content/uploads/2022/08/powerbank-sharing-venue-airport.jpg" alt="" />
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-80"></div>
                    <div className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <p className=" text-black font-bold text-xl">
                            Airport
                        </p>
                    </div>
            </div>

            <div className=" relative group">
                <img src="https://chargeeight.com/wp-content/uploads/2022/08/powerbank-sharing-venue-amusementpark.jpg" alt="" />
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-80"></div>
                    <div className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <p className=" text-black font-bold text-xl">
                            Amusement park
                        </p>
                    </div>
            </div>
        </div>
        <div className=" grid lg:grid-cols-4">
            <div className=" relative group">
                <img src="https://chargeeight.com/wp-content/uploads/2022/08/powerbank-sharing-venue-cafe.jpg" alt="" />
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-80"></div>
                    <div className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <p className=" text-black font-bold text-xl">
                            Cafe
                        </p>
                    </div>
            </div>

            <div className=" relative group">
                <img src="https://chargeeight.com/wp-content/uploads/2022/08/powerbank-sharing-venue-campus.jpg" alt="" />
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-80"></div>
                    <div className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <p className=" text-black font-bold text-xl">
                            Campus
                        </p>
                    </div>
            </div>

            <div className=" relative group"><img src="https://chargeeight.com/wp-content/uploads/2022/08/powerbank-sharing-venue-concert.jpg" alt="" />
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-80"></div>
                    <div className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <p className=" text-black font-bold text-xl">
                            Concert
                        </p>
                    </div>
            </div>
            <div className=" relative group"><img src="https://chargeeight.com/wp-content/uploads/2022/08/powerbank-sharing-venue-mall.jpg" alt="" />
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-80"></div>
                    <div className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <p className=" text-black font-bold text-xl">
                            Shopping mall
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Venue 