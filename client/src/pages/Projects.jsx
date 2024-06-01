const Projects = ({ projects, title }) => {
  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  }

  return (
    <div className="project-list">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => (
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
