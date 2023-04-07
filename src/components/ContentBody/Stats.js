import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import FullWidthSection from '../FullWidthSection';
import { colors, fonts } from '../../styles';
import { mediaQueriesMax } from '../../styles/css-utils';
import { useHasBeenVisible } from '../../hooks/useVisibility';
import Counter from '../Counter';

const Stats = ({ data }) => {
  const fieldStats = data?.relationships?.field_stats;
  const nodeRef = React.useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  const statWrapper = css`
    display: flex;
    align-items: center;
    color: ${colors.black};
    font-family: ${fonts.serif};
    margin-left: 80px;
    padding: 8rem 0;
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

  return (
    <FullWidthSection height='0' minHeight='0'>
      <div css={statWrapper} ref={nodeRef}>
        {isVisible && (
          <>
            {fieldStats.map(stat => {
              return (
                <div css={statItem}>
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
