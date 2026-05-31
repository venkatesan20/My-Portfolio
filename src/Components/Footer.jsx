import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
     <footer className="footer">

      <h2 style={{color:'#49de99'}}>Venkatesan R</h2>

      <p className="footer-role">
        Java Full Stack Developer | Web Developer | SQL Developer
      </p>

      <div className="footer-icons">

        <a href="https://github.com/venkatesan20">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/venkatesan-r2003?utm_source=share_via&utm_content=profile&utm_medium=member_android">
          <FaLinkedin />
        </a>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=venkatesannaveen976@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <p className="footer-text">
        Designed & Developed with <FaHeart className="heart" />
        using React.js
      </p>

      <p className="copyright">
        © 2026 Venkatesan R. All Rights Reserved.
      </p>

    </footer>
  )
}

export default Footer