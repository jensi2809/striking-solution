import React from "react";
import "./style.css";
import icon from "../../Assets/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import facebook from "../../Assets/Images/facebook.svg";
import instagram from "../../Assets/Images/instagram.svg";
import twitter from "../../Assets/Images/twitter.svg";
import whatsapp from "../../Assets/Images/whatsapp.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()

  const goToPrivacyPolicy = () => {
    navigate(`/privacy-policy`)
  }

  return (
    <>
      <div className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* about footer */}
              <div className="footer-about">
                <div className="footer-icon">
                  <img src={icon} alt="icon" />
                </div>
                <div className="footer-content">
                  <p>
                    Striking Solution is a renowned mobile app development
                    company & the best IT Software Solutions provider based in
                    India.
                  </p>
                  <p>
                    We believe in delivering the services without compromising
                    on time and quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* email subscription */}
              <div className="email-subscription">
                <h4>OUR OFFICE</h4>
                <div className="d-flex align-items-center email-info pt-0">
                  <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                  <p>
                    1005, Silver Business Point, VIP Circle, Utran, Surat,
                    Gujarat, India - 395006
                  </p>
                </div>
                <div className="d-flex align-items-center email-info">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <p>+91 6353905147</p>
                </div>
                <div className="d-flex align-items-center email-info">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <p>contact@strikingsolution.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* social media */}
              <div className="social-media-icons">
                <h4>Find Us On Social Media</h4>
                <div className="d-flex">
                  <img src={facebook} alt="icon" />
                  <img src={instagram} alt="icon" />
                  <img src={twitter} alt="icon" />
                  <img src={whatsapp} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottommain">
        <div className="container">
          <div className="footer-bottom">
            <div>
              <p>Copyright © 2022. All rights reserved</p>
            </div>
            <div>
              <p>Privacy Policy Cookie Policy <span className="terms-condition" onClick={() => goToPrivacyPolicy()}>Terms & Condition</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
