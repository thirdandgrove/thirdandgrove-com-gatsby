import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import { colors, fonts, weights, mediaQueries } from '../../styles';

const ArticlePreview = ({ article }) => {
  const Card = styled.div`
    width: 100%;
    margin-bottom: 40px;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 90px;
    }

    div {
      /* @TODO Get actual image in here */
      height: 400px;
      background-color: ${colors.gray};
    }

    h2 {
      margin: 32px 0 14px;
      font-weight: ${weights.bold};
      font-size: 27px;
      line-height: 1.44;

      ${mediaQueries.phoneLarge} {
        width: 80%;
        margin: 50px auto 30px;
        font-size: 33px;
        line-height: 1.58;
      }
    }
    footer {
      font-family: ${fonts.sans};
      font-weight: ${weights.light};
      font-size: 15px;
      line-height: 2.4;

      ${mediaQueries.phoneLarge} {
        width: 80%;
        margin: 0 auto;
      }
    }
  `;
  return (
    <Card>
      <Link
        css={css`
          display: block;
          text-decoration: none;
          color: ${colors.darkgrayFaded};
          transition: 0.3s ease color;

          &:hover,
          &:focus {
            color: ${colors.darkgray};
          }
        `}
        to={article.path.alias}
      >
        <Fade bottom>
          <div />
        </Fade>
        <h2>{article.title}</h2>
        <footer>
          {`${article.created} - ${article.relationships.uid.name}`}
        </footer>
      </Link>
    </Card>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticlePreview;
