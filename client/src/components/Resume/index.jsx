import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <section className="skills">
        <h2>Skills</h2>
        <div className="technical-skills">
          <h3>Technical</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Web API's</li>
            <li>Third-Party API's</li>
            <li>Server-Side API's</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>ORM</li>
            <li>PWA's</li>
            <li>React</li>
            <li>MERN</li>
          </ul>
        </div>
        <div className="ux-ui-skills">
          <h3>UX/UI</h3>
          <ul>
            <li>Adobe Creative Suite</li>
            <li>Ableton Live</li>
            <li>FCPX</li>
            <li>Website Dev</li>
            <li>Digital Advert Projects</li>
          </ul>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Weather App</h3>
          <p>
            Developed a weather dashboard application to display current and
            forecasted weather conditions for multiple cities, facilitating trip
            planning for travelers - JavaScript, HTML, CSS, OpenWeather API,
            localStorage
          </p>
          <p>
            <a href="https://westmarquest.github.io/weather-app/">
              Weather App Demo
            </a>
          </p>
        </div>
        <div className="project">
          <h3>Note Taker</h3>
          <p>
            Using Express.js to write, save, and retrieve notes. Integrated the
            back end with the existing front end and deployed the application to
            Heroku. Express.js, Node.js, Javascript, Json File Manipulation
          </p>
          <p>
            <a href="https://note-taker-west-cb10c0a3fcaf.herokuapp.com/notes">
              Note Taker Demo
            </a>
          </p>
        </div>
      </section>

      <section className="employment">
        <h2>Employment History</h2>
        <div className="job">
          <h3>Photographer, Nordstrom, Los Angeles</h3>
          <p>January 2023 — Present</p>
          <p>
            Produce high-quality product photography for online shopping
            platforms, showcasing merchandise in detail for optimal customer
            engagement. Utilize advanced photography techniques to capture
            images, including 360-degree views and close-ups. Collaborate with
            the creative team to maintain visual consistency and adhere to brand
            standards.
          </p>
        </div>
        <div className="job">
          <h3>Producer, DIGIT prod., Los Angeles</h3>
          <p>January 2019 — Present</p>
          <p>
            Enhanced client engagement and conversion rates on an average of 30%
            through strategic social advertisement campaigns, translating client
            visions into dynamic film and audio productions. Leveraged skills in
            visual graphics, music composition, film editing, website
            development, and social media advertising to deliver tailored
            solutions that exceeded client expectations.
          </p>
          <p>
            <a href="https://adigitprod.wixsite.com/digitproductions">
              DIGIT prod. Website
            </a>
          </p>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>Full-Stack Development, UCLA, Los Angeles</p>
        <p>Business Admin, Sacramento State University</p>
      </section>
    </div>
  );
};

export default Resume;
