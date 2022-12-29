import React from "react";
import "./style.css";
import { services } from "./utils";

const Services = () => {
  return (
    <div className="services-wrapper">
      <div className="container">
        <div className="main-title">
          <h3>SERVICES</h3>
        </div>
        <div className="services-main">
          <div className="row">
            {services.length ? (
              services.map((element) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={element.id}>
                    <div className="ser-info">
                      <div className="ser-img">
                        <img src={element.img} alt="img" className="img-fluid" />
                      </div>
                      <div className="main-subtitle">
                        <h4>{element.title}</h4>
                      </div>
                      <div className="ser-content">
                        <p>{element.discription}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>no services yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
