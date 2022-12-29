import React from "react";
import './style.css'
import about from '../../Assets/Images/about.svg'

const About = () => {
  return (
    <div class="about-wrapper">
      <div className="container">
        <div className="main-title">
          <h3>About Us</h3>
        </div>
        <div className="about-infomain">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h4>Striking Solution</h4>
                <div className="about-info">
                  <p>Because we deliver the best & we are unbeatable.</p>
                </div>
                <ul className="about-list">
                  <li>
                    <span>Striking Solution</span> is a renowned mobile app development
                    company & the best IT Software Solutions provider based in
                    India.
                  </li>
                  <li>
                    Striking Solution is well known to craft the most innovative
                    & eye catchy mobile apps & websites.
                  </li>
                  <li>
                    We offer a wide range of customized services in mobile apps,
                    website development, Game Development and much more.
                  </li>
                  <li>
                    Our skilled team & our products are engineered to bring
                    growth to your business.
                  </li>
                  <li>
                    We believe in delivering the services without compromising
                    on time and quality.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="about-img">
                    <img src={about} alt="img" className="img-fluid" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
