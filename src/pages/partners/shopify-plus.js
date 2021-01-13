import React from 'react';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import LogoGrid from '../../components/LogoGrid';
import CTA from '../../components/CTA';
import { colors } from '../../styles';
import { partnersSub } from '../../styles/custom-css';

export default () => {
  return (
    <Layout
      headerData={{
        invert: true,
        title: 'Ecommerce that converts',
        color: colors.yellow,
        mobileMinHeight: '620px',
        width: '480px',
        titlePadding: '0 100px',
      }}
    >
      <FullWidthSection height='400px' align='left' css={partnersSub}>
        <h4>Shopify Plus</h4>
      </FullWidthSection>
      <CTA
        headline='The premier Shopify Plus-Certified Agency'
        subTitle='We build brands through goal-busting experiences. Ready to get started?'
        cta="LET'S Talk"
      />
      <LogoGrid
        logoset='shopifyPlus'
        title='Taking Names'
        backgroundColor={colors.lightgray}
        minHeight='0'
      />
      <CTA headline="Now let's get you promoted" />
    </Layout>
  );
};
