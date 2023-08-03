import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import FullWidthSection from '../FullWidthSection';
import { colors, fonts } from '../../styles';
import { mediaQueries, mediaQueriesMax, weights } from '../../styles/css-utils';
import { useHasBeenVisible } from '../../hooks/useVisibility';
import Counter from '../Counter';

const Stats = ({ data }) => {
  const fieldStats = data?.relationships?.field_stats;
  const header = data?.field_header_text;
  const backgroundImage =
    data.relationships.field_media_background?.localFile.publicURL;
  const nodeRef = React.useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  const statWrapper = css`
    display: flex;
    align-items: center;
    color: ${backgroundImage ? colors.white : colors.black};
    font-family: ${fonts.serif};
    margin-left: 80px;
    padding: 4rem 0;
    h4 {
      font-size: 110px;
    }
    p {
      max-width: 400px;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 0.4px;
    }
    ${mediaQueriesMax.desktop} {
      align-content: center;
      justify-content: space-around;
      flex-wrap: wrap;
      margin: 0 10%;

      h4 {
        font-size: 100px;
        padding: 0;
        margin: 0;
      }
      p {
        font-size: x-large;
        padding: 0 3rem;
        line-height: normal;
      }
    }

    ${mediaQueriesMax.phoneLarge} {
      padding: 4rem 0;
      h4 {
        font-size: xxx-large;
      }
      p {
        font-size: large;
        line-height: normal;
        padding-top: 1rem;
      }
    }
    ${mediaQueriesMax.xs} {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: space-between;
      justify-content: space-between;
      align-items: center;

      h4 {
        font-size: 80px;
      }
    }
  `;

  const statItem = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;
    p {
      min-height: 150px;
      ${mediaQueriesMax.xs} {
        min-height: fit-content;
      }
    }
    ${mediaQueriesMax.desktop} {
      width: 50%;
      padding: 0;
    }
    ${mediaQueriesMax.phoneLarge} {
      width: 80%;
      padding: 0;
    }
    ${mediaQueriesMax.xs} {
      min-height: fit-content;
      max-height: fit-content;
      width: 75%;
    }
  `;

  const h3Styles = css`
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
  `;

  const sectionBackgroundCSS = backgroundImage
    ? css`
        background-image: url(${backgroundImage});
      `
    : css``;

  const sectionCSS = css`
    padding: 88px 0;
    ${sectionBackgroundCSS}
  `;

  return (
    <FullWidthSection height='0' minHeight='0' css={[sectionCSS]}>
      <h3 css={h3Styles}>{header}</h3>
      <div css={statWrapper} ref={nodeRef}>
        {isVisible && (
          <>
            {fieldStats.map((stat, index) => {
              return (
                <div key={index} css={statItem}>
                  <Counter
                    mainCount={stat.field_stat}
                    symbol={stat.field_character}
                  />
                  <p>{stat.field_description}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </FullWidthSection>
  );
};

Stats.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Stats;
