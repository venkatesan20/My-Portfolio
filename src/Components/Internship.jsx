import React from "react";
import internship from "../assets/internship.jpg"
import inte from "../assets/INT.png"

const Internship = () => {
  return (
    <section id="internship" className="internship">
      <h2 className="section-title">Internships</h2>

      <div className="internship-container">
        <div className="internship-card">
          <h3>Full Stack Development Intern</h3>
          <h4>Techvolt Pvt Ltd, Coimbatore</h4>
          <p>
            Completed a 30-day internship in Full Stack Development. Learned the
            fundamentals of Frontend Development, Backend Development, Database
            Management, and JDBC connectivity.
          </p>
          <span>July 2025 – August 2025</span>
          <center>
            <a
              href={internship}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              View Certificate
            </a>
          </center>
        </div>

        <div className="internship-card">
          <h3>Full Stack Development Intern</h3>
          <h4>Besant Technologies, Bengaluru</h4>
          <p>
            Completed a 4-month Full Stack Development training program. Gained
            hands-on experience in HTML, CSS, JavaScript, React, Java, JDBC,
            Servlets, Spring Boot, REST APIs, and MySQL.
          </p>
          <span>February 2026 – May 2026</span>
          <center>
            <a
              href={inte}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              View Certificate
            </a>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Internship;
