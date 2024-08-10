import React from "react";
import COSLogo from "../assets/Images/COS LOG.png";
import Logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div class="login_page">
        <div class="main_interface">
          <div class="left_side">
            <img src={COSLogo} alt="" />
            <p>Knust College of Science</p>
            <p>
              Please log in with your personal information to stay connected
              with us
            </p>
          </div>

          <div class="right_side">
            <div class="knust_logo">
              <img src={Logo} alt="" />
              <p>Login</p>
            </div>

            <div class="login_inputs">
              <div class=" input_group  username_input">
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

              <div class=" input_group  password_input">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter passsword"
                />
              </div>

              <div class=" input_group  student_ID_input">
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
              Log In
            </button>

            <p class="register_info">
              Don't have an account?{" "}
              <Link to="/register" class="loginLink">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>

      <p class="copy_right">
        &copy; 2024 KNUST College of Science Academic Resources Platform Login
        Portal. All rights reserved.
      </p>
    </div>
  );
}
