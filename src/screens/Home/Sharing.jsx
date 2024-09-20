import one from '../../assets/images/331.jpg'
import mpesa from '../../assets/images/mpesa.jpg'


function Sharing() {
  return (
    <div className=" py-10">
        <div className=" flex flex-col items-center lg:px-[200px] px-10">
            <h1 className=" text-3xl font-bold mb-5 text-center">Sharing Power Bank Rental Station One-Stop-Solution Provider</h1>
            <p className=" text-center">Mopawa is a top phone charging station one-stop solution supplier in East Africa. Our services include shared power bank station manufacturing, power bank rental business operation, payment gateway integration, and management system development. Feel confident to contact us if you’re interested in the shared power bank rental business.</p>
        </div>

        <div className=" my-10 lg:flex lg:justify-evenly"> 
            <div className=" flex flex-col items-center px-20">
                <img src={one} alt="" className=" lg:w-[320px] lg:h-[200px] object-cover" />
                <h2 className=" my-5 font-bold text-xl">Charging Stations with Power Banks</h2>
                <p>Mopawa offers various types of power bank rental stations for different usage venues.</p>
            </div>
            <div className=" flex flex-col items-center px-20">
                <img src={mpesa} alt="" className=" lg:w-[320px] lg:h-[200px] object-cover"/>
                <h2 className=" my-5 font-bold text-xl">Payment gateaway intergration</h2>
                <p> We already have already integrated payment gateways for Ethio Telecom, Safaricom mpesa and Vodacom Tanzania </p>
            </div>
            <div className=" flex flex-col items-center px-20">
                <img src="https://chargeeight.com/wp-content/uploads/2022/11/Admin-Panel.jpg" alt="" className=" lg:w-[320px] lg:h-[200px] object-cover"/>
                <h2 className=" my-5 font-bold text-xl">Admin Panel</h2>
                <p>
                Partners can control their business easily with their fingertips, Mopawa offers lifetime support..</p>
            </div>
      
        </div>
    </div>
  )
}

export default Sharing