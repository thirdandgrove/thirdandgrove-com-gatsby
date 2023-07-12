import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import FadeInDirection from '../FadeInDirection';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import FullWidthSection from '../FullWidthSection';
import { container, fonts, mediaQueries, weights } from '../../styles';
import EasterEggContext from '../../context/EasterEggContext';
import Button from '../Button/Button';

const ServiceComponent = ({ data }) => {
  const {
    field_header_text: header,
    field_body: body,
    field_image: imageData,
    field_primary_cta: cta,
    field_image_align: order,
    field_link_id: id,
  } = data;
  const image = data.relationships.field_image;
  return (
    <FullWidthSection
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
      <div id={id} css={container.medium}>
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
              <FadeInDirection
                distance={'200px'}
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
                <div>
                  <GatsbyImage
                    image={image.localFile.childImageSharp.gatsbyImageData}
                    alt={imageData.alt}
                    title={imageData.title}
                    css={css`
                      display: ${context.easterEgg ? 'none' : 'block'};
                    `}
                  />
                </div>
              </FadeInDirection>
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
                  <Button>
                    <Link to={cta.url && cta.url.replace('entity:', '')}>
                      {cta.title}
                    </Link>
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
