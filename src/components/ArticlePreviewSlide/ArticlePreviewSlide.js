import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import { colors, fonts, weights, mediaQueries, container } from '../../styles';

const ArticlePreviewSlide = ({ article }) => {
  const Card = styled.div`
    h3 {
      margin: 15px 20px 35px;
      font-weight: ${weights.bold};
      font-size: 27px;
      line-height: 1.44;

      ${mediaQueries.phoneLarge} {
        margin: 0 0 30px;
        font-size: 57px;
        line-height: 1.26;
      }
    }
    footer {
      margin: 0 20px;
      font-family: ${fonts.sans};
      font-weight: ${weights.light};
      font-size: 15px;
      line-height: 2.4;

      ${mediaQueries.phoneLarge} {
        margin: 0;
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

            ${mediaQueries.phoneLarge} {
              display: flex;
              align-items: center;
            }

            .slick-current + .slick-slide & {
              margin-left: 0;
              padding-left: 0;
            }
          `,
        ]}
      >
        <div
          css={css`
            height: 400px;
            flex: 0 0 38%;
            background: ${colors.gray};
          `}
        />
        <div
          css={css`
            flex: 0 0 43%;
            ${mediaQueries.phoneLarge} {
              margin-left: 9.3%;
            }
          `}
        >
          <Link to={article.path.alias}>
            <h3>{article.title}</h3>
            <footer>
              {`${article.created} - ${article.relationships.uid.name}`}
            </footer>
          </Link>
        </div>
      </span>
    </Card>
  );
};

ArticlePreviewSlide.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticlePreviewSlide;
