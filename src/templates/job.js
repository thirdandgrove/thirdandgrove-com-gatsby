import React from 'react';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';

export default ({ pageContext }) => {
  const { job } = pageContext;
  return (
    <Layout headerData={{ title: job.title }}>
      <FullWidthSection height='100%' padding='3rem'>
        <div dangerouslySetInnerHTML={{ __html: job.description }} />
      </FullWidthSection>
    </Layout>
  );
};
