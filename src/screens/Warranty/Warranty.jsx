import { useState } from "react";
import axios from "axios";

function Warranty() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred.");
      setSuccessMessage("");
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

      <div className="min-h-[50vh]">
        <div className=" flex flex-col items-center pt-10">
          <h2 className=" font-bold text-2xl my-10">Warranty Registration</h2>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

          <form onSubmit={handleSubmit} className=" flex flex-col items-center">
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

            <button
              className=" text-white bg-yellow-400 px-3 py-2 rounded-md mt-3"
              type="submit"
            >
              Register Warranty
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Warranty;
