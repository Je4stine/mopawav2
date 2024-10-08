import Hero from './Hero'
import DepositePolicy from './DepositePolicy'

function Joint() {
  return (
    <div>
        <Hero/>
        <div className=' min-h-[30vh] flex flex-col items-center justify-center'>
          <DepositePolicy/>
        </div>
    </div>
  )
}

export default Joint