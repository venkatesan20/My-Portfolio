import React from 'react'

const About = () => {
  return (
        <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-card">
          <h3>Who am I?</h3>
          <p>
            I am Venkatesan R, a final-year Computer Science Engineering
            student passionate about Full Stack Development.
          </p>
          <p>
            I build responsive web applications using React, Java, Spring Boot,
            and MySQL. I enjoy learning new technologies and creating real-world
            projects.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <h3>10+</h3>
            <p>Technologies</p>
          </div>

          <div className="stat-box">
            <h3>2+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-box">
            <h3>2026</h3>
            <p>Graduate</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About