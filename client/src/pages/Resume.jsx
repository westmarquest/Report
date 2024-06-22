// components/Resume/index.jsx
import React from "react";
import resumeImage from "../assets/MarquesTurner-RES24.jpg";

const Resume = () => {
  return (
    <div
      className="resume-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={resumeImage} alt="Resume" className="resume-image" />{" "}
      <a
        href="https://drive.google.com/file/d/10D5K7R1j6_HZadufPT8c3NOI8VdP0wtL/view?usp=share_link"
        download="MarquesTurner-RES24.pdf"
        className="download-link"
      >
        Download PDF
      </a>
      {/* <h2>Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Web APIs</li>
        <li>Third-Party APIs</li>
        <li>Server-Side APIs</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>ORM</li>
        <li>PWA</li>
        <li>React</li>
        <li>MERN</li>
        <li>Adobe Creative Suite</li>
        <li>Ableton Live</li>
        <li>FCPX</li>
        <li>Website Development</li>
        <li>Digital Advertisement Projects</li>
      </ul> */}
    </div>
  );
};

export default Resume;
