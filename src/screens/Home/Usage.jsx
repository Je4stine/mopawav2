import Operation from '../../assets/images/operation.jpg'

function Usage() {
  return (
    <>
    <div className=" lg:flex">
        <div className=" bg-gray-200 p-5 flex flex-col flex-1 items-center justify-center">
            <h1 className=" text-3xl font-bold my-5">Ultra Easy to Use</h1>
            <p>
        A shared power bank rental station is the most convenient way to charge your phone when you’re out nowadays. All you need to do is scan the code on the machine, then get the power bank and start charging. You’re free to go anywhere instead of sticking around the socket while charging.

        When you finish charging, return the power bank to the nearest kiosk on your app; You don’t have to return to where you borrowed the power bank.</p>
        </div>

        <div className=" flex flex-col flex-grow flex-1">
          <img src="http://www.zhongdianhexin.com/wp-content/uploads/2023/05/2023052401525872.png" alt="" className=" object-cover" />
        </div>
    </div>

    <div className=" flex flex-col-reverse lg:flex-row">
      
        <div className=" flex flex-col flex-grow flex-1">
          <img src={Operation} alt="" className=" object-cover" />
        </div>

        <div className=" bg-gray-200 p-5 flex flex-col flex-1 items-center justify-center">
            <h1 className=" text-3xl font-bold my-5">Drive more customers to the business</h1>
            <p>
            Businesses must offer their location on the charge application so customers can find them. When customers search for power bank rental stations to borrow or return a power bank, this greatly increases the probability of a customer visiting the business with a charging device. And it could increase the dwell time in their store while charging.</p>
            <div className=' px-2 py-3 bg-yellow-300 rounded-md mt-10'>
              <p className='text-white font-bold'>Contact Us</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default Usage