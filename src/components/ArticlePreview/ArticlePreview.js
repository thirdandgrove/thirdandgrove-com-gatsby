import React, { useRef } from 'react';
import FadeInDirection from '../FadeInDirection';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import { useHasBeenPartlyVisible } from '../../hooks/useVisibility';
import { fonts, weights, mediaQueries } from '../../styles';
import { ensureTrailingSlash } from '../../util';

const ArticlePreview = ({ article }) => {
  const Card = styled.div`
    width: 100%;
    margin-bottom: 116px;
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
    ${mediaQueries.phoneLarge} {
      margin-bottom: 90px;
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
    <FadeInDirection>
      <Card>
        <Link
            css={css`
              display: block;
            `}
            to={ensureTrailingSlash(article.path.alias)}
          >
            {article.relationships.field_image && (
              <GatsbyImage
                image={article.relationships.field_image.localFile.childImageSharp.gatsbyImageData}
                alt={article.field_image.alt} />
            )}

            <h2>{article.title}</h2>
            <footer>{`${article.created}`}</footer>
        </Link>
      </Card>
    </FadeInDirection>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticlePreview;
