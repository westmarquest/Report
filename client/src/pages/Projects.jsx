import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../../server/utils/queries";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  console.log("data", data);
  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error.message}</p>;

  const projectList = data?.projects || {};
  console.log("projectList", projectList);
  if (!projectList.length) {
    return <h3>No Projects Yet</h3>;
  }

  return (
    <div className="project-list">
      <h2>Projects</h2>
      <div className="projects">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            {/* <p>{project.link}</p> */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
            </a>
            <div className="project-details"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
