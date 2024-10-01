import Hero from './Hero'
import Coming from '../../assets/images/coming.jpg'

function Joint() {
  return (
    <div>
        <Hero/>
        <div className=' h-[30vh] flex flex-col items-center justify-center'>
          <img src={Coming} alt="" className=' h-[20vh]' />
        </div>
    </div>
  )
}

export default Joint