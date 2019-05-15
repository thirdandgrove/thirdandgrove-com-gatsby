import React from 'react';
import { css } from '@emotion/core';

import SplitSection from '../SplitSection';

export default ({ data }) => {
  return (
    <SplitSection padding='1rem'>
      {data.field_reversed ? (
        <>
          {' '}
          <span
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
          <p
            css={css`
              margin: 0 auto;
              align-self: center;
            `}
          >
            {data.field_quote}
          </p>
        </>
      ) : (
        <>
          <p
            css={css`
              align-self: center;
              margin: 0 auto;
            `}
          >
            {data.field_quote}
          </p>
          <span
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
        </>
      )}
    </SplitSection>
  );
};
