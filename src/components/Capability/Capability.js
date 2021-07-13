import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { css } from '@emotion/react';
import Img from 'gatsby-image';
import loadable from '@loadable/component';

import { useHasBeenVisible } from '../../hooks/useVisibility';
import { fonts, mediaQueries, container, weights } from '../../styles';

const FullWidthSection = loadable(() => import('../FullWidthSection'));

const Capability = ({ imageSrc, imageAlt, content, index, id, maxWidth }) => {
  const nodeRef = useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  return (
    <FullWidthSection
      ref={nodeRef}
      height='0'
      padding='0'
      textAlign='left'
      css={css`
        &:first-of-type {
          margin-top: 20px;

          ${mediaQueries.phoneLarge} {
            margin-top: 175px;
          }
        }
      `}
    >
      <div id={id} css={maxWidth ? container.max : container.medium}>
        <div
          css={css`
            margin-bottom: 90px;

            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
              flex-direction: ${index % 2 ? 'row-reverse' : 'row'};
              align-items: center;
              margin-bottom: 170px;
            }

            h2 {
              font-size: 33px;
              font-weight: ${weights.bold};
            }

            p {
              font-weight: ${weights.light};
            }

            ul {
              margin: 0;

              li {
                font-family: ${fonts.sans};
                font-weight: ${weights.bold};
                font-variant-caps: all-small-caps;
                letter-spacing: 1px;
                list-style: none;
              }
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
                fadeIn={false}
                loading='eager'
                style={{ transform, opacity }}
                css={css`
                  width: 100%;
                  margin-bottom: 20px;

                  > div {
                    padding-bottom: 100% !important;
                  }

                  ${mediaQueries.phoneLarge} {
                    flex: 0 0 ${index % 2 ? '64%' : '49%'};
                    width: ${index % 2 ? '64%' : '49%'};
                    margin-bottom: 0;

                    > div {
                      padding-bottom: ${index % 2 ? '76% !important' : '100%'};
                      padding-bottom: ${index % 4 === 2 ? '131% !important' : '100%'};
                    }
                  }
                `}
              />
            )}
          </Spring>

          <div
            css={css`
              position: relative;

              ${mediaQueries.phoneLarge} {
                flex: 0 0 ${index % 2 ? '30%' : '40%'};
                width: ${index % 2 ? '30%' : '40%'};
              }
            `}
          >
            {content}
          </div>
        </div>
      </div>
    </FullWidthSection>
  );
};

Capability.propTypes = {
  imageSrc: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  maxWidth: PropTypes.bool,
};

Capability.defaultProps = {
  maxWidth: false,
};

export default Capability;
