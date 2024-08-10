import React, { useState } from "react";
import COSLogo from "../assets/Images/coslogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Css/home.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(true);

  function handleMenu() {
    setShowMenu((prev) => !prev);
  }

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
                <Link to="/login" class={"login"}>
                  Log In
                </Link>
                <Link to="/register" class="register">
                  Register
                </Link>
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
          <li>
            <a href="/templates/Admin_dashboard.html">Admin dashboard</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
