import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMysql,
  SiSpringboot,
  SiHibernate,
  SiBootstrap,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const Skill = () => {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {/* Frontend */}

        <div className="skill-box">
          <h3>Frontend Development</h3>

          <div className="skill-tags">
            <span>
              <FaHtml5 className="skill-icon html" />
              HTML5
            </span>

            <span>
              <FaCss3Alt className="skill-icon css" />
              CSS3
            </span>

            <span>
              <FaJs className="skill-icon js" />
              JavaScript
            </span>

            <span>
              <FaReact className="skill-icon react" />
              React.js
            </span>

            <span>
              <SiBootstrap className="skill-icon bootstrap" />
              Bootstrap
            </span>
          </div>
        </div>

        {/* Backend */}

        <div className="skill-box">
          <h3>Backend Development</h3>

          <div className="skill-tags">
            <span>
              <FaJava className="skill-icon java" />
              Java
            </span>

            <span>
              <FaDatabase className="skill-icon db" />
              JDBC
            </span>

            <span>
              <FaDatabase className="skill-icon db" />
              Servlets
            </span>

            <span>
              <FaDatabase className="skill-icon db" />
              JSP
            </span>

            <span>
              <SiSpringboot className="skill-icon spring" />
              Spring Boot
            </span>

            <span>
              <TbApi className="skill-icon api" />
              REST API
            </span>

            <span>
              <SiHibernate className="skill-icon hibernate" />
              Hibernate
            </span>
          </div>
        </div>

        {/* Database */}

        <div className="skill-box">
          <h3>Database</h3>

          <div className="skill-tags">
            <span>
              <SiMysql className="skill-icon mysql" />
              MySQL
            </span>

            <span>
              <FaDatabase className="skill-icon db" />
              SQL
            </span>

            <span>
              <FaDatabase className="skill-icon db" />
              Joins
            </span>

            <span>
              <FaDatabase className="skill-icon db" />
              Database Design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
