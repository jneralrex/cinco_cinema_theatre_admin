import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdBlock, MdEventSeat, MdFitScreen, MdHome, MdOutlineManageAccounts } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMasksTheater, FaPen } from "react-icons/fa6";
import { CiLogout, CiSettings } from "react-icons/ci";
import { MdFlightClass } from "react-icons/md";
import { RxRows } from "react-icons/rx";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Example: Clear token
    navigate("/sign-in"); // Redirect to login
  };

  const navItems = [
            
    { icon: <MdHome />, label: "Overview", path: "/dashboard" },
    { icon: <BiCameraMovie />, label: "Movie Mgt", path: "/movie-management" },
    { icon: <MdFlightClass />, label: "Class management", path: "/class" },
    { icon: [<MdEventSeat />, <RxRows className="text-black"/>, ], label: "Seat row management", path: "/row-management" },
    { icon: [<MdEventSeat />, <MdBlock className="text-red-500"/>, ], label: "Seat blocking/unblocking", path: "/seat-blocking" },
    { icon: [<FaMasksTheater />, <CiSettings />], label: "Theatre Mgt", path: "/theatre-management" },
    { icon: <FaPen />, label: "Report", path: "/report" },
    { icon: <CiSettings />, label: "General Settings", path: "/settings" },
  ];

  return (
    <div>
      <div className="">
      <div className=" hidden lg:block mt-auto p-4 border-t border-purple-600 bg-black fixed bottom-0 w-[262px] z-50">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-white hover:text-red-200 font-medium w-full"
            >
              <CiLogout className="text-xl" /> Logout
            </button>
          </div>
          <div className=" ml-10 lg:block mt-auto p-2 lg:ml-0 border-purple-600 lg:bg-purple-700 fixed top-0 w-[262px] z-[99] text-white">
            Agent 20215fs
          </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between max-h-screen bg-gray-50">
        {/* Hamburger Button */}
        <div className="bg-purple-500 text-white fixed w-full p-2 flex flex-row items-center lg:hidden z-50">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className=" lg:hidden mt-auto p-2  border-purple-600 fixed right-0 z-50">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-white hover:text-red-200 font-medium w-full"
            >
              <CiLogout className="text-xl " /> Logout
            </button>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div
          className={`w-[280px] h-full flex-col fixed bg-purple-700 text-white transform overflow-y-auto pb-5 lg:pb-12 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:flex transition-transform duration-300 ease-in-out z-10`}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={closeMenu}
            >
              <div className="flex flex-row gap-2 items-center p-4 hover:bg-purple-600">
                <div className="flex flex-row gap-2">{item.icon}</div>
                <div>{item.label}</div>
              </div>
            </Link>
          ))}

          {/* Logout Button */}
         
        </div>
      
        {/* Main Content */}
        <div className="w-full absolute mt-14 lg:w-[76%] xl:w-[80%] lg:relative lg:mt-0 lg:ml-auto min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Nav;
