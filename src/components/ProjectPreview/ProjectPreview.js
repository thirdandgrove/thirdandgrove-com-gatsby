import React from 'react';

const ProjectPreview = ({ project }) => (
  <div key={project.title}>
    <h3>{project.title}</h3>
    <img
      alt='project logo'
      src={project.relationships.field_logo.localFile.childImageSharp.fluid.src}
    />
  </div>
);

export default ProjectPreview;
