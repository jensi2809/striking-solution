import React from "react";
import "./style.css";
import play from "../../Assets/Images/play.svg";
import banner from "../../Assets/Images/banner.svg";
import bg from "../../Assets/Images/bg.png";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="main-banner-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-info">
                <h1>Striking Solution</h1>
                <p className="banner-infomain">
                  Mobile App Development Company. Join Us!
                </p>
                <div className="d-flex align-items-center play-icon">
                  <img src={play} alt="playicon" />
                  <p className="mb-0">
                    Connecting dots from <strong>DESIGN</strong> to{" "}
                    <strong>DEVELOPMENT</strong>.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="banner-img">
                <img src={banner} className="img-fluid" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* background-wave */}
      <img src={bg} alt="img" className="img-fluid" />
    </div>
  );
};

export default Banner;
