function AmbassadorHome() {
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
          <h1 className="text-3xl font-bold text-white">Welcome, Jane Doe</h1>
          <p className="text-gray-300">Your ambassador dashboard</p>
        </div>
      </div>

      <div className="w-full bg-white shadow-lg rounded-lg p-8 mt-[-10vh] mx-auto max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Today's Information
        </h2>

        <div className="space-y-6">
          {/* Referral Code */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-gray-700">Your referral code:</h3>
            <button
              onClick={() => copyToClipboard("123567")}
              className="text-blue-600 font-semibold hover:underline"
            >
              123567 (Copy)
            </button>
          </div>

          {/* Referral Link */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-gray-700">Referral Link:</h3>
            <button
              onClick={() =>
                copyToClipboard("https://www.example.com/referral/123456")
              }
              className="text-blue-600 font-semibold hover:underline"
            >
              https://www.example.com/referral/123456 (Copy)
            </button>
          </div>

          {/* Referral Count */}
          <div className="flex items-center">
            <h3 className="text-lg text-gray-700">Referral Count:</h3>
            <span className="ml-2 text-green-600 font-bold">
              {referrals.length}
            </span>
          </div>

          {/* Tasks for Today */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Your Task Today:
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Invite 5 new friends using your referral link.</li>
              <li>Share your referral code on social media.</li>
              <li>Check your referral count at the end of the day.</li>
            </ul>
          </div>

          {/* Referrals Table */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Recent Referrals
            </h3>
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-3 text-left">Name</th>
                  <th className="border border-gray-300 p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {referrals.map((referral, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-3">
                      {referral.name}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {referral.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmbassadorHome;
