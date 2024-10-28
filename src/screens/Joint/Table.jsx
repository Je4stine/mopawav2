
const ProfitTable = () => {
  return (
    <div className="p-4">
      <div className="text-center bg-green-500 p-4 rounded-t-lg">
        <h1 className="font-bold text-lg"> Partner Profit Case</h1>
      </div>
      <table className="table-auto w-full text-left border-collapse">
        <thead className="bg-green-500 text-center">
          <tr>
            <th className="p-2 border">Location</th>
            <th className="p-2 border">Number of machines placed(Sets)</th>
            <th className="p-2 border">Number of powerbanks(unit)</th>
            <th className="p-2 border">Number of powerbanks(unit)</th>
            <th className="p-2 border">Monthly income (Ksh.)</th>
            <th className="p-2 border"> One-year payback income</th>
            <th className="p-2 border">Return on Investement</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="p-2 border">Hotel</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">6</td>
            <td className="p-2 border">36</td>
            <td className="p-2 border">48000</td>
            <td className="p-2 border">576 K</td>
            <td className="p-2 border">556 K</td>
          </tr>
          <tr>
            <td className="p-2 border">Club</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">8</td>
            <td className="p-2 border">48</td>
            <td className="p-2 border">1440</td>
            <td className="p-2 border">17280</td>
            <td className="p-2 border">7K</td>
          </tr>
          <tr>
            <td className="p-2 border">Hospital</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">12</td>
            <td className="p-2 border">72</td>
            <td className="p-2 border">2160</td>
            <td className="p-2 border">25920</td>
            <td className="p-2 border">10K</td>
          </tr>
          <tr>
            <td className="p-2 border">Mall</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">24</td>
            <td className="p-2 border">144</td>
            <td className="p-2 border">4320</td>
            <td className="p-2 border">51840</td>
            <td className="p-2 border">12K</td>
          </tr>
        </tbody>
      </table>
      <div className="bg-green-100 p-2 text-sm text-center border-t">
        <p>
          Tip: The above profit calculation is based on 2 hours of rental at Ksh. 100 per hour. <br />
          The data above is for reference, the actual data may differ.
        </p>
      </div>
    </div>
  );
};

export default ProfitTable;
