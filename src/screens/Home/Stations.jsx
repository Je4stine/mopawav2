
function Stations() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat lg:flex lg:flex-row flex-col items-center justify-center p-10 lg:px-[100px]" style={{ backgroundImage: 'url("https://cdn.mos.cms.futurecdn.net/UzXq5N7oitnQ7H3SsXXyPf-650-80.jpg.webp")', backgroundAttachment: 'fixed' }}>
         <div className="absolute inset-0 bg-blue-950 opacity-80 z-0"></div>
        <div className="relative z-10">
            <h1 className=" text-3xl font-bold mb-5 text-white">Various Station Designs Applied In Different Scenarios.</h1>
            <p className=" text-white">With years of experience in shared power bank station manufacturing and operation, ChargeEight has created 4/6/8/12/16/24/48/96/120 slots shared power bank station, getting 34 patents and copyrights. We are committed to providing the best product and services to our clients.
            Mopawa offers various power bank stations, including small desktop cabinets, stackable power bank stations, vertical advertising stations, and digital signage rental stations. We can also add many features based on the client’s needs. Such as POS systems, NFC systems, lightbox displays, fire extinguishers, etc</p>
            <div className=" flex my-10">
                <div className=" mr-10 px-5 py-3 bg-yellow-300 rounded-md">
                    <p className=" text-white font-bold">View More</p>
                </div>
        
                <div className=" mr-10 px-5 py-3 border border-white rounded-md">
                    <p className=" text-white font-bold">Contact Us</p>
                </div>
            </div>
        </div>
        <div className=" z-10">
            <img src="https://www.mopawa.co.ke/assets/mopawa1-BeV-FBvZ.png" alt="" />
        </div>
    </div>
  )
}

export default Stations