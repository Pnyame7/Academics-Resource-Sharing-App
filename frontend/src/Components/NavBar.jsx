import React, { useState } from "react";
import axios from "axios";
import COSLogo from "../assets/Images/coslogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import "../Css/home.css";
import { useAuthContext } from "./authContext";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(true);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { auth } = useAuthContext();
  const { setAuth } = useAuthContext();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/account/logout", {
        withCredentials: true,
      });
      localStorage.removeItem("auth");
      setAuth(null);
      navigate("/login");
    } catch (error) {
      enqueueSnackbar(error.response.data.msg, { variant: "error" });
    }
  };

  function handleMenu() {
    setShowMenu((prev) => !prev);
  }
  console.log("Data: ", auth);
  return (
    <div>
      <header>
        <div class="navbar">
          <nav class="navigationbar">
            {/* Style this NavIcon */}
            <FontAwesomeIcon
              icon={showMenu ? faBars : faXmark}
              className="fontAw"
              onClick={handleMenu}
              bounce={showMenu ? false : true}
            />

            {/* nav left */}
            <div class="navleft">
              <p class="sidebar_icon">Dashboards</p>
              <p>
                <img src={COSLogo} alt="" />
                COLLEGE OF SCIENCE
              </p>
            </div>

            {/* nav center */}
            <div class="navcenter">
              <form>
                <div class="search">
                  <span class="material-symbols-outlined search-icon">
                    {" "}
                    search
                  </span>
                  <input
                    class="search-input"
                    type="search"
                    placeholder="search"
                  />
                </div>
              </form>
            </div>

            {/* nav right */}
            <div class="navright">
              <Link to="/" class="home">
                Home
              </Link>

              <Link to="/about" class="about">
                About{" "}
              </Link>

              <div class="registration">
                <Link onClick={handleLogout} class={"login"}>
                  {auth ? "Log Out" : "Log In"}
                </Link>
                {auth ? (
                  ""
                ) : (
                  <Link to="/register" class="register">
                    Register
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* Style for This */}
      <div class={`${showMenu ? "sidebar" : ""}`}>
        <ul>
          <li>
            <Link to="/student/dashboard">Student dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
