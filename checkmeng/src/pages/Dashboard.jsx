// Updated Dashboard Component
export const Dashboard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-3xl font-bold text-center text-blue-600">
        Student Dashboard
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Course Overview</h3>
          <p>View your enrolled courses and progress.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Recent Results</h3>
          <p>Check your latest results.</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={() => alert("Downloading result...")}
        >
          Download Current Result
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
