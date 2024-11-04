import Eight from '../../assets/images/8slot.png'

function TrialPeriod() {
  return (
    <div className=" p-10">

<div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 items-center">
        
        <div>
          <img src={Eight} alt="stackable" className=' h-[300px] object-cover'/>
        </div>
    
  
        <div>
              <div className="flex mb-5 items-center">
                      <div className="flex-shrink-0 w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
                          <i className="fas fa-check text-primary text-2xl text-green-500"></i>
                      </div>
                      <div className="pl-3">
                          <h5 className="text-lg font-semibold">Get you payout every month</h5>
                      </div>
                  </div>
  
                  <div className="flex mb-5 items-center">
                      <div className="flex-shrink-0 w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
                          <i className="fas fa-check text-primary text-2xl text-green-500"></i>
                      </div>
                      <div className="pl-3">
                          <h5 className="text-lg font-semibold">Buy once, get a parmanent 100% profit</h5>
                      </div>
                </div>
  
                <div className="flex mb-5 items-center">
                    <div className="flex-shrink-0 w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-primary text-2xl text-green-500"></i>
                    </div>
                    <div className="pl-3">
                        <h5 className="text-lg font-semibold">Lifetime after sales services and support</h5>
                    </div>
                </div>
  
                <div className="flex mb-5 items-center">
                    <div className="flex-shrink-0 w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-primary text-2xl text-green-500"></i>
                    </div>
                    <div className="pl-3">
                        <h5 className="text-lg font-semibold">Guarantee cashback</h5>
                    </div>
                </div>
              </div>
          </div>


        <h1 className=" text-3xl font-bold text-center mb-10">
        Solemn Commitement
        </h1>
        <div className=" flex justify-center">
            <h2 className=" text-white px-4 py-2 bg-green-600 rounded-xl">
                365-day trial 
            </h2>
        </div>

        <div className=" flex my-10">
            <div className=" flex-1 flex flex-col items-center border-r-2 border-black border-t-0 border-b-0 border-l-0">
                <h1 className=" font-bold text-xl mb-2">Try Out</h1>
                <p className=" text-center"> Purchase a Box from Us,<br/> then try it out from a year</p>

                {/* <div className=" my-5 flex flex-col items-center">
                    <h1 className=" font-bold text-xl mb-2">Try Out</h1>
                    <p className=" text-center"> Purchase a Box from Us,<br/> then try it out from a year</p>
                </div> */}
            </div>
            <div className=" flex-1 flex flex-col items-center"> 
                <h1 className=" font-bold text-xl mb-2">Return</h1>
                <p className=" text-center"> If the business does not work<br/> out for you after 365 days,<br/> return the box and get a full refund</p>
            </div>
        </div>
    </div>
  )
}

export default TrialPeriod