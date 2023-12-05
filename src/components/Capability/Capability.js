import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import FadeInDirection from '../FadeInDirection';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import EasterEggContext from '../../context/EasterEggContext';
import FullWidthSection from '../FullWidthSection';
import { useHasBeenVisible } from '../../hooks/useVisibility';
import { fonts, mediaQueries, container, weights } from '../../styles';

const Capability = ({
  imageSrc,
  imageAlt,
  imageGif,
  imageGifAlt,
  content,
  index,
  id,
  maxWidth,
}) => {
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

            a {
              text-decoration: underline;
            }
          `}
        >
          <EasterEggContext.Consumer>
            {context => (
              <FadeInDirection
                delay={0}
                distance={'200px'}
                css={css`
                  width: 100%;
                  margin-bottom: 20px;
                  position: relative;

                  ${mediaQueries.phoneLarge} {
                    flex: 0 0 ${index % 2 ? '51%' : '49%'};
                    width: ${index % 2 ? '51%' : '49%'};
                    margin-bottom: 0;
                  }
                `}
              >
                <div>
                  <GatsbyImage
                    image={imageSrc}
                    alt={imageAlt}
                    css={css`
                      display: ${context.easterEgg ? 'none' : 'block'};
                    `}
                  />
                  <img
                    src={imageGif}
                    alt={imageGifAlt}
                    css={css`
                      display: ${context.easterEgg ? 'block' : 'none'};
                      width: 100%;
                    `}
                  />
                </div>
              </FadeInDirection>
            )}
          </EasterEggContext.Consumer>

          <div
            css={css`
              position: relative;

              ${mediaQueries.phoneLarge} {
                flex: 0 0 ${index % 2 ? '39%' : '40%'};
                width: ${index % 2 ? '39%' : '40%'};
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
  imageGif: PropTypes.string.isRequired,
  imageGifAlt: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  maxWidth: PropTypes.bool,
};

Capability.defaultProps = {
  maxWidth: false,
};

export default Capability;
