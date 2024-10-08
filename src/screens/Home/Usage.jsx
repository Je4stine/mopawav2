import Operation from '../../assets/images/operation2.jpg'
import Station from '../../assets/images/station1.jpg'

function Usage() {
  return (
    <>
    <div className=" lg:flex">
        <div className=" bg-gray-200 p-5 flex flex-col flex-1 items-center justify-center">
            <h1 className=" text-3xl font-bold my-5">Ultra Easy to Use</h1>
            <p>
        A shared power bank rental station is the most convenient way to charge your phone when you’re out nowadays. All you need to do is make a payment via mpesa using the paybill on the machine, then get the power bank and start charging. You’re free to go anywhere instead of sticking around the socket while charging.

        When you finish charging, return the power bank to the nearest charging station; You don’t have to return to where you borrowed the power bank.</p>
        </div>

        <div className=" flex flex-col flex-grow flex-1">
          <img src={Station} alt="" className=" object-cover" />
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
            <a href='/contacts' className=' px-2 py-3 bg-yellow-400 rounded-md mt-10 hover:cursor-pointer'>
              <p className='text-white font-bold'>Contact Us</p>
            </a>
        </div>

    </div>
    </>
  )
}

export default Usage