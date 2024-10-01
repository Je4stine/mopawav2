import Hero from './Hero'
import Standmg from '../../assets/images/Stand.png'


function Stand() {
  return (
    <div>
      <Hero/>
      <div className=' min-h-[20vh] flex flex-col items-center justify-center'> 
        <img src={Standmg} alt="stand" />
      </div>
    </div>
  )
}

export default Stand