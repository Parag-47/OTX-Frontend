import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import API from "../../apiInstance/axios";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const AdminLogin = async (formData) => {
    try {
      const res = await API.post("/user/login", formData);

      if (res.data.success.role === "admin") {
        toast.success("Admin logged in successfully");
        setAdmin(res.data.success);
        navigate("/dashboard");
      } else {
        toast.error("Access denied: Not an admin");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    AdminLogin(formData);
  };

  const { admin, setAdmin } = useContext(AuthContext);

  useEffect(() => {
    if (admin) {
      navigate("/dashboard");
    }
  }, [admin, navigate]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6 font-['Orbitron','sans-serif']">
        Welcome Admin 👋
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 font-['Orbitron','sans-serif']"
      >
        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1 ">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none"
            placeholder="Create password"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-slate-700 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200 cursor-pointer font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
