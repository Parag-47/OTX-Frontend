import React, { act, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../apiInstance/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminProfile = () => {
  const [active, setActive] = useState(false);
  const { admin, setAdmin } = useContext(AuthContext);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (admin) {
      setActive(true);
    }
  }, [admin]);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await API.get("/user/logout");
      setAdmin(null);
      setActive(false);
      navigate("/auth/login");
      toast(
        <div className="flex items-center gap-3">
          <span className="text-green-500">✔</span>
          <p>Admin logged out successfully</p>
        </div>,
      );
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="p-5 gap-5 flex flex-col">
      <div className='flex justify-between border items-center font-["Orbitron","sans-serif"] relative border-gray-300 p-5 rounded-lg'>
        <h1 className="text-2xl font-bold text-gray-500">Admin Profile</h1>

        <img src="/logo.png" alt="logo" className="size-18" />

        <div
          className={`p-2 absolute top-6 right-6 rounded-full ${
            isOnline ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
      </div>

      <div className='flex justify-between border items-center font-["Orbitron","sans-serif"] border-gray-300 p-5 rounded-lg'>
        <p className="text-sm font-semibold text-gray-500">{admin.email}</p>
        <p className="text-sm font-semibold text-gray-500">{admin.name}</p>
      </div>
      <div className='flex justify-between border items-center font-["Orbitron","sans-serif"] border-gray-300 p-5 rounded-lg'>
        <p></p>
      </div>

      <button
        onClick={handleLogout}
        className="w-[10%] absolute bottom-5 right-5 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200 cursor-pointer font-semibold"
      >
        LogOut
      </button>
    </div>
  );
};

export default AdminProfile;
