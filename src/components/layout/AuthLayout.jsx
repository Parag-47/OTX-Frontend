import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex font-['Exo2','sans-serif']">
      {/* Left Side - Admin Branding */}
      <div className="hidden md:flex w-1/2 bg-linear-to-br from-black via-gray-900 to-gray-800 text-white items-center justify-center p-12">
        <div className="max-w-md">
          {/* Company Logo */}
          <div className="mb-8">
            <img
              src="/logo.png" // Put your logo inside public folder
              alt="OneTimeX Logo"
              className="w-40"
            />
          </div>

          {/* Admin Heading */}
          <h1 className="text-4xl font-bold mb-4 tracking-wide">
            OneTimeX Admin Panel
          </h1>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed">
            Centralized control system for managing platform users,
            transactions, share listings, and operational analytics. Built for
            secure, scalable administration.
          </p>

          {/* Security Note */}
          <div className="mt-8 border-l-4 border-white/40 pl-4 text-sm text-gray-300">
            Authorized access only. All activities are monitored and logged.
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
