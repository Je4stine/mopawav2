import { useState } from "react";
import CustomNav from "./CustomNav";
import Login1 from "../../assets/images/login1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Refererral = () => {
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    referredBy: "",
    termsAccepted: false,
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://warranty.mopawa.co.ke/registerAmbassador",
        formData
      );

      localStorage.setItem("ambtoken", response.data.token);
      localStorage.setItem("userName", response.data.userName);
      localStorage.setItem("referralCode", response.data.referralCode);

      navigate("/ambassador/home");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <CustomNav />

      <div className="min-h-screen bg-white lg:flex mt-[80px]">
        <div className=" flex-1 bg-black flex items-center">
          {" "}
          <img src={Login1} alt="Login image" className=" " />
        </div>
        <div className=" p-8 flex-1">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Brand Ambassador Signup
          </h2>
          {error === null ? (
            <div></div>
          ) : (
            <p className=" text-red-600 my-3">{error}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="referredBy"
              >
                Refferal code
              </label>
              <input
                type="text"
                id="referredBy"
                name="referredBy"
                value={formData.referredBy}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="Please provide your referral code"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="userName"
              >
                Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="Enter your mpesa phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="Enter your mpesa phone number"
                required
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="termsAccepted" className="text-gray-700">
                I accept the terms and conditions.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-3 rounded-md hover:bg-yellow-200 transition"
            >
              Sign Up
            </button>
          </form>

          <div className=" flex items-center mt-10">
            <h2> Already signed up?</h2>
            <span className=" text-yellow-400 ml-2 hover:cursor-pointer">
              <a href="/ambassador/signin">Sign In</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refererral;
