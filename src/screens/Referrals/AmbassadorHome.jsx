function AmbassadorHome() {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Copied: ${text}`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  const referrals = [
    { name: "John Smith", date: "Feb 5, 2025" },
    { name: "Alice Johnson", date: "Feb 5, 2025" },
    { name: "Bob Williams", date: "Feb 5, 2025" },
  ];

  return (
    <div className=" min-h-screen ">
      <div className=" w-full bg-gray-700 h-[30vh] absolute top-0"></div>
      <div className="w-full  bg-white shadow-lg rounded-lg p-8 absolute top-[20vh]">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, Jane Doe
        </h1>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-700">
              Your referral code today is:
            </h2>
            <button
              onClick={() => copyToClipboard("123567")}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              <span className="font-semibold">123567</span> (Copy)
            </button>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-700">
              Referral Link:
            </h2>
            <button
              onClick={() =>
                copyToClipboard("https://www.example.com/referral/123456")
              }
              className="text-blue-500 hover:underline focus:outline-none"
            >
              <span className="truncate">
                https://www.example.com/referral/123456
              </span>{" "}
              (Copy)
            </button>
          </div>
          <h2 className="text-lg font-medium text-gray-700">
            Referral Count:{" "}
            <span className="text-green-600 font-semibold">
              {referrals.length}
            </span>
          </h2>
          <h2 className="text-lg font-medium text-gray-700">
            Your Task Today:
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">
              Invite 5 new friends using your referral link.
            </li>
            <li className="text-gray-700">
              Share your referral code on social media.
            </li>
            <li className="text-gray-700">
              Check your referral count at the end of the day.
            </li>
          </ul>
          <table className="w-full border-collapse border border-gray-300 mt-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2 text-left">Name</th>
                <th className="border border-gray-300 p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((referral, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">
                    {referral.name}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {referral.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AmbassadorHome;
