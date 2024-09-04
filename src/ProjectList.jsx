function ProjectList({projects}) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <img key={index} className="project" src={project.img} alt={project.category} />
      ))}
    </div>
  );
};

export default ProjectList;
