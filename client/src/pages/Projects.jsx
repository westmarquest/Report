import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../utils/queries";

const Projects = ({ projects, title }) => {
  const { loading, error, data } = useQuery(GET_PROJECTS, {
    skip: projects && projects.length > 0,
  });

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error.message}</p>;

  const projectList = projects.length ? projects : data?.projects;

  if (!projectList.length) {
    return <h3>No Projects Yet</h3>;
  }

  return (
    <div className="project-list">
      <h2>Projects</h2>
      <div className="projects">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.link}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
