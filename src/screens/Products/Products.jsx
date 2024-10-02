import Hero from './Hero'
import ProductsCard from './ProductsCard'
import Eight from '../../assets/images/8slot.png'
import Twelve from "../../assets/images/12slot.png"
import Stand from '../../assets/images/Stand.png'
import Powerbank from '../../assets/images/Powerbanks.png'
import Contact from '../../components/Contact'
import Stacks from '../../assets/images/stackable.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'


function Products() {

  return (
    <div>
       <Helmet>
        <title>Our Products </title>
        <meta name="description" content="A list of all our products and services  " />
        <meta name="keywords" content="shared power bank, rental powerbank, mopawa, power bank" />
      </Helmet>
      <Hero/>
      <div className=' grid lg:grid-cols-2 place-items-center lg:px-[200px] py-5 bg-gray-100'>
        <ProductsCard name="8 Slot Desktop Power Bank station" image={Eight} goToDetails="/eightslot"/>
        <ProductsCard name="12 Slot Desktop Power Bank Station" image={Twelve} goToDetails="/twelveslot"/>
        <ProductsCard name="Stackable Power bank Station" image={Stacks} goToDetails="/stackable"/>
        <ProductsCard name="Power bank Station Stand" image={Stand}/>
        <ProductsCard name="Power banks" image={Powerbank}/>
      </div>
    <Contact/>
    </div>
  )
}

export default Products