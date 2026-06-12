import React, { useEffect, useState } from "react";
import API from "../apiInstance/axios";
import { ChevronDown, ChevronUp } from "lucide-react";
import Loading from "../components/Loading";

//check new branch 

const AllQueries = () => {
  const [queries, setQueries] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAllQueries = async () => {
    setLoading(true);
    try {
      const res = await API.get("admin/inquiries");
      setQueries(res.data.success.inquiries);
    } catch (error) {
      console.error("Error fetching queries:", error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    getAllQueries();
  }, []);

  const toggleCard = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen  p-1 font-['Open Sans','sans-serif']">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Queries</h2>

      <div className="space-y-3">
        {loading ?(<div><Loading/></div>) : queries.length === 0 ? (
          <p className="text-gray-500">No queries found.</p>
        ) : ( queries.map((query) => (
          <div
            key={query._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Header */}
            <div
              onClick={() => toggleCard(query._id)}
              className="flex justify-between items-center py-1 px-3 cursor-pointer hover:bg-gray-50 transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-600">{query.name}</h3>
                <p className="text-sm text-gray-500">
                  {query.inquiryType}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    query.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {query.status}
                </span>

                {openId === query._id ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            </div>

            {/* Expanded Content */}
            {openId === query._id && (
              <div className="border-t p-5 bg-gray-50">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p>
                      <strong>Name:</strong> {query.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {query.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {query.phone}
                    </p>
                  </div>

                  <div>
                    <p>
                      <strong>Inquiry Type:</strong>{" "}
                      {query.inquiryType}
                    </p>
                    <p>
                      <strong>Status:</strong> {query.status}
                    </p>
                    <p>
                      <strong>Created:</strong>{" "}
                      {new Date(query.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <h4 className="font-semibold mb-2">Message</h4>
                  <div className="bg-white border rounded-lg p-4">
                    {query.message}
                  </div>
                </div>
              </div>
            )}
          </div>
        )))}
       
      </div>
    </div>
  );
};

export default AllQueries;