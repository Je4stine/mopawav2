import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

function AmbassadorHome() {
  const [activeTab, setActiveTab] = useState(1);
  const [userName, setUserName] = useState("");
  const [code, setCode] = useState("");
  const [allref, setAllRef] = useState(0);

  const getAllReferrals = async (referralCode) => {
    try {
      const response = await axios.get(
        `https://warranty.mopawa.co.ke/referral/${referralCode}`
      );
      const data = response.data.people;
      setAllRef(data.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    const storedReferralCode = localStorage.getItem("referralCode");

    setUserName(storedUserName);
    setCode(storedReferralCode);

    if (storedReferralCode) {
      getAllReferrals(storedReferralCode);
    }
  }, []);

  const changeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`Copied: ${text}`))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const referrals = [
    { name: "John Smith", date: "Feb 5, 2025" },
    { name: "Alice Johnson", date: "Feb 5, 2025" },
    { name: "Bob Williams", date: "Feb 5, 2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full bg-gray-700 h-[30vh] relative">
        <div className="absolute bottom-6 left-8">
          <h1 className="text-3xl font-bold text-white">Welcome, {userName}</h1>

          <p className="text-gray-300 text-xl my-3">
            You have <span className=" font-bold text-2xl">{allref}</span>{" "}
            referrals today
          </p>
        </div>
      </div>
      <div className="">
        <div className=" flex my-5 p-3 items-center justify-center">
          <button
            onClick={() => changeActiveTab(1)}
            className={` ${
              activeTab === 1
                ? "bg-yellow-400 px-3 py-2 text-white rounded-lg"
                : " bg-gray-200 px-3 py-2 rounded-lg"
            } mr-10`}
          >
            <p>Summary</p>
          </button>
          <button
            onClick={() => changeActiveTab(2)}
            className={` ${
              activeTab === 2
                ? "bg-yellow-400 px-3 py-2 text-white rounded-lg"
                : " bg-gray-200 px-3 py-2 rounded-lg"
            } mr-10`}
          >
            <p>Referrals</p>{" "}
          </button>
          <button
            onClick={() => changeActiveTab(3)}
            className={` ${
              activeTab === 3
                ? "bg-yellow-400 px-3 py-2 text-white rounded-lg"
                : " bg-gray-200 px-3 py-2 rounded-lg"
            }`}
          >
            <p>Settings</p>
          </button>
        </div>
      </div>

      <div>
        {activeTab === 1 && (
          <div className="p-5 flex flex-col items-center ">
            <h1 className="text-2xl font-bold">Summary</h1>
            <div className="w-full bg-white border-l-4 border-blue-400 p-5 rounded-lg my-5 max-w-lg text-center flex flex-col items-center justify-center">
              <p className=" text-5xl font-bold">{allref} </p>
              <p className=" text-sm">Your referrals today</p>
              <button
                onClick={() => changeActiveTab(2)}
                className="flex items-center hover:text-yellow-400"
              >
                <p>View all</p>
                <IoIosArrowForward />
              </button>
            </div>

            <div className=" bg-white border-l-4 w-full border-blue-400 p-5 rounded-lg my-5 flex items-center justify-between max-w-lg">
              <p>Your referral code is: {code}</p>
              <button onClick={() => copyToClipboard(code)}>
                <p className=" text-blue-700">Copy code</p>
              </button>
            </div>

            <div className=" bg-white border-l-4 w-full border-blue-400 p-5 rounded-lg my-5 max-w-lg">
              <div className="flex items-center justify-between ">
                <p className=" font-bold">Your Task today </p>
                <button onClick={() => copyToClipboard(1234567)}>
                  <p className=" text-blue-700">Copy task</p>
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="p-5">
            <h1 className="text-2xl font-bold">Referrals</h1>
            <div className="flex flex-col">
              {referrals.map((referral, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg my-2 flex justify-between items-center"
                >
                  <div>
                    <h1 className="text-2xl font-bold">{referral.name}</h1>
                    <p className="text-gray-400">{referral.date}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(referral.name)}
                    className="bg-gray-200 px-3 py-2 rounded-lg"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="p-5">
            <h1 className="text-2xl font-bold">Settings</h1>
            <div className="bg-white p-5 rounded-lg my-5">
              <h1 className="text-2xl font-bold">Profile</h1>
              <p className="text-gray-400">Jane Doe</p>
              <p className="text-gray-400"></p>
              <button className="bg-gray-200 px-3 py-2 rounded-lg">Edit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AmbassadorHome;
