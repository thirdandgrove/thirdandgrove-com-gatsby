import React from 'react';
import { css } from '@emotion/react';
import { mediaQueries, colors, fonts, weights } from '../../styles';

const ErrorToaster = ({ errs }) => {
  return errs ? (
    <div
      css={css`
        padding-top: 40px;

        ${mediaQueries.xs} {
          position: relative;
        }
      `}
    >
      <div
        css={css`
          text-align: center;
          display: flex;
          flex-direction: column;

          p {
            display: inline;
            color: ${colors.red};
          }
        `}
      >
        {errs && Object.values(errs).map((err, i) => <p key={i}>{err} </p>)}
      </div>
    </div>
  ) : null;
};

export default ErrorToaster;
