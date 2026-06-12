import { Copy, Eye } from "lucide-react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const UserCard = ({ user }) => {
  const copyNumber = (number) => {
    navigator.clipboard.writeText(number);
    toast.success("Phone number copied!");
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className=" p-2 overflow-y-scroll h-[96vh]">
      {/* Table Header */}
      <h2 className="text-xl font-semibold mb-4 font-[Orbitron,sans-serif]">
        Recent Users
      </h2>

      <div className="overflow-y-auto">
        <table className="w-full gap-2">
          <thead >
            <tr className="border-b ">
              <th className="text-left py-3 text-sm font-semibold text-gray-500 uppercase">
                Email
              </th>

              <th className="text-center py-3 text-sm font-semibold text-gray-500 uppercase">
                contact
              </th>

              <th className="text-center py-3 text-sm font-semibold text-green-500 uppercase">
                Verified
              </th>
              <th className="text-right py-3 text-sm font-semibold text-green-500 uppercase">
                Details
              </th>
            </tr>
          </thead>

          <tbody >
            {user.map((user) => (
              <tr
                key={user._id}
                className="border border-gray-300 hover:bg-gray-50 transition "
              >
                <td className="py-1 text-sm text-gray-600">{user.email}</td>

                <td className="py-1 text-sm  text-gray-600 flex items-center justify-center gap-2">
                  {user.phone || "N/A"}

                  {user.phone && (
                    <button
                    onClick={() => copyNumber(user.phone)}
                    className="text-gray-500 hover:text-black transition"
                  >
                    
                    <Copy size={16} />
                  </button>
                  )}
                </td>

                <td className={`text-sm font-semibold text-center   ${
                  user.verified ? "text-green-500" : "text-red-500"
                }`}>
                  {user.verified ? "Yes" : "No"}
                </td>

                <td className=" ">
                  <button className="flex items-center gap-2 bg-blue-500 text-white px-4  rounded-lg hover:bg-black transition ml-auto">
                    <Eye size={16} />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCard;
