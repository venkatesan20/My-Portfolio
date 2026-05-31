import React from "react";
import {
  SiIntellijidea,
  SiPostman,
  SiMysql,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { SiEclipseide } from "react-icons/si";

const Tools = () => {
  return (
    <section id="tools" className="tools">
      <h2 className="section-title">Tools & Platforms</h2>

      <div className="tools-container">
        <div className="tool-card">
          <VscVscode />
          <h4>VS Code</h4>
        </div>

        <div className="tool-card">
          <SiIntellijidea />
          <h4>IntelliJ IDEA</h4>
        </div>

        <div className="tool-card">
          <SiEclipseide />
          <h4>Eclipse </h4>
        </div>

        <div className="tool-card">
          <SiGit />
          <h4>Git</h4>
        </div>

        <div className="tool-card">
          <SiGithub />
          <h4>GitHub</h4>
        </div>

        <div className="tool-card">
          <SiPostman />
          <h4>Postman</h4>
        </div>

        <div className="tool-card">
          <SiMysql />
          <h4>MySQL Workbench</h4>
        </div>

        <div className="tool-card">
          <FaJava />
          <h4>Apache Tomcat</h4>
        </div>
      </div>
    </section>
  );
};

export default Tools;
