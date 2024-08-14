import React from "react";
import { Link } from "react-router-dom";
import "../Css/home.css";

export default function Footer() {
  return (
    <div>
      <div class="footer-container">
        <div class="footer-about">
          <h3>About Us</h3>
          <p>
            KNUST College of Science Academic Resources Portal is dedicated to
            providing students with easy access to academic materials, fostering
            a collaborative and supportive learning environment.
          </p>
        </div>

        {/* Popular navigation links of the website */}

        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/student/dashboard">Student Dashboard</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>

        {/* Contact info of footer */}

        <div class="footer-contact">
          <div class="email">
            <span class="material-symbols-outlined  mail">mail</span>
            <span class="email_text">Email address</span>
            <p> support@knustresourcesportal.com</p>
          </div>

          <div class="contact">
            <span class="material-symbols-outlined call">call</span>
            <span class="telephone_text">Telephone</span>
            <p> +233 554 002 408</p>
            <p> +233 504 752 088</p>
          </div>

          <div class="address">
            <span class="material-symbols-outlined location">location_on</span>
            <span class="address_text">Address</span>
            <p> KNUST, College of Science, Kumasi, Ghana</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>
            &copy; 2024 KNUST College of Science Academic Resources Portal. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
