import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Spring } from 'react-spring/renderprops-universal';
import { GatsbyImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';

import FullWidthSection from '../FullWidthSection';
import { container, fonts, mediaQueries, weights } from '../../styles';
import EasterEggContext from '../../context/EasterEggContext';
import { useHasBeenVisible } from '../../hooks/useVisibility';
import Button from '../Button/Button';
import { ensureTrailingSlash } from '../../util';

const ServiceComponent = ({ data }) => {
  const {
    field_header_text: header,
    field_body: body,
    field_image: imageData,
    field_primary_cta: cta,
    field_image_align: order,
  } = data;
  const image = data.relationships.field_image;

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
      <div id={header} css={container.medium}>
        <div
          css={css`
            margin-bottom: 90px;

            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
              flex-direction: ${'row-reverse'};
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

            section {
              margin: 0;

              p {
                font-family: ${fonts.sans};
                font-weight: ${weights.light};
                font-size: 16px;
                letter-spacing: 1px;
                list-style: none;
                margin-bottom: 10px;
              }
              ul {
                list-style: none;
                margin: 0;
                font-weight: ${weights.medium};
                text-align: left;
                li {
                  font-family: ${fonts.sans};
                  font-weight: ${weights.bold};
                  font-variant-caps: all-small-caps;
                  letter-spacing: 1px;
                  list-style: none;
                }
              }
            }

            a {
              text-decoration: underline;
            }
          `}
        >
          <EasterEggContext.Consumer>
            {context => (
              <Spring
                delay={0}
                to={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
                  opacity: isVisible ? '1' : '0',
                }}
              >
                {({ transform, opacity }) => (
                  <div
                    css={css`
                      width: 100%;
                      margin-bottom: 20px;
                      position: relative;
                      order: 1;
                      ${mediaQueries.phoneLarge} {
                        flex: 0 0 ${'49%'};
                        width: ${'49%'};
                        margin-bottom: 0;
                      }
                    `}
                  >
                    <GatsbyImage
                      image={image.localFile.childImageSharp.gatsbyImageData}
                      alt={imageData.alt}
                      title={imageData.title}
                      css={css`
                        display: ${context.easterEgg ? 'none' : 'block'};
                        transform: ${transform};
                        opacity: ${opacity};
                      `}
                    />
                  </div>
                )}
              </Spring>
            )}
          </EasterEggContext.Consumer>

          <div
            css={
              order === 'left'
                ? css`
                    order: 0;
                    position: relative;
                    ${mediaQueries.phoneLarge} {
                      flex: 0 0 ${'40%'};
                      width: ${'40%'};
                    }
                  `
                : css`
                    order: 1;
                    position: relative;

                    ${mediaQueries.phoneLarge} {
                      flex: 0 0 ${'40%'};
                      width: ${'40%'};
                    }
                  `
            }
          >
            <>
              <h2>{header}</h2>
              <section dangerouslySetInnerHTML={{ __html: body.processed }} />
              <section
                css={css`
                  padding-top: 20px;
                `}
              >
                {cta && (
                  <Button
                    onClick={() =>
                      navigate(
                        ensureTrailingSlash(cta.uri.replace('internal:', ''))
                      )
                    }
                  >
                    {cta.title}
                  </Button>
                )}
              </section>
            </>
          </div>
        </div>
      </div>
    </FullWidthSection>
  );
};

ServiceComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServiceComponent;
