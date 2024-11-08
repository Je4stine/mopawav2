import Hero from './Hero'
import Standmg from '../../assets/images/Stand.png'


function Stand() {
  return (
    <div>
      <Hero/>
      <div className=' min-h-[20vh] flex flex-col items-center justify-center'> 
        <img src={Standmg} alt="stand" className=' lg:h-[40vh]'/>
      </div>
      <p className=' text-xl text-center my-5'>We provide branded stands that can be used to advertise the product and to display the desktop stations</p>
    </div>
  )
}

export default Stand