import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech, index) => 
          <span key={index}>{tech}</span>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
