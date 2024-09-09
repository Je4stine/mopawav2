import Hero from './Hero'
import ProductsCard from './ProductsCard'
import Eight from '../../assets/images/8slot.png'
import Twelve from "../../assets/images/12slot.png"
import Stand from '../../assets/images/Stand.png'
import Powerbank from '../../assets/images/Powerbanks.png'
import Contact from '../../components/Contact'


function Products() {
  return (
    <div>
      <Hero/>
      <div className=' grid lg:grid-cols-2 place-items-center lg:px-[200px] py-5 bg-gray-100'>
        <ProductsCard name="8 Slot Desktop PowerBank station" image={Eight}/>
        <ProductsCard name="12 Slot Desktop Power Bank Station" image={Twelve}/>
        <ProductsCard name="Stand" image={Stand}/>
        <ProductsCard name="Power banks" image={Powerbank}/>
      </div>
    <Contact/>
    </div>
  )
}

export default Products