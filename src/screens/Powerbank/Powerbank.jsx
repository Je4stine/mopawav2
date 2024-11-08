import Hero from './Hero'
import Powerbanks from '../../assets/images/newpowerbank.png'


function Powerbank() {
  return (
    <div>
        <Hero/>
        <div className=' min-h-[20vh] flex flex-col items-center justify-center'> 
          <img src={Powerbanks} alt="stand" className=' lg:h-[50vh]' />
        </div>
        <p>Our power banks </p>
    </div>
  )
}

export default Powerbank