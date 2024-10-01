import Hero from './Hero'
import Powerbanks from '../../assets/images/337.png'

function Station() {
  return (
    <div>
      <Hero/>
      <div className=' min-h-[20vh] flex flex-col items-center justify-center'> 
        <img src={Powerbanks} alt="stand" />
      </div>
    </div>
  )
}

export default Station