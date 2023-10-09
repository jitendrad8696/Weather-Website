import React from "react";
import { NavLink } from "react-router-dom";
import { InputBox } from "../../../";

function Header() {
  return (
    <nav className="h-20 bg-teal-600 flex items-center justify-end">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive ? "bg-rose-600 text-white" : "bg-white text-black"
          } rounded-sm py-1 px-3 mr-2`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="weather"
        className={({ isActive }) =>
          `${
            isActive ? "bg-rose-600 text-white" : "bg-white text-black"
          } rounded-sm py-1 px-3 mr-2`
        }
      >
        Weather
      </NavLink>

      <InputBox />
    </nav>
  );
}

export default Header;
