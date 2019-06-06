import React from 'react';

import Layout from '../components/layout';
import InsightsSlider from '../components/InsightsSlider';
import WhatWeDo from '../components/WhatWeDo';
import SplitSection from '../components/SplitSection';
import { ContactUs, BeUs } from '../components/Prefooter';
import ProjectsSlider from '../components/ProjectsSlider';

export default () => {
  return (
    <Layout
      headerData={{
        title: 'We are an obsessive digital innovation company.',
      }}
    >
      <ProjectsSlider />
      <WhatWeDo />
      <InsightsSlider />
      <SplitSection>
        <ContactUs />
        <BeUs />
      </SplitSection>
    </Layout>
  );
};
