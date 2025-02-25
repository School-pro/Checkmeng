import React from "react";

const ResultCheck = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Check Your Result</h2>
      <input
        type="text"
        placeholder="Enter Student ID"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Enter PIN"
        className="w-full p-2 border rounded mb-2"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Check Result
      </button>
    </div>
  );
};

export default ResultCheck;
