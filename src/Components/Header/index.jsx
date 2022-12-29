import React, { useState } from "react";
import "./style.css";
import logo from "../../Assets/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setshow] = useState(false)

  const OpenNavmenu = () => {
    setshow(!show)
  }

  return (
    <>
      <div className="header-wrapper">
        <div className="navbar-header">
          <div className="navbar-main navbar-expand-lg navbar-light">
            <div className="d-flex align-items-center justify-content-between">
              <div className="navbar-logo">
                <Link to='/'><img src={logo} className="img-fluid" alt="icon" /></Link>
              </div>
              <div className="nav-menu">
                <div className="bars-btn" onClick={OpenNavmenu}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className={show ? 'menu active' : 'menu'}>
                  <Link to='/'><li>Home</li></Link>
                  <li>Services</li>
                  <li>About</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
