import Hero from './Hero'
import Contact from '../../components/Contact'
import GetIn from './GetInTouch'
import { Helmet } from 'react-helmet'

function ContactUs() {
  return (
    <div className=' bg-gray-200'>
       <Helmet>
        <title>Contacts</title>
        <meta name="description" content=" Emails us at info@mopawa.co.ke or call +254 708 999 666  " />
        <meta name="keywords" content="shared power bank, rental powerbank, mopawa, power bank" />
      </Helmet>
        <Hero/>
        <GetIn/>
        <Contact/>
    </div>
  )
}

export default ContactUs