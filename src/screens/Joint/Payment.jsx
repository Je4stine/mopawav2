import Mpesa from '../../assets/images/mpesa.png'

function Payment() {
  return (
    <div className="bg-green-600 flex justify-between">
        <div className=' flex items-center ml-10'>
            <h1 className=' flex-1 font-bold text-white text-2xl'>
                Get paid via mpesa
            </h1>
        </div>
        <img src={Mpesa} alt="mpesa message" className=' h-[400px] flex-1 object-contain'/>    
    </div>
  )
}

export default Payment