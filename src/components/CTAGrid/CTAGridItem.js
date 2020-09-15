import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { container, mediaQueries, weights, fonts, colors } from '../../styles';

const CTAGridItem = ({ icon, title, description, altStyle }) => {
  const ctaContainer = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
      margin-bottom: 48px;
      max-height: 57px;
    }

    h4 {
      font-size: 27px;
      ${mediaQueries.phoneLarge} {
        margin-bottom: 36px;
        font-size: 39px;
        line-height: 48px;
      }
    }

    p {
      font-weight: ${weights.thin};
    }
  `;

  const ctaContainerAlt = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px 0;
    border-bottom: none;

    ${mediaQueries.phoneLarge} {
      border-bottom: 0.25px solid rgba(41, 41, 42, 0.2);
    }

    img {
      margin-right: 12px;
      margin-bottom: 0;
    }

    h4 {
      font-family: ${fonts.sans};
      font-size: 16px;
      font-weight: ${weights.bold};
      margin: 0;
    }

    p {
    }

    &:nth-last-child(2),
    &:last-of-type {
      border-bottom: none;
    }
  `;
  return (
    <div css={!altStyle ? ctaContainer : ctaContainerAlt}>
      <img src={icon[0].node.publicURL} alt={description} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

CTAGridItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  altStyle: PropTypes.bool,
};

CTAGridItem.defaultProps = {
  icon: '',
  title: '',
  description: '',
  altStyle: false,
};

export default CTAGridItem;
