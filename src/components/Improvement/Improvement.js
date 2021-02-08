import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { css } from '@emotion/react';
import Img from 'gatsby-image';

import { useHasBeenVisible } from '../../hooks/useVisibility';
import { container, mediaQueries } from '../../styles';
import hawaiianHost from '../LogoGrid/logos/hawaiian-host--black.png';
import badlands from '../LogoGrid/logos/badlands.png';

const logos = {
  badlands,
  'hawaiian-host': hawaiianHost,
};

const Improvement = ({ imageSrc, imageAlt, stats, id, brand }) => {
  const nodeRef = useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  return (
    <div
      id={id}
      ref={nodeRef}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;

        .stats-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .stats-container,
        .stat-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .stat-container {
          flex-direction: column;

          h4 {
            font-size: 80px;
            font-weight: bold;
            letter-spacing: -0.2px;
            line-height: 1.05;
            margin-bottom: 0;

            ${mediaQueries.tablet} {
              font-size: 100px;
            }
          }

          p {
            font-size: 20px;
            letter-spacing: 0.21px;
            line-height: 27px;
          }
        }

        ${container.min} ${mediaQueries.phoneLarge} {
          margin: 0;
          .stats-container {
            flex-direction: row;
          }
        }
      `}
    >
      <img
        src={logos[brand]}
        alt={brand}
        css={css`
          margin-bottom: 50px;
        `}
      />
      <div className='stats-container'>
        {stats.map(stat => (
          <div key={stat.description} className='stat-container'>
            <h4>{stat.percent}</h4>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
      <Spring
        delay={0}
        to={{
          transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
          opacity: isVisible ? '1' : '0',
        }}
      >
        {({ transform, opacity }) => (
          <Img
            fluid={imageSrc}
            alt={imageAlt}
            style={{ transform, opacity }}
            css={css`
              width: 100%;
              max-height: 353px;
              margin-bottom: 0;

              > div {
                padding-bottom: 100% !important;
              }

              ${mediaQueries.phoneLarge} {
                flex: 0 0 100%;
                width: 100%;
                margin-bottom: 0;
              }
            `}
          />
        )}
      </Spring>
    </div>
  );
};

Improvement.prototype = {
  imageSrc: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  brand: PropTypes.node.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Improvement;
