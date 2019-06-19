/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import Button from '../Button';
import { TextWrapper } from '../Prefooter';
import SplitSection from '../SplitSection';
import { colors, fonts, weights, mediaQueries } from '../../styles';

const pStyles = css`
  margin-bottom: 25px;
  font-size: 24px;
  font-family: ${fonts.serif};
  font-weight: ${weights.thin};
  ${mediaQueries.phoneLarge} {
    margin-bottom: 0;
  }
`;

const h2Styles = css`
  margin-bottom: 35px;
  font-size: 45px;
  line-height: 1.7;
  letter-spacing: 0.6px;
  font-weight: ${weights.black};
  ${mediaQueries.phoneLarge} {
    margin-bottom: 0;
    font-size: 72px;
    line-height: 1;
    letter-spacing: 0.96px;
  }
`;

const wrapperStyles = css`
  /* TODO: change data model to provide a color. */
  background-color: ${colors.yellow};
  min-height: 300px;
  padding: 40px 20px;
  text-align: center;

  ${mediaQueries.phoneLarge} {
    min-height: 610px;
    padding-top: 20px;
    padding-bottom: 70px;
    justify-content: space-evenly;
  }
`;

const imgStyles = css`
  height: 300px;

  ${mediaQueries.phoneLarge} {
    height: auto;
  }

  div {
    height: 100%;
    padding-bottom: 0 !important; // Blame Gatsby :p
  }
`;

const Prefooter = ({ data }) => (
  <SplitSection>
    <TextWrapper css={wrapperStyles}>
      {/* TODO: change data model to reference another article. */}
      <p css={pStyles}>Up Next</p>
      <h2 css={h2Styles}>Another Client</h2>
      <Button>View Case Study</Button>
    </TextWrapper>
    <Img
      css={imgStyles}
      fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
    />
  </SplitSection>
);

Prefooter.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Prefooter;
