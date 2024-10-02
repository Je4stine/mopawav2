import Hero from './Hero'
import Component2 from './Component2'
import Payment from './Payment'
import Success from './Success'
import Why from './Why'
import Contact from '../../components/Contact'
import { Helmet } from 'react-helmet'

function Cutomization() {
  return (
    <div>
       <Helmet>
        <title>Brand Customization </title>
        <meta name="description" content="Get a custom shared rental station from us  " />
        <meta name="keywords" content="shared power bank, rental powerbank, mopawa, power bank" />
      </Helmet>
      <Hero/>
      <Component2/>
      <Payment/>
      <Success/>
      <Why/>
      <Contact/>
    </div>
  )
}

export default Cutomization