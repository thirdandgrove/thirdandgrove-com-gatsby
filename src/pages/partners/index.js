import React from 'react';
import { css } from '@emotion/react';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import LogoGrid from '../../components/LogoGrid';
import { colors, mediaQueries } from '../../styles';

const Partners = () => {
  return (
    <Layout
      headerData={{
        title: 'Third and Grove Partners',
        mobileMinHeight: '93vh',
        height: '400px',
      }}
    >
      <FullWidthSection
        textAlign='center'
        height='100%'
        css={css`
          min-height: 0px;
          padding: 50px 20px;

          ${mediaQueries.phoneLarge} {
            padding: 50px 0;
          }
        `}
      />
      <LogoGrid
        title='Our Partners'
        logoset='all'
        backgroundColor={colors.white}
      />
    </Layout>
  );
};

export default Partners;
