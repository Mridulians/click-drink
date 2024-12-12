// import React from "react";
// import IMGG1 from "../assets/immg1.png";

function AdminPage() {
  return (
    <div className="min-h-screen bg-[#1f1c1a] text-white flex flex-col items-center py-10 px-4">
      {/* Profile Card */}
      <div className="relative w-full max-w-[900px] border-[5px] border-orange-300 rounded-[25px] p-4 flex flex-col sm:flex-row items-center bg-[#282624] mb-8">
        {/* Profile Image */}
        {/* <img
          src={IMGG1}
          alt="Admin"
          className="w-[70px] h-[70px] rounded-full object-cover"
        /> */}
        {/* User Information */}
        <div className="sm:pl-4 mt-4 sm:mt-0 text-center sm:text-left">
          <h1 className="text-white font-bold text-lg">SACHIN</h1>
          {/* <p className="text-gray-400 text-sm">Level 8</p> */}
        </div>
        {/* Total Amount */}
        <div className="sm:ml-auto mt-4 sm:mt-0 text-center sm:text-right">
          <h2 className="text-white font-semibold text-md">
            Total Convertible Amount
          </h2>
          <p className="text-white text-3xl font-bold">$80,000</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full max-w-[900px] bg-[#282624] rounded-[25px] overflow-x-auto">
        <table className="w-full text-left table-auto border-collapse">
          <thead className="bg-[#33302e] text-gray-400">
            <tr>
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Total Clicks</th>
              <th className="px-4 py-2">Convertible Amount</th>
            </tr>
          </thead>
          <tbody>
            {Array(100)
              .fill()
              .map((_, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#2c2927]" : "bg-[#282624]"
                  } hover:bg-[#3b3836]`}
                >
                  <td className="px-4 py-2">{index + 1}.</td>
                  <td className="px-4 py-2">Abhishek Pannti</td>
                  <td className="px-4 py-2">30,000pt</td>
                  <td className="px-4 py-2">$843</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;