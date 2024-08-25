import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../Css/about.css";
import AntonioMunroePic from "../assets/Images/Antonio_munroe.jpeg";
import MichealBrownPic from "../assets/Images/Micheal_Brown.webp";
import JosephEwoolPic from "../assets/Images/Joseph_Ewool.jpeg";
import BrianSmithPic from "../assets/Images/Brian_smith.webp";

export default function About() {
  return (
    <div>
      <NavBar />
      <div class="coslib_img">
        <h1 className="text-6xl">About us</h1>
      </div>

      <div class="history">
        <h2>History</h2>
        <hr />

        <p>
          Our journey began in 2024, when a group of KNUST College of Science
          students identified a significant gap in the availability of
          accessible academic resources. Motivated by the desire to support
          their peers, we collaborated with faculty members to develop a
          platform that could provide essential academic materials. So far, our
          platform has evolved, incorporating feedback from students and faculty
          to continuously improve and expand our offerings. Today, we serve
          thousands of students, providing them with the tools they need to
          succeed academically.
        </p>
      </div>

      <div class="our_story">
        <h2>Our Story</h2>
        <p>
          Founded by a group of passionate students and educators, our platform
          was created to address the challenges faced by KNUST College of
          Science students in accessing quality academic resources. With a focus
          on collaboration and innovation, we aim to bridge the gap between
          students and the resources they need to excel.
        </p>
      </div>

      <div class="our_mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower KNUST College of Science students by
          providing a centralized platform for accessing academic resources,
          enhancing their learning experience, and fostering a collaborative
          academic environment. We are committed to ensuring that every student
          has the tools and support they need to achieve academic excellence.
        </p>
      </div>

      <div class="our_vision">
        <h2> Our Vision </h2>
        <p>
          Our vision is to become the go-to digital resource hub for KNUST
          College of Science students, promoting academic excellence and
          innovation through easy access to learning materials and support. We
          envision a future where every student can effortlessly access the
          resources they need to succeed and collaborate with peers and faculty
          in meaningful ways.
        </p>
      </div>

      <div class="our_offer">
        <h2>What We Offer</h2>
        <div class="list">
          <ul>
            <li>
              <span> Comprehensive Resource Library:</span>
              Our library includes a vast collection of textbooks, lecture
              notes, past exam papers, and supplementary materials curated to
              support a wide range of courses and academic needs.
            </li>

            <li>
              <span> Interactive Forums:</span>
              Our forums provide a dynamic space for students to engage in
              academic discussions, share knowledge, ask questions, and seek
              help from peers and professors. This fosters a collaborative
              learning environment.
            </li>

            <li>
              <span> Personalized Learning Experience:</span>
              We offer customized recommendations based on your academic
              interests and courses, ensuring that you have quick access to the
              most relevant resources.
            </li>

            <li>
              <span> Study Groups:</span>
              Connect with peers to form study groups, collaborate on projects,
              and prepare for exams together. Our platform makes it easy to find
              and join study groups for any subject.
            </li>
          </ul>
        </div>
      </div>

      <div class="team_members">
        <h3>Meet the Team </h3>

        <div class="members">
          {/* Team member Antonio Munroe */}
          <div class="Antonio_munroe">
            <p>
              Antonio has a background in Computer Science and is passionate
              about leveraging technology to improve educational outcomes.
            </p>

            <div class="img_name">
              <img src={AntonioMunroePic} />
              <p>Atonio Munroe </p>
              <p>Co-Founder & CEO</p>
            </div>
          </div>
          {/* Member Micheal Brown */}
          <div class="Micheal_Brown">
            <p>
              Michael specializes in developing scalable web applications and
              ensuring our platform runs smoothly.
            </p>

            <div class="img_name">
              <img src={MichealBrownPic} alt="" />
              <p>Micheal Brown </p>
              <p>Lead Developer</p>
            </div>
          </div>
          {/* Team member Joseph Ewool */}
          <div class="Joseph_Ewool">
            <p>
              Joseph is an experienced software developer with a focus on
              creating user-friendly educational platforms."
            </p>

            <div class="img_name">
              <img src={JosephEwoolPic} alt="" />
              <p>Joseph Ewool </p>
              <p>Chief Technology Officer</p>
            </div>
          </div>

          {/* Team member Brian Smith */}
          <div class="Brian_smith">
            <p>
              Brian curates and manages the vast library of academic resources
              available on our platform
            </p>

            <div class="img_name">
              <img src={BrianSmithPic} alt="" />
              <p>Brian Smith </p>
              <p>Head of Content</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
