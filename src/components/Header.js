import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Vector.svg";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate("/");
  };

  return (
    <div className="Head__wrapper">
      <div className="head__tools" >
        <img src={logo} alt="logo"></img>
        <h1 className="head__title" onClick={nav}>MyContacts</h1>
      </div>
    </div>
  );
};

export default Header;
