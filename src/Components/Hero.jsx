import React from "react";
import profileImg from "../assets/profileImg.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Venkatesan R</span>
        </h1>

        <h2>
          I am a <span className="role-text"></span>
        </h2>

        <p className="about-text">
          I build responsive web applications using React, Java, Spring Boot,
          and MySQL. I enjoy creating clean UI designs and solving real-world
          problems through full stack development.
        </p>

        <div className="hero-buttons">
          <a
            href="/Resume/Venkatesan Resume.pdf"
            target="_blank"
            className="btn secondary"
            style={{ color: "green", fontWeight: "500" }}
          >
            Download Resume
          </a>
          <div className="social-icons">
            <a href="https://github.com/venkatesan20" target="_blank">
              <FaGithub />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/venkatesan-r2003?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=venkatesannaveen976@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Venkatesan R" />
      </div>
    </section>
  );
};

export default Hero;
