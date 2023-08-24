import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import { fonts, weights, mediaQueries, container } from '../../styles';

const TestimonialPreviewSlide = ({ article }) => {
  const Card = styled.div`
    opacity: 1 !important;
    padding: 0;

    h3 {
      margin: 15px 20px 20px;
      font-weight: ${weights.bold};
      font-size: 21px;
      line-height: 1.57;

      ${mediaQueries.phoneLarge} {
        margin: 0 0 30px;
        font-size: 48px;
        line-height: 1.375;
        letter-spacing: -0.2px;
      }
    }
    footer {
      margin: 0 20px;
      font-family: ${fonts.sans};
      font-weight: ${weights.light};
      font-size: 15px;
      line-height: 1.7;

      ${mediaQueries.phoneLarge} {
        margin: 0;
        letter-spacing: 0.2px;
      }
    }
  `;

  return (
    <Card>
      <span
        css={[
          container.max,
          css`
            display: block;
            transition: 1s cubic-bezier(0.86, 0, 0.07, 1) padding-left,
              1s cubic-bezier(0.86, 0, 0.07, 1) padding-right;

            ${mediaQueries.phoneLarge} {
              display: flex;
              align-items: center;
            }

            ${mediaQueries.desktop} {
              padding: 0;
              margin-left: 6rem;
              width: 90%;
              transition: 1s cubic-bezier(0.86, 0, 0.07, 1) margin-left;
            }

            .slick-current + .slick-slide & {
              // Making the next slide peek in from the right.
              padding-left: 0;
              padding-right: 40px;
            }
          `,
        ]}
      >
        {article.childImageSharp && (
          <div
            css={css`
              flex: 0 0 38%;
            `}
          >
            <GatsbyImage
              image={getImage(article.childImageSharp.squareImage)}
              alt={article.title}
            />
          </div>
        )}
        <div
          css={css`
            flex: 0 0 43%;

            ${mediaQueries.phoneLarge} {
              margin-left: 9.3%;
            }
          `}
        >
          <div>
            <h3>{article.title}</h3>
          </div>
        </div>
      </span>
    </Card>
  );
};

TestimonialPreviewSlide.propTypes = {
  article: PropTypes.object.isRequired,
};

export default TestimonialPreviewSlide;
