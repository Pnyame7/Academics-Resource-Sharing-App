import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import COSLogo from "../assets/Images/COS LOG.png";
import Logo from "../assets/Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Components/authContext";
// import "../Css/register.css";

export default function Login() {
  const [username, setUserName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { setAuth } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/account/login",
        {
          username,
          studentID,
          password,
        },
        { withCredentials: true },
        { body: JSON.stringify({ username, studentID, password }) }
      );

      const data = res.data.token;

      localStorage.setItem("auth", data);
      setAuth(localStorage);

      enqueueSnackbar(res.data.msg, { variant: "success" });
      navigate("/student/dashboard");
    } catch (error) {
      console.log("ERROR: ", error.response.data.msg);
      enqueueSnackbar(error.response.data.msg, { variant: "error" });
    }
  };
  return (
    <div className="registerBody">
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
            <form onSubmit={handleSubmit}>
              <div class="login_inputs">
                <div class=" input_group  username_input">
                  <p>Username</p>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    title="Username must contain only letters and numbers"
                    // required
                    placeholder="eg. username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div class=" input_group  password_input">
                  <p>Password</p>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter passsword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div class=" input_group  student_ID_input">
                  <p>Student ID</p>
                  <input
                    type="number"
                    name="Student_ID"
                    id="Student_id"
                    placeholder="eg. 00000000"
                    value={studentID}
                    onChange={(e) => setStudentID(e.target.value)}
                  />
                </div>
              </div>
              <button class="login_button" type="submit">
                Log In
              </button>
            </form>
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
