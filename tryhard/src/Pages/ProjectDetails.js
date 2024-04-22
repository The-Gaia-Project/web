import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch('../projects.json')
      .then(response => response.json())
      .then(data => {
        const proj = data.find(p => p.id === projectId);
        setProject(proj);
      });
  }, [projectId]);

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.imgUrl} alt={project.title} />
      <p>{project.description}</p>
      {project.details.map((detail, index) => (
        <div key={index}>
          <img src={detail.imgUrl} alt={`Detail ${index + 1}`} />
          <p>{detail.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectDetails;
