import React, { useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { css } from '@emotion/react';
import Img from 'gatsby-image';

import Button from '../Button';
import { useHasBeenVisible } from '../../hooks/useVisibility';
import { mediaQueries } from '../../styles';
import hawaiianHost from '../LogoGrid/logos/hawiian-host-logo--black.png';
import badlands from '../LogoGrid/logos/badlands.png';

const logos = {
  badlands,
  'hawaiian-host': hawaiianHost,
};

const Improvement = ({
  index,
  imageSrc,
  imageAlt,
  stats,
  id,
  content,
  brand,
  brandWidth,
  link,
  showButton,
}) => {
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
        margin-bottom: 100px;

        .stats-wrapper {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;

          ${mediaQueries.phoneLarge} {
            align-items: flex-start;
          }
        }

        .stats-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-right: 30px;
          margin-left: 30px;

          ${mediaQueries.phoneLarge} {
            margin-left: 0px;
            justify-content: space-between;
          }
        }

        .stat-container {
          ${mediaQueries.phoneLarge} {
            margin-left: 10px;
            margin-right: 10px;
          }

          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-left: 0;
          margin-right: 0;

          h4 {
            font-size: 45px;
            font-weight: bold;
            letter-spacing: -0.2px;
            margin-bottom: 0;

            ${mediaQueries.tablet} {
              font-size: 55px;
            }
          }

          p {
            font-size: 18px;
            font-weight: bold;
            line-height: 25px;
          }
        }

        ${mediaQueries.phoneLarge} {
          margin: 0 0 300px 0;
          flex-direction: ${index % 2 === 0 ? 'row-reverse' : 'row'};
          padding-left: ${index % 2 === 0 ? '140px' : '0px'};
          padding-right: ${index % 2 === 1 ? '140px' : '0px'};
        }
        :last-child {
          margin-bottom: 0px;
        }
      `}
    >
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
              margin-bottom: 50px;

              ${mediaQueries.phoneLarge} {
                flex: 0 0 80%;
                margin-left: ${index % 2 === 1 ? '-200px' : '10px'};
                margin-right: ${index % 2 === 0 ? '-200px' : '10px'};
              }
            `}
          />
        )}
      </Spring>
      <div className='stats-wrapper'>
        <img
          src={logos[brand]}
          alt={brand}
          css={css`
            width: ${brandWidth};
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
        <p>{content}</p>
        {showButton && (
          <Link to={link}>
            <Button>VIEW CASE STUDY</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

Improvement.propTypes = {
  imageSrc: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  brand: PropTypes.node.isRequired,
  stats: PropTypes.array.isRequired,
  brandWidth: PropTypes.string,
  index: PropTypes.number.isRequired,
  link: PropTypes.string,
  showButton: PropTypes.bool,
  content: PropTypes.string.isRequired,
};

Improvement.defaultProps = {
  brandWidth: '100%',
  showButton: false,
  link: '/',
};

export default Improvement;
