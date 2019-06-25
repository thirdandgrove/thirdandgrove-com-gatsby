import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Button from '../Button';
import { colors, fonts, weights, mediaQueries } from '../../styles';

import ImageCollage from './ImageCollage';

const ProjectPreview = ({ project, index }) => (
  <div
    css={css`
      text-align: center;

      ${mediaQueries.phoneLarge} {
        text-align: left;
      }

      h3 {
        font-size: 21px;
        letter-spacing: 0.26;
        font-weight: ${weights.thin};
        ${mediaQueries.phoneLarge} {
          font-size: 36px;
          line-height: 2.1;
          letter-spacing: 0.45px;
        }
      }

      h1 {
        font-size: 60px;
        line-height: 1;
        font-weight: ${weights.black};

        ${mediaQueries.phoneLarge} {
          font-size: 120px;
          line-height: 0.92;
          letter-spacing: 0;
        }
      }
    `}
    key={project.title}
  >
    <section>
      <h3>Our Work</h3>
      <h1>{project.title}</h1>
      <Button onClick={() => navigate(project.path.alias)}>
        view case study
      </Button>
    </section>
    <ImageCollage
      images={{
        primary:
          project.relationships.field_image.localFile.childImageSharp.fluid.src,
        secondary:
          project.relationships.field_secondary_image.localFile.childImageSharp
            .fluid.src,
        tertiary:
          project.relationships.field_tertiary_image.localFile.childImageSharp
            .fluid.src,
      }}
      index={index}
    />
  </div>
);

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectPreview;
