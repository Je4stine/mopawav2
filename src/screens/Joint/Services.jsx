
function Services() {
  return (
    <div className=" p-10 grid place-content-center bg-green-600">
        <h1 className=" text-4xl font-bold text-center my-5 text-white"> Mopawa provides;</h1>
        <div className=" flex items-center mb-10 ">
            <div>
                <div className=" rounded-full bg-white mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold">01</div>
            </div>
            <div >
                <h1 className=" font-bold text-lg mb-5 text-white">A web portal for monitoring Usage and Revenue</h1>
                <p className="text-white"> 
                   You will be able to view the usage statistics and revenue in real time from the web portal 
                </p>
            </div>
        </div>

        <div className=" flex items-center mb-10 ">
            <div>
                <div className=" rounded-full bg-white mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold">02</div>
            </div>
            <div>
                <h1 className=" font-bold text-lg mb-5 text-white">Calculate the Agency commission at the rate of 70% on revenue (less Mpesa Transaction charged at 5/=)</h1>
                {/* <p className="text-white"> We will replace non-functional and lost power banks for free
                </p> */}
            </div>
        </div>

        <div className=" flex items-center mb-10">
            <div>
                <div className=" rounded-full bg-white mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold">03</div>
            </div>
            <div>
                <h1 className=" font-bold text-lg mb-5 text-white">Refill power banks lost during customer's usage (based on the system record)</h1>
                {/* <p className="text-white">
                    If you experience any issues with the power bank station, you can directly contact us and we will provide any help needed
                </p> */}
            </div>
        </div>

        <div className=" flex items-center">
            <div>
                <div className=" rounded-full bg-white mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold">04</div>
            </div>
            <div>
                <h1 className=" font-bold text-lg mb-5 text-white">Scheduled maintainance for partners,during which the technician will change the dispenser parts and powerbanks for free</h1>
                {/* <p className="text-white">
                    If you experience any issues with the power bank station, you can directly contact us and we will provide any help needed
                </p> */}
            </div>
        </div>
    </div>
  )
}

export default Services