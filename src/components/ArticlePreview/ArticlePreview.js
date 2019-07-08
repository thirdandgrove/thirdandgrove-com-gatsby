import React, { useRef } from 'react';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

// import VisibilitySensor from '../VisibilitySensor/VisibilitySensor';
import { useHasBeenVisible } from '../../hooks/useVisibility';
import { colors, fonts, weights, mediaQueries } from '../../styles';

const ArticlePreview = ({ article }) => {
  const nodeRef = useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  const Card = styled.div`
    width: 100%;
    margin-bottom: 40px;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 90px;
    }

    div {
      /* @TODO Get actual image in here */
      height: 400px;
      background: ${colors.gray};
      transition-timing-function: ease;
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
    <span ref={nodeRef}>
      <Spring
        delay={0}
        to={{
          transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
          opacity: isVisible ? '1' : '0',
        }}
      >
        {({ transform, opacity }) => (
          <Card style={{ transform, opacity }}>
            <Link
              css={css`
                display: block;
              `}
              to={article.path.alias}
            >
              <div />
              <h2>{article.title}</h2>
              <footer>
                {`${article.created} - ${article.relationships.uid.name}`}
              </footer>
            </Link>
          </Card>
        )}
      </Spring>
    </span>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticlePreview;
