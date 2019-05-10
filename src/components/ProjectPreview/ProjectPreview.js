import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Button from '../Button';
import ImageCollage from './ImageCollage';

const ProjectPreview = ({ project, index }) => (
  <div
    css={css`
      display: flex;
      height: 650px;
      max-width: 100%;
      justify-content: center;
      align-items: center;
      padding: 3rem;
      section {
        z-index: 2;
        h3 {
          width: 150px;
          height: 40px;
          color: #282829;
          font-family: Canela-Thin;
          font-size: 36px;
          font-weight: 100;
          letter-spacing: 0.45px;
          line-height: 76px;
          margin-bottom: 30px;
        }
        h1 {
          width: 1120px;
          height: 222px;
          color: #282829;
          font-family: Canela;
          font-size: 104px;
          font-weight: 900;
          letter-spacing: 1.39px;
          line-height: 98px;
          margin: 5rem 0 3rem 0;
        }
      }
    `}
    key={project.title}
  >
    <section>
      <h3>Our Work</h3>
      <h1>{project.title}</h1>
      <Button>view case study</Button>
    </section>
    <ImageCollage
      images={{ primary: project.relationships.field_logo.localFile.publicURL }}
      index={index}
    />
  </div>
);

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectPreview;
