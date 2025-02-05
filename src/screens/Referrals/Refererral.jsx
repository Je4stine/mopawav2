import { useState } from "react";
import CustomNav from "./CustomNav";

const Refererral = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    code: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <CustomNav />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Brand Ambassador Signup
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="code"
              >
                Refferal code
              </label>
              <input
                type="text"
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="Please provide your referral code"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
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
                id="phone"
                name="phone"
                value={formData.phone}
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
        </div>
      </div>
    </>
  );
};

export default Refererral;
