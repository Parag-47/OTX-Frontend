import { Users, UserCheck, Mail } from "lucide-react";
import AllUsers from "../HomePages/AllUsers";

const Dashboard = ({ data }) => {
  return (
    <div className="p-2 font-['Orbitron','sans-serif']  min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 p-2  rounded bg-gray-300 text-white"><span className="text-blue-500">OTX</span>-Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Total Users */}
        <div className="bg-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>
            <h2 className="text-3xl font-bold mt-1">{data.users.total}</h2>
          </div>

          <div className="p-3 bg-blue-100 rounded-lg">
            <Users className="text-blue-600" size={28} />
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Active Users</p>
            <h2 className="text-3xl font-bold mt-1">{data.users.active}</h2>
          </div>

          <div className="p-3 bg-green-100 rounded-lg">
            <UserCheck className="text-green-600" size={28} />
          </div>
        </div>

        {/* Total Enquiries */}
        <div className="bg-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Enquiries</p>
            <h2 className="text-3xl font-bold mt-1">{data.enquiries.total}</h2>
          </div>

          <div className="p-3 bg-purple-100 rounded-lg">
            <Mail className="text-purple-600" size={28} />
          </div>
        </div>

      </div>

      <div className="border h-75 overflow-auto mt-7 rounded-2xl border-gray-300 bg-gray-50">
        <AllUsers />
      </div>

    </div>
  );
};

export default Dashboard;