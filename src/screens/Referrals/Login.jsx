import { useState } from "react";
import CustomNav from "./CustomNav";
import Login1 from "../../assets/images/login1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://warranty.mopawa.co.ke/signin",
        formData
      );

      console.log(response.data);

      localStorage.setItem("ambtoken", response.data.token);
      localStorage.setItem("userName", response.data.userName);
      localStorage.setItem("referralCode", response.data.referralCode);
      setLoading(false);

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
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome back</h2>
          {error === null ? (
            <div></div>
          ) : (
            <p className=" text-red-600 my-3">{error}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.userName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="Enter your phone number"
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
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-3 rounded-md hover:bg-yellow-200 transition"
            >
              Sign Up
            </button>
          </form>

          <div className=" flex items-center mt-10">
            <h2> Not registred yet? </h2>
            <span className=" text-yellow-400 ml-2 hover:cursor-pointer">
              <a href="/ambassador/signup">Sign Up</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
