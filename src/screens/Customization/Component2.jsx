import { FaTrophy } from "react-icons/fa6";

function Component2() {
  return (
    <div className=" flex flex-col items-center lg:px-[200px] py-10">
        <div className=" flex lg:flex-row flex-col items-center">
            <div>
            <FaTrophy size={200}/>
            </div>

            <div className=" ml-10">
                <h1 className=" font-bold text-3xl mb-5">Mopawa Provides Customization Service to Entities Around Kenya and East Africa.</h1>
            <p>Mopawa has cooperated with 200+ sharing power bank brands in Kenya. The market has already proved it’s a great business model, and it is booming in many locations across the country. We’ve already served 15,0000+ customers and connected to the most popular payment methods. And we’re looking for partners to expand our local market.</p>
            </div>
        </div>
    </div>
  )
}

export default Component2