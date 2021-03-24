import React from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import { mediaQueries } from '../../styles';
import DrupalBadge from '../../../static/images/drupal-badge.png';
import AcquiaBadge from '../../../static/images/acquia-badge.svg';
import ShopifyBadge from '../../../static/images/shopify-badge.svg';
import GatsbyBadge from '../../../static/images/gatsby-badge.png';
import BigcommerceBadge from '../../../static/images/bigcommerce-badge.png';

const Partners = () => {
  const badges = [
    {
      src: ShopifyBadge,
      alt: 'shopify',
      label: 'Shopify',
      link: '/partners/shopify',
    },
    {
      src: AcquiaBadge,
      alt: 'acquia',
      label: 'Acquia',
      link: '/partners/acquia',
    },
    {
      src: DrupalBadge,
      alt: 'drupal',
      label: 'Drupal',
      link: '/partners/drupal',
    },
    {
      src: GatsbyBadge,
      alt: 'gatsby',
      label: 'Gatsby',
      link: '/partners/gatsby',
    },
    {
      src: BigcommerceBadge,
      alt: 'bigcommerce',
      label: 'Big Commerce',
      link: '/partners/big-commerce',
    },
  ];

  const handleGoTo = link => () => navigate(link);

  const Badges = styled.div`
    max-width: 850px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  `;

  const badgeItem = css`
    width: 50%;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 0 0 50%;
    margin-bottom: 70px;
    cursor: pointer;

    ${mediaQueries.tablet} {
      flex: 0 0 33%;
      width: 33%;
      max-width: 33%;
    }

    img {
      width: 180px;
      height: auto;
    }
  `;

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
      <Badges>
        {badges.map((badge, index) => (
          // eslint-disable-next-line
          <div key={index} css={badgeItem} onClick={handleGoTo(badge.link)}>
            <img src={badge.src} alt={badge.alt} />
            <h4>{badge.label}</h4>
          </div>
        ))}
      </Badges>
    </Layout>
  );
};

export default Partners;
