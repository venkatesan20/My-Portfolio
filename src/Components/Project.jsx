import React from "react";
import TodoImage from "../assets/TodoImage.png";
import atmBankSys from "../assets/ATM Bank Sys.png"
import crs from "../assets/CRS.png"

const Project = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        <div className="project-card">
          <img
            src={atmBankSys}
            alt="ATM Banking System"
            className="project-image"
          />
          <h3 style={{color:"#38bdf8"}}>ATM Banking System</h3>
          <p>
            A web-based banking application with login, deposit, withdrawal,
            balance check, and transaction history features.
          </p>
          <div className="tech-stack">
            <span>Java</span>
            <span>Servlet</span>
            <span>JDBC</span>
            <span>MySQL</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          
            <div className="project-footer">
              <a href="https://github.com/venkatesan20/ATM-BANKING-SYSTEM" className="project-btn">
                View Project
              </a>
            </div>
          
        </div>

        <div className="project-card">
          <img
            src={crs}
            alt="Course Registery Stystem"
            className="project-image"
          />
          <h3 style={{color:"#38bdf8"}}>Course Registration System</h3>
          <p>
            A course management system for adding, viewing, and managing course
            details using Spring Boot REST API and frontend integration.
          </p>
          <div className="tech-stack">
            <span>Spring Boot</span>
            <span>REST API</span>
            <span>Data JPA</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>MySQL</span>
            <span>JavaScript</span>
          </div>
          
            <div className="project-footer">
              <a href="https://github.com/venkatesan20/Course-Registry-System" className="project-btn">
                View Project
              </a>
            </div>
          
        </div>

        <div className="project-card">
          <img
            src={TodoImage}
            alt="Todo App"
            className="project-image"
          />
          <h3 style={{color:"#38bdf8"}}>React To-Do List</h3>
          <p>
            A React task management app with add, edit, delete, and completed
            task features using React state management.
          </p>
          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>React Icons</span>
          </div>
          
            <div className="project-footer">
              <a href="https://venkatesan-todo-react-app.netlify.app/" className="project-btn">
                View Project
              </a>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Project;
