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
      section {
        /* position: absolute; */
        h3 {
          width: 150px;
          height: 40px;
          color: #282829;
          font-family: Canela;
          font-size: 36px;
          font-weight: 100;
          letter-spacing: 0.45px;
          line-height: 76px;
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
    <ImageCollage images={{}} index={index} />
  </div>
);

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectPreview;
