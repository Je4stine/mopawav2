import Bat2 from '../../assets/images/Bat.png'

function Bat() {
  return (
    <div className=" bg-green-600 p-5">
        <h1 className=" text-center text-white font-bold text-3xl">Smart Charging Chip - Polymer Battery</h1>
        <p className=" text-white my-5 text-center">
            5000mAh actual capacity, ceramic soft-pack shell, physical insulation, pressure resistant and explosion proof, ensuring charging safety!
        </p>
        <div className=' flex flex-col items-center'> 
            <div className="overflow-hidden rounded-xl lg:h-[500px] mt-10">
                <img src={Bat2} alt="Battery inside" className="object-cover w-full h-full" />
            </div>        
        </div>
    </div>
  )
}

export default Bat