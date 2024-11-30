import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo/doozy_logo.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="navbar px-10 flex items-center gap-8">
      <div className="w-1/6">
        <img className="w-full" src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center text-sm gap-2 justify-around flex-1 navlinks">
        <a className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </a>
        <p>|</p>
        <a className="cursor-pointer" onClick={() => navigate("/accomodation")}>
          Accomodation
        </a>
        <p>|</p>
        <a className="cursor-pointer" onClick={() => navigate("/about")}>
          About
        </a>
        <p>|</p>
        <a className="cursor-pointer" onClick={() => navigate("/contact")}>
          Contact
        </a>
      </div>
      <div className="flex flex-col gap-1">
        <button>+91 1234567890</button>
        <button>Book now</button>
      </div>
    </div>
  );
}

export default Nav;
