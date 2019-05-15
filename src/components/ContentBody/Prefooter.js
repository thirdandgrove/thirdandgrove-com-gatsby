import React from 'react';
import { css } from '@emotion/core';

import { TextWrapper } from '../Prefooter';
import SplitSection from '../SplitSection';
import Button from '../Button';
import { colors } from '../../styles';

export default ({ data }) => (
  <SplitSection>
    {/* TODO: change data model to provide a color */}
    <TextWrapper backgroundColor={colors.yellow}>
      {/* TODO: change data model to reference another article? */}
      <span
        dangerouslySetInnerHTML={{
          __html: data.field_secondary_body.processed,
        }}
      />
    </TextWrapper>
    <img
      css={css`
        height: 100%;
        width: 100%;
        object-fit: cover;
      `}
      src={data.relationships.field_image.localFile.publicURL}
      alt='prefooter'
    />
  </SplitSection>
);
