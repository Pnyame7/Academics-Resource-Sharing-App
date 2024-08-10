import React from "react";
import NavBar from "../Components/NavBar";
import BackgroundVideo from "../assets/Images/exams.mp4";
import JaneDoePic from "../assets/Images/Jane_doe.webp";
import MaryJohnsonPic from "../assets/Images/Mary_Johnson.webp";
import JohnSmithPic from "../assets/Images/John_smith.webp";
import Footer from "../Components/Footer";
import "../Css/home.css";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div class="container">
        <div class="backgroundclip">
          <video autoPlay loop muted playsInline id="background-video">
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div class="content">
          <h1>Welcome to KNUST College of Science Student Learning Support</h1>
          <p>Your central hub for academic resources and peer support</p>
        </div>

        <div class="purpose">
          <h1>Our Mission,Vision and Goal</h1>
          <div class="mission_vision_goal_content">
            <div class="vision">
              <h2>Our Vision</h2>
              <p>
                To empower every student at the College of Science with seamless
                access to academic resources and collaborative tools, fostering
                a supportive and innovative learning environment.
              </p>
            </div>
            <div class="mission">
              <h2>Our Mission</h2>
              <p>
                We aim to provide a user-friendly platform where students can
                easily access lecture notes, past exam questions, and other
                essential academic materials. Our mission is to enhance the
                academic experience through comprehensive resource availability
                and peer-to-peer collaboration.
              </p>
            </div>
            <div class="goals">
              <h2>Our Goals</h2>
              <ul>
                <li>
                  Centralize access to academic resources for easy retrieval.
                </li>
                <li>
                  Facilitate efficient study sessions and exam preparations.
                </li>
                <li>Promote peer support and collaborative learning.</li>
                <li>
                  Continuously improve the platform based on student feedback
                  and technological advancements.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="features">
        <h2>Features</h2>
        <div class="features_list">
          <ul>
            <li>
              Comprehensive repository of lecture notes and past exam questions.
            </li>
            <li>
              User-friendly search functionality to quickly find resources.
            </li>
            <li>Discussion forums for academic collaboration and support.</li>
            <li>
              Regular updates and notifications about new resources and
              features.
            </li>
          </ul>
        </div>
      </div>

      <div class="testimonials">
        <h1>Testimonials</h1>

        {/* <!----------John Doe Testimonial---------> */}
        <div class="Jane_doe">
          <p>
            "This platform has been a game-changer for my studies! The vast
            array of academic resources and easy-to-navigate interface have made
            finding relevant study materials a breeze. I particularly love the
            seamless integration with our course modules, which saves me so much
            time. Highly recommended to all KNUST College of Science students!"
          </p>

          <div class="img_name">
            <img src={JaneDoePic} alt="" />
            <p>Jane Doe </p>
            <p>Computer Science Student</p>
          </div>
        </div>
        {/* <!----------Mary Johnson Testimonial---------> */}
        <div class="Mary_Johnson">
          <p>
            "My grades have improved significantly since I began using this
            platform. The easy access to past exam papers and study guides helps
            me prepare thoroughly for my tests. It's a must-have resource for
            every KNUST student."
          </p>

          <div class="img_name">
            <img src={MaryJohnsonPic} alt="" />
            <p>Mary Johnson </p>
            <p>Physics Student</p>
          </div>
        </div>
        {/* <!----------John Smith Testimonial---------> */}
        <div class="John_smith">
          <p>
            "Using this platform has significantly improved my academic
            performance. The resources are well-organized and easily accessible,
            making it convenient for me to find study materials and past exam
            papers. It's truly a game-changer for KNUST students!"
          </p>

          <div class="img_name">
            <img src={JohnSmithPic} alt="" />
            <p>John Smith </p>
            <p>Chemistry Student</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
