import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../utils/queries";
import { repoLinks } from "../components/repoLinks";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  console.log("data", data);
  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error.message}</p>;

  const projectList = data?.projects || {};
  console.log("projectList", projectList);
  console.log("repoLinks", repoLinks); // Add this line to log repoLinks

  if (!projectList.length) {
    return <h3>No Projects Yet</h3>;
  }

  return (
    <div className="project-list">
      <h2 className="proj-head">Projects</h2>
      <div className="projects">
        {projectList.map((project) => (
          <div key={project._id} className="project-card">
            <h3>{project.name}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
            </a>
            <div className="project-details">
              {repoLinks[project._id] && (
                <a
                  href={repoLinks[project._id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right column for static repository links */}
      <div className="repo-column">
        <div className="repo">Repositories</div>
        <div className="repo-links">
          {/* Static buttons for repo links */}
          <button
            className="repo-link-button"
            onClick={() =>
              window.open(
                "https://github.com/westmarquest/Javascript-Quiz",
                "_blank"
              )
            }
          >
            Javascript Test
          </button>
          <button
            className="repo-link-button"
            onClick={() =>
              window.open(
                "https://github.com/westmarquest/weather-app",
                "_blank"
              )
            }
          >
            Forecast
          </button>
          <button
            className="repo-link-button"
            onClick={() =>
              window.open("https://github.com/jahncalabrese/Skate-4", "_blank")
            }
          >
            Skate App
          </button>
          <button
            className="repo-link-button"
            onClick={() =>
              window.open(
                "https://github.com/NPetkas/app-workstation",
                "_blank"
              )
            }
          >
            Workstation
          </button>
          <button
            className="repo-link-button"
            onClick={() =>
              window.open(
                "https://github.com/westmarquest/notetakerapp",
                "_blank"
              )
            }
          >
            Note Taker
          </button>
          <button
            className="repo-link-button"
            onClick={() =>
              window.open(
                "https://github.com/westmarquest/Scheduler3",
                "_blank"
              )
            }
          >
            Scheduler
          </button>
          <button
            className="repo-link-button"
            onClick={() =>
              window.open("https://github.com/westmarquest/Report", "_blank")
            }
          >
            Portfolio
          </button>
        </div>
      </div>

      <div className="click-here">Click to visit site👉</div>
    </div>
  );
};

export default Projects;
