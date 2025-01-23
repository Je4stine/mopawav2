import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import "./Warranty.css";

function Warranty() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selected, setSelected] = useState(1);
  const [claimNumber, setClaimNumber] = useState("");
  const [claimSerialNumber, setClaimSerialNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTabs = (tab) => {
    setSuccessMessage("");
    setErrorMessage("");
    setSelected(tab);
  };

  const handleClaim = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);
    try {
      const response = await axios.post(
        "https://warranty.mopawa.co.ke/getWarrantySms",
        {
          phoneNumber: claimNumber,
          serialNumber: claimSerialNumber,
        }
      );
      setSuccessMessage("SMS sent successfully!");
      setClaimNumber("");
      setClaimSerialNumber("");
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      setSuccessMessage("");
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://warranty.mopawa.co.ke/register",
        {
          phone_number: phoneNumber,
          serial_number: serialNumber,
        }
      );
      setSuccessMessage("Warranty registered successfully!");
      setPhoneNumber("");
      setSerialNumber("");
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      setSuccessMessage("");
      setLoading(false);
    }
  };
  return (
    <div>
      <div className=" h-[50vh] w-[100vw] z-1 relative">
        <div className=" h-[50vh] w-[100vw] z-1 absolute bg-black opacity-40"></div>
        <img
          src="https://www.jacanawarranty.com/wp-content/uploads/elementor/thumbs/Warranty-01-1024x651-1-q8nzmxabqfbqzcxo77dcks2kuea1li9g6v3k5yajrc.webp"
          alt=" Hero section"
          className=" w-[100vw] h-[50vh] object-cover "
        />
        <div className="text-white absolute h-full w-full top-0 left-0 lg:ml-[10%] flex flex-col justify-center lg:items-start items-center">
          <h1 className=" font-bold text-4xl mb-10">Register Warranty</h1>
          <span className=" lg:text-2xl text-lg font-normal">
            Mopawa - Best Sharing Power Bank Station Manufacturer.
            <br /> Reliable Power Bank Rental Service Provider.
          </span>
        </div>
      </div>

      <div className="min-h-[50vh] py-10 lg:flex">
        <div className="flex-1 px-5 items-center justify-center">
          <h2 className=" font-bold text-2xl my-2">Warranty Registration</h2>
          <p className=" my-2">
            When you register your power bank*, you will get;
          </p>
          <ul className=" list-decimal list-inside">
            <li>
              <strong>6 months</strong> warranty
            </li>
            <li>
              <strong>One-time</strong> replacement of the power bank cell
            </li>
            <li>
              <strong>One-time</strong> replacement of the power bank cable
            </li>
          </ul>
          <hr className=" my-5 lg:hidden flex" />
        </div>

        <div className=" flex flex-col px-3 flex-1">
          <h2 className=" font-bold text-2xl my-2">Warranty Infomation</h2>
          <p className=" my-2">
            Please enter your power bank and personal information below
          </p>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

          <form onSubmit={handleSubmit} className=" flex flex-col ">
            <div className=" p-5">
              <label htmlFor="serialNumber" className=" mr-10">
                Serial Number:
              </label>
              <input
                className=" rounded-md"
                type="text"
                id="serialNumber"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                required
              />
            </div>

            <div className=" p-5">
              <label htmlFor="phoneNumber" className=" mr-10">
                Phone Number:
              </label>
              <input
                className=" rounded-md"
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            {loading ? (
              <div className=" text-white bg-yellow-400 px-3 py-2 rounded-md mt-3">
                <ThreeDots
                  visible={true}
                  height="40"
                  width="40"
                  color="#ffffff"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <button
                className=" text-white bg-yellow-400 px-3 py-2 rounded-md mt-3"
                type="submit"
              >
                Register Warranty
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Warranty;
