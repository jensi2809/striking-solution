import React, { useState } from "react";
import "./style.css";
import { toast } from "react-toastify";

const Registration = () => {
  const pattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handle = () => {
    if (validation(loginData?.email, loginData?.password)) {
      toast.error("login successfull");
    }
  };

  const validation = (email, password) => {
    if (!email && !password) {
      console.log(email, password);
      toast.error("All fields are required");
      return false;
    }

    if (!email || email === "") {
      toast.error("Please enter email");
      return false;
    }

    if (!pattern.test(email)) {
      toast.error("Please enter email in correct format");
      return false;
    }

    if (pattern.test(email) && !password) {
      toast.error("Please enter password");
      return false;
    }
    return true;
  };

  const handleInputField = (e) => {
    setloginData((value) => ({
      ...value,
      [e?.target?.name]: e?.target?.value,
    }));
  };

  return (
    <div className="login-wrapper registration-wrapper">
      <div className="login-info min-h-100 p-0 p-sm-6 align-items-stretch">
        <div className="login-info">
          <div className="container">
            <div className="login-main-wrapper w-75 flex-grow-1 flex-sm-grow-0 m-sm-auto">
              <div className="login-first-wrapper">
                <div className="sign-in-info main-title">
                  <h3>Sign Up</h3>
                </div>
                <div className="user-info mt-4 row">
                  <div className="col-md-3 col-sm-12">
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <input type="text" id="name" name="email" />
                  </div>
                </div>
                <div className="user-info row">
                  <div className="col-md-3 col-sm-12">
                    <label htmlFor="emailAdd">Email Address</label>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <input
                      type="email"
                      id="emailAdd"
                      onChange={handleInputField}
                      value={loginData?.email}
                      name="email"
                    />
                  </div>
                </div>
                <div className="user-info row">
                  <div className="col-md-3 col-sm-12">
                    <label htmlFor="userPassword">Password</label>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <input
                      type="password"
                      id="userPassword"
                      onChange={handleInputField}
                      value={loginData?.password}
                      name="password"
                    />
                  </div>
                </div>
                <div className="user-info row">
                  <div className="col-md-3 col-sm-12">
                    <label htmlFor="userPassword">ConfirmPassword</label>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <input
                      type="password"
                      id="userPassword"
                      name="confirm password"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button className="sign-in-btn" onClick={handle}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
