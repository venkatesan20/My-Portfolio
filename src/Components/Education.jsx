import React from "react";
import { FaGraduationCap } from "react-icons/fa";


const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="section-title">
        <FaGraduationCap /> Education
      </h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>B.E Computer Science Engineering</h3>
            <p>Mahendra Institute of Engineering and Technology</p>
            <span>2022 - 2026 | CGPA: 7.9</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>12th Standard</h3>
            <p>Government Higher Secondary School</p>
            <span>2021 - 2022 | Percentage: 75%</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>10th Standard</h3>
            <p>Government Higher Secondary School</p>
            <span>2019 - 2020 | Percentage: 80%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
