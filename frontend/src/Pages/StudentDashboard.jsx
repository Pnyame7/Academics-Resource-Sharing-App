import React from "react";
import "../Css/studentDashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../Components/SideBar";

export default function StudentDashboard() {
  return (
    <div className="studentBody">
      <div class="sidebar_container">
        <SideBar />
        <div class="main-content">
          <span class="dashboard_up_text">Dashboard</span>
          <h3 class="up-text">Access Your Academic resource Here </h3>

          <div class="department-cards">
            <a
              href="https://drive.google.com/drive/folders/1JGE8gDBP8gQA7w41fdyVrr3k6H6LOlCt"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img src="/Assets/Images/acturial_science.jpg" class="logo" />
                  <h3>Actuarial Science Department</h3>
                </div>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1hGYiCwHxcJe-hTYJnNH8yjzcZUApgFci"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img
                    src="/Assets/Images/Computer_science_logo.jpg"
                    class="logo"
                  />
                  <h3>Computer Science Department</h3>
                </div>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1rAxSjTYLqM9jh8REBp-qhgOAhfuCSia_"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img
                    src="/Assets/Images/biochemistry_logo.png"
                    class="logo"
                  />
                  <h3>Biochemistry Department</h3>
                </div>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1ZyHSp5HGEcE9N65nYfd8q28nv0yp3HWT"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img
                    src="/Assets/Images/biological_science_logo.jpg"
                    class="logo"
                  />
                  <h3>Biological Science Department</h3>
                </div>
              </div>
            </a>

            <a
              href="https://drive.google.com/drive/folders/1XFUnBjd8ms_0CdjH9ALmCK8bHu5qnkaW"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img src="/Assets/Images/chemistry_logo.jpg" class="logo" />
                  <h3>Chemistry Department</h3>
                </div>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1oAmAFv_cP4rrr3DskBb7NzyuK2mFDS-f"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img
                    src="/Assets/Images/environmental_science_logo.jpg"
                    class="logo"
                  />
                  <h3>Environmental Science Department</h3>
                </div>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1C2kxDVLMpfNag-vDm1ByZ9Iy2D0-JC4W"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img
                    src="/Assets/Images/food_science_logo.jpg"
                    class="logo"
                  />
                  <h3>Food Science Department</h3>
                </div>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1gSQk9GavkDsV9-M4g5mihvMC8rJs_s6R"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img src="/Assets/Images/mathematics_logo.png" class="logo" />
                  <h3>Mathematics Department</h3>
                </div>
              </div>
            </a>

            <a
              href="https://drive.google.com/drive/folders/1JsJsfX8YLH5vh6WNxfCbS-3pHN1tJED3"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img src="/Assets/Images/meteorology.jpg" class="logo" />
                  <h3>Meteorology Department</h3>
                </div>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1X1wL4fQH7hgXZnNnvKDYEVs0nfFNpA0J"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img src="/Assets/Images/optometry_logo.jpg" class="logo" />
                  <h3>Optometry Department</h3>
                </div>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1fK6qEiwZL4t9wqw0yEtQH48BuAhkrH8f?usp=drive_link_"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img src="/Assets/Images/physics_logo.jpeg" class="logo" />
                  <h3>Physics Department</h3>
                </div>
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/19YlcQdBCMJ7dov_MCqnXnxkNycIg6p7n"
              class="main-link"
            >
              <div class="main">
                <div class="card">
                  <img src="/Assets/Images/statistics_logo.jpg" class="logo" />
                  <h3>Statistics Department</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
