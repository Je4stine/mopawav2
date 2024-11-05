
const ProfitTable = () => {
  return (
    <div className=" grid place-content-center ">
    <div className=" block p-2  w-[50vw] border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="text-center bg-gray-300 p-4 rounded-t-lg">
        <h1 className="font-bold text-lg"> Partner Profit Case</h1>
      </div>
      <div className="overflow-x-auto">
      <table className="table-auto w-[50vw] text-left border-collapse">
        <thead className="bg-gray-200 text-center">
          <tr>
            <th className="p-2 border">Location</th>
            <th className="p-2 border">Number of machines placed(Sets)</th>
            <th className="p-2 border">Number of powerbanks(unit)</th>
            <th className="p-2 border">Monthly income (Ksh.)</th>
            <th className="p-2 border"> One-year payback income</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="p-2 border">Hotel</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">6</td>
            <td className="p-2 border">36000</td>
            <td className="p-2 border">432000</td>
          </tr>
          <tr>
            <td className="p-2 border">Club</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">12</td>
            <td className="p-2 border">72000</td>
            <td className="p-2 border">864000</td>
          </tr>
          <tr>
            <td className="p-2 border">Hospital</td>
            <td className="p-2 border">3</td>
            <td className="p-2 border">18</td>
            <td className="p-2 border">108000</td>
            <td className="p-2 border">1296000</td>
          </tr>
          <tr>
            <td className="p-2 border">Mall</td>
            <td className="p-2 border">4</td>
            <td className="p-2 border">24</td>
            <td className="p-2 border">144000</td>
            <td className="p-2 border">5184000</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>
    </div>
  );
};

export default ProfitTable;
