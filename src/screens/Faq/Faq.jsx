import Hero from './Hero'
import FaqComponent from './FaqComponent'
import ContactUs from "./ContactUs"


function Faq() {
  const data =[
    {
      "id":1,
      "Question":"What is power bank sharing?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/08/sharing-power-buisness.jpg",
      "details":"Power bank sharing is a part of sharing economy. The power bank sharing business owner set up multiple power bank kiosks in several places. When people run out of their mobile phones or other electronic battery, they can simply go to the nearest kiosk, scan the QR code, and rent a power bank. Customers can take the power bank wherever they go while charging. When finished charging, they can return the power bank to the nearest kiosk"
    },
    {
      "id":2,
      "Question":"Do you provide OEM/ODM service?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/08/odm-oem.jpg",
      "details":"Yes, Mopawa is one of the most reliable shared power bank rental station manufacturers in the world. We provide one-stop solution for power bank sharing business. If you’re interested in this business, please email Mopawaofficial@gmai.com, or contact us our representatives through a submission, we’ll be in touch within 24 hours."
    },
    {
      "id":3,
      "Question":"What payment gateways do you support for the power bank rental?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/08/electronic-payment-systems.jpg",
      "details":" We’ve cooperated with 300+ clients from 50+ countries. All mainstream payment method is available, such as GoogePay, ApplePay, Credit Card, MasterCard, Visa, PayPal, Stripe, etc. You can confirm with us before launching the power bank rental business."
    },
    {
      "id":4,
      "Question":"Can I purchase a sample before mass order, and how long will the shipment take?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/08/sample.jpg",
      "details":"Yes, we can offer samples at a minimum price for your references. We can also produce samples according to your requirements, such as custom color and logo.The shipment usually takes 7-10 days after the sample was completed, depending on your area and local delivery service"
    },
    {
      "id":5,
      "Question":"What places are the best to distribute power bank stations?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/08/places.jpg",
      "details":"The portable charging station is perfect for restaurants, bars, nightclubs, cafes, stadiums, convention centers, hotels, hospitals, retail stores,cinema and anywhere there is a foot traffic."
    },
    {
      "id":6,
      "Question":"What revenue channels I can reach if I launch a shared power bank business?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/08/places.jpg",
      "details":"1. Rent Power Bank Revenue Power bank rental revenue is the major income for this shared business, it have the features of high frequency, small payment amount, easy to use 2. Advertising Revenue      You can charge for the ADs on the power bank station screen where there is stable traffic. 3. Users Buy Power Bank The rental service are able to switch into purchase action when the users can not give the power bank back in a certain time. 4. Software Popup Ad When users accumulate a certain number, you can expand you other business by poping up AD in your APP."
    },
    {
      "id":7,
      "Question":"What materials should I prepare for shared power bank customization?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/08/custom.jpg",
      "details":"1. A company should be registered locally.2. Apply for docking with local payment methods, such as Google Pay, Apple Pay, Paypal, Stripe, LinePay, etc.3. Provide the communication method that needs to be used so that we can match the corresponding IoT module. 4. Purchase a server, such as Amazon Cloud or Google Cloud. 5. Hardware customization and software customization function tables are provided."
    },
    {
      "id":8,
      "Question":" How long is the warranty period of the shared power bank?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/08/warranty.jpg",
      "details":"The warranty period for power banks is 6 months, and the warranty period for stations and other parts is 12 months, calculated from the date of shipment."
    },
    {
      "id":9,
      "Question":"How long does it take for the bulk production?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/09/mass-production.jpg",
      "details":"The mass production takes 20 to 35 working days after we confirmed our cooperation (depending on the quantity)."
    },
    {
      "id":10,
      "Question":"How long is the payback period of power bank sharing business?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/09/roi.jpg",
      "details":"It depends on the charging standard, launching scenarios, station quantity, advertising cooperation, traffic of local users/ visitors, etc. According to the feedback from our customers, it usually takes 6-12 months in Southeast Asia and Europe markets."
    },
    {
      "id":11,
      "Question":"Do you offer power bank rental business operation support?",
      "image":"https://chargeeight.com/wp-content/uploads/2022/10/guidance.jpg",
      "details":" Yes, apart from hardware manufacturing and software development, Mopawa also offers operational support to our clients. With years of shared power bank operation experience worldwide, our elite marketing team will guide our clients to grow up and dominate the domestic market step by step."
    },

  ]
  return (
    <div>
      <Hero/>
      <div className=' my-10'>
        <h1 className=' text-3xl font-bold text-center'>
        Know More About Sharing Power Bank Station and Mopawa
        </h1>
        <p className=' text-center mt-10'>
          Questions about sharing economy, power bank stations, application development, Mopawa company. Or you can contact us directly for further questions.
        </p>
      </div>
      <div className=' flex flex-col items-center'>
        {

          data.map((item)=>{
            return(
            <FaqComponent key={item.id} question={item.Question} details={item.details} image={item.image}/>
          )})
        }
  
      </div>
      <div className=' flex flex-col items-center justify-center'>
        <ContactUs/>
      </div>
  
    </div>
  )
}

export default Faq