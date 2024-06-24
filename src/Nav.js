import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"} `}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://ongpng.com/wp-content/uploads/2023/04/7.Netflix-Logo-1728x734-1.png"
          alt=""
        />

        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          onClick={() => navigate("/profile")}
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
