import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Navbar = () => {
  const [token, setToken] = useState(true);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // Common navigation menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "All Doctors", path: "/doctors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between py-4 text-sm mb-5 border-b border-gray-400 shadow-md">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        {menuItems.map((item) => (
          <NavLink key={item.path} to={item.path} className="py-1">
            {item.name}
          </NavLink>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative group">
            {/* Profile Image & Dropdown Icon */}
            <div className="flex items-center gap-1 cursor-pointer">
              <img className="w-8 h-8 rounded-full" src={assets.profile_pic} alt="Profile" />
              <img className="w-2.5 h-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            </div>

            {/* Dropdown Menu (Fixed Hover Issue) */}
            <div className="absolute top-10 right-0 pt-2 text-base font-medium text-gray-500 z-20 hidden group-hover:flex flex-col">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg">
                <p onClick={() => navigate("/myprofile")} className="hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p onClick={() => navigate("/myappointments")} className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Toggle Button */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-white z-50 transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b">
          <img className="w-36" src={assets.logo} alt="Logo" />
          <img
            className="w-8 cursor-pointer"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-start gap-4 px-5 pt-4 text-lg">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setShowMenu(false)}
              className="py-2 px-4 rounded-full inline-block"
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
