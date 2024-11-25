import "./Cards.css";
import Inquiry from "../../assets/images/inquiry.png";
import Payment from "../../assets/images/payment-method.png";
import Delivery from "../../assets/images/delivery-man.png";

function Cards() {
  return (
    <div className=" my-10 flex flex-col items-center">
      <h1 className=" font-bold lg:text-4xl text-xl text-center my-10">
        {" "}
        To earn money, just need{" "}
        <span className=" lg:text-[100px] text-[50px]">3</span> steps
      </h1>
      <ol>
        <li style={{ "--accent-color": "#FF6F00" }}>
          <div className="grid place-content-center mb-5">
            <img src={Inquiry} alt="Inquiry" className=" h-[100px]" />
          </div>
          <div className="title">Make inquiry</div>
          <div className="text-center">Call 0708 999 666</div>
          <div className="text-center">Or email info@mopawa.co.ke</div>
        </li>
        <li style={{ "--accent-color": "#008DC2" }}>
          <div className="grid place-content-center mb-5">
            <img src={Payment} alt="Inquiry" className=" h-[100px]" />
          </div>
          <div className="title">Make payment</div>
          <div className="text-center mt-3">Make a payment of Ksh. 30,000</div>
        </li>
        <li style={{ "--accent-color": "#0B456A" }}>
          <div className="grid place-content-center mb-5">
            <img src={Delivery} alt="Inquiry" className=" h-[100px]" />
          </div>
          <div className="title">Get your cabinet and open account</div>
          <div className="descr"></div>
        </li>
      </ol>
    </div>
  );
}

export default Cards;
