import React from "react";
import COSLogo from "../assets/Images/COS LOG.png";
import Logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";
import "../Css/register.css";

export default function Register() {
  return (
    <div className="registerBody">
      <div class="Register_page">
        <div class="main_interface">
          <div class="left_side">
            <img src={COSLogo} alt="" />
            <p>Knust College of Science</p>
            <p>
              Please register with your personal information to create an
              account
            </p>
          </div>

          <div class="right_side">
            <div class="knust_logo">
              <img src={Logo} alt="" />
              <p>Register</p>
            </div>

            <div class="Register_inputs">
              <div class="input_group username_input">
                <p>Username</p>
                <input
                  type="text"
                  id="username"
                  name="username"
                  pattern="[A-Za-z0-9]+"
                  title="Username must contain only letters and numbers"
                  required
                  placeholder="eg. username"
                />
              </div>

              <div class="input_group email_input">
                <p>Email address</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>

              <div class="input_group password_input">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter passsword"
                />
              </div>

              <div class="input_group password_confirm_input">
                <p>Password confirmation</p>
                <input
                  type="password"
                  name="password_confirm"
                  id="password_confirm"
                  placeholder="Confirm passsword"
                />
              </div>

              <div class="input_group password_confirm_input">
                <p>Phone number</p>
                <input
                  type="tel"
                  name="password_confirm"
                  id="password_confirm"
                  placeholder="Phone number "
                />
              </div>

              <div class="input_group student_ID_input">
                <p>Student ID</p>
                <input
                  type="password"
                  name="Student_ID"
                  id="Student_id"
                  placeholder="eg. 00000000"
                />
              </div>
            </div>
            <button class="login_button" type="submit">
              Register
            </button>

            <p class="register_info">
              Already have an account?{" "}
              <Link to="/login" class="loginLink">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>

      <p class="copy_right">
        &copy; 2024 KNUST College of Science Academic Resources Platform
        Registration Portal. All rights reserved.
      </p>
    </div>
  );
}
