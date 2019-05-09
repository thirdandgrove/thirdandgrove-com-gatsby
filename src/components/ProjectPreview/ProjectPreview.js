import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const ProjectPreview = ({ project }) => (
  <div
    css={css`
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
    `}
    key={project.title}
  >
    <h3>{project.title}</h3>
    <img
      alt='project logo'
      src={project.relationships.field_logo.localFile.childImageSharp.fluid.src}
    />
  </div>
);

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectPreview;
