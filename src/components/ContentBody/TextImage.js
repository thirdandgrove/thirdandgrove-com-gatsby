import React from 'react';

import SplitSection from '../SplitSection';

export default ({ data }) => {
  return (
    <SplitSection padding='1rem'>
      <span dangerouslySetInnerHTML={{ __html: data.field_body.value }} />
      <img
        src={data.relationships.field_image.localFile.publicURL}
        alt='article text split'
      />
    </SplitSection>
  );
};
