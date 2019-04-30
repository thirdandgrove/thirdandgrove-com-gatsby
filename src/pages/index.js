import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';

import Layout from '../components/layout';
import Insights from '../components/Insights';
import Projects from '../components/Projects';
import WhatWeDo from '../components/WhatWeDo';
import Prefooter from '../components/Prefooter';

export default () => {
  const duration = 10000;
  const taglines = [
    'We are an obsessive digital innovation company.',
    'Design-first technologists who help innovative brands make their next move.',
    'Some other amazing quote about TAG.',
  ];
  const [currentTagline, setTagline] = useState(0);
  // cycle through taglines
  useInterval(() => {
    let next = currentTagline + 1;
    if (next >= taglines.length) {
      next = 0;
    }
    setTagline(next);
  }, duration);
  return (
    <Layout headerData={{ title: taglines[currentTagline], fade: duration }}>
      <Projects />
      <WhatWeDo />
      <Insights />
      <Prefooter />
    </Layout>
  );
};
