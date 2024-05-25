import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeItem, setActiveItem] = useState(""); // State to track the active item
  const handleNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle item click
  const handleItemClick = (item, path) => {
    setActiveItem(item); // Update the active item state
    navigate(path); // Navigate to the specified path
  };

  const activeIitem =
    location.pathname === "/"
      ? "Home"
      : location.pathname === "/work"
      ? "Projects"
      : location.pathname === "/galle"
      ? "Gallery"
      : location.pathname === "/skills"
      ? "Skills"
      : "";

  return (
    <div className="relative z-auto text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
      <h1 className=" text-3xl font-bold primary-color ml-4">MACOY V.</h1>
      <ul className="hidden md:flex ">
        <li
          className={`p-5 cursor-pointer transition-colors duration-300 hover:text-violet-300 ${
            activeIitem === "Home" ? "text-violet-500" : ""
          }`}
          onClick={() => handleItemClick("Home", "/")}
        >
          Home
        </li>
        <li
          className={`p-5 cursor-pointer transition-colors duration-300 hover:text-violet-300 ${
            activeIitem === "Skills" ? "text-violet-500" : ""
          }`} // Add active class
          onClick={() => handleItemClick("Skills", "/skills")}
        >
          Skills
        </li>
        <li
          className={`p-5 cursor-pointer transition-colors duration-300 hover:text-violet-300 ${
            activeIitem === "Projects" ? "text-violet-500" : ""
          }`} // Add active class
          onClick={() => handleItemClick("Projects", "/work")}
        >
          Projects
        </li>
        <li
          className={`p-5 cursor-pointer transition-colors duration-300 hover:text-violet-300 ${
            activeIitem === "Gallery" ? "text-violet-500" : ""
          }`} // Add active class
          onClick={() => handleItemClick("Gallery", "/galle")}
        >
          Gallery
        </li>

        <li className="p-5">
          <span
            className="cursor-pointer transition-all duration-1000 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl hover:opacity-100 hover:-inset-5 hover:duration-200 opacity-70 bg-transparent border-transparent border p-1 gradient-border"
            onClick={() => navigate("/")}
          >
            Logout
          </span>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose className="cursor-pointer" size={20} />
        ) : (
          <AiOutlineMenu className="cursor-pointer" size={20} />
        )}
      </div>

      <div
        className={
          nav
            ? "text-gray-300 fixed h-full left-0 top-0 w[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" text-3xl primary-color m-4">MACOY V.</h1>
        <ul className="p-8 text-2xl">
          <li
            className={`p-5 cursor-pointer transition-colors duration-300 hover:text-violet-300 ${
              activeIitem === "Home" ? "text-violet-500" : ""
            }`}
            onClick={() => handleItemClick("Home", "/")}
          >
            Home
          </li>
          <li
            className={`p-5 cursor-pointer transition-colors duration-300 hover:text-violet-300 ${
              activeIitem === "Skills" ? "text-violet-500" : ""
            }`} // Add active class
            onClick={() => handleItemClick("Skills", "/skills")}
          >
            Skills
          </li>
          <li
            className={`p-5 cursor-pointer transition-colors duration-300 hover:text-violet-300 ${
              activeIitem === "Projects" ? "text-violet-500" : ""
            }`} // Add active class
            onClick={() => handleItemClick("Projects", "/work")}
          >
            Projects
          </li>
          <li
            className={`p-5 cursor-pointer transition-colors duration-300 hover:text-violet-300 ${
              activeIitem === "Gallery" ? "text-violet-500" : ""
            }`} // Add active class
            onClick={() => handleItemClick("Gallery", "/galle")}
          >
            Gallery
          </li>
          <li className="p-5">
            <span
              className="cursor-pointer transition-all duration-1000 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl hover:opacity-100 hover:-inset-5 hover:duration-200 opacity-70 bg-transparent border-transparent border p-1 gradient-border"
              onClick={() => navigate("/")}
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
