import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const navlinks = [
  {
    link: "/dashboard",
    ele: "Dashboard",
  },
  {
    link: "/allusers",
    ele: "All Users",
  },
  {
    link: "/allQueries",
    ele: "All Queries",
  },
  {
    link: "/growth",
    ele: "Growth",
  },
];

const Home = () => {
  const { admin, loading } = useContext(AuthContext);

  if (!admin) {
    console.log("No admin found, redirecting to login...");
    return <Navigate to={"/auth/login"} />;
  }

  return (
    <div className='font-["Exo2","sans-serif"] flex '>
      <section className="w-1/5 h-screen p-2 ">
        <div className="flex items-center border border-gray-500 p-1 justify-around bg-gray-100 rounded">
          <img src="/logo.png" alt="company logo" className="size-10" />
          <h1 className="font-bold ">OneTimeX</h1>
        </div>
        <div className="border border-gray-500  rounded mt-1 min-h-4/5 max-h-auto flex flex-col items-start p-1 gap-1">
          {navlinks.map((item) => {
            return (
              <NavLink
                to={item.link}
                className={
                  "border border-gray-500 p-1 w-full bg-gray-100 rounded hover:bg-gray-600 transition duration-75 hover:text-white"
                }
              >
                {item.ele}
              </NavLink>
            );
          })}
        </div>
        <Link
          to={"/adminprofile"}
          className="flex items-center border border-gray-500 p-1 justify-around bg-gray-100 rounded mt-1 cursor-pointer hover:bg-gray-600 transition duration-100 text-gray-600 hover:text-white"
        >
          <img src="/logo.png" alt="company logo" className="size-10" />
          <h1 className="font-bold ">{admin?.name || "Admin"}</h1>
        </Link>
      </section>
      <section className="w-4/5 h-screen p-2 ">
        <div className="p-1 border border-gray-500 h-full rounded overflow-auto">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Home;
