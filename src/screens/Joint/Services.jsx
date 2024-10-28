
function Services() {
  return (
    <div className=" p-10 grid place-content-center">
        <div className=" flex items-center mb-10 ">
            <div>
                <div className=" rounded-full bg-green-600 mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold text-white">01</div>
            </div>
            <div >
                <h1 className=" font-bold text-lg mb-5">One-on-one exclusive after sales customer service</h1>
                <p>After purchase, our dedicated customer services agents will provide after sales service 
                    on demand.
                </p>
            </div>
        </div>

        <div className=" flex items-center mb-10 ">
            <div>
                <div className=" rounded-full bg-green-600 mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold text-white">02</div>
            </div>
            <div>
                <h1 className=" font-bold text-lg mb-5">Free power bank replacement services</h1>
                <p> We will replace non-functional and lost power banks for free
                </p>
            </div>
        </div>

        <div className=" flex items-center">
            <div>
                <div className=" rounded-full bg-green-600 mr-5 h-[80px] w-[80px] flex items-center justify-center text-4xl font-bold text-white">03</div>
            </div>
            <div>
                <h1 className=" font-bold text-lg mb-5">Lifetime warranty for cabinet + 2 years warranty for power banks</h1>
                <p>
                    If you experience any issues with the power bank station, you can directly contact us and we will provide any help needed
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services