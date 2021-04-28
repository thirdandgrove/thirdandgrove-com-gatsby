import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

import { container, mediaQueries } from '../../styles';
import FullWidthSection from '../FullWidthSection';
import { FakeButton } from '../Button';

import CTAGridItem from './CTAGridItem';

const CTAGrid = ({
  items,
  images,
  header,
  backgroundColor,
  link,
  cta,
  maxWidth,
  gridColumns,
  invisibleCta,
  noPaddingImg,
  altStyle,
  extraCssItem,
  extraCssGrid,
  extraCSSSection,
  width,
}) => {
  const containerWidth = maxWidth ? container.max : container.textOnly;

  const ctaGridContainer = css`
    display: grid;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10%;
    grid-row-gap: 70px;
    width: 100%;
    padding-bottom: 0;

    ${mediaQueries.phoneLarge} {
      ${width !== '' ? `width: ${width};` : containerWidth}
      max-width: 100%;
      display: grid;
      -ms-grid-columns: ${gridColumns};
      grid-template-columns: ${gridColumns};
      grid-column-gap: 70px;
      grid-row-gap: 70px;
      padding-bottom: 72px;
    }

    ${extraCssGrid}
  `;

  const ctaGridContainerAlt = css`
    display: block;

    ${mediaQueries.phoneLarge} {
      ${container.textOnly}
      display: grid;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
    }

    ${extraCssGrid}
  `;

  const sectionPadding = css`
    padding: 80px 20px 70px 20px;

    ${mediaQueries.phoneLarge} {
      padding: 100px 0;
    }

    ${extraCSSSection}
  `;

  const sectionPaddingAlt = css`
    padding: 70px 20px 70px 20px;

    ${mediaQueries.phoneLarge} {
      padding: 100px 0;
    }

    ${extraCSSSection}
  `;

  const sectionStyles = css`
    ${!altStyle ? sectionPadding : sectionPaddingAlt}

    clear: both;

    h3 {
      font-size: 27px;
      text-align: center;
      padding-bottom: 0;
      line-height: 39px;

      ${mediaQueries.phoneLarge} {
        width: ${maxWidth}px;
        max-width: 100%;
        margin: 0 auto;
        font-size: 39px;
        line-height: 48px;
        padding-bottom: 48px;
      }
    }
  `;

  const buttonStyle = css`
    display: none;
    ${mediaQueries.phoneLarge} {
      display: block;
    }
  `;

  const getImageSrc = name => images.filter(({ node }) => name === node.name);

  return (
    <FullWidthSection css={sectionStyles} backgroundColor={backgroundColor}>
      {header !== '' && <h3>{header}</h3>}
      <div css={!altStyle ? ctaGridContainer : ctaGridContainerAlt}>
        {items.map(({ node }) => (
          <CTAGridItem
            key={node.title}
            icon={getImageSrc(node.icon)}
            title={node.title}
            description={node.description}
            altStyle={altStyle}
            extraCssItem={extraCssItem}
            noPaddingImg={noPaddingImg}
          />
        ))}
      </div>
      {!altStyle && !invisibleCta && (
        <div css={buttonStyle}>
          {link.indexOf('#') !== -1 ? (
            <a href={link} className='anchor'>
              {' '}
              <FakeButton>{cta}</FakeButton>
            </a>
          ) : (
            <Link to={link}>
              <FakeButton>{cta}</FakeButton>
            </Link>
          )}
        </div>
      )}
    </FullWidthSection>
  );
};

CTAGrid.propTypes = {
  items: PropTypes.array,
  images: PropTypes.array,
  altStyle: PropTypes.bool,
  header: PropTypes.string,
  backgroundColor: PropTypes.string,
  link: PropTypes.string,
  cta: PropTypes.string,
  maxWidth: PropTypes.bool,
  gridColumns: PropTypes.string,
  invisibleCta: PropTypes.bool,
  noPaddingImg: PropTypes.bool,
  extraCssItem: PropTypes.object,
  extraCssGrid: PropTypes.object,
  extraCSSSection: PropTypes.object,
  width: PropTypes.string,
};

CTAGrid.defaultProps = {
  items: [],
  images: [],
  altStyle: false,
  header: '',
  backgroundColor: '#FFF',
  link: '/',
  cta: 'Get Support Now',
  maxWidth: false,
  gridColumns: '1fr 1fr 1fr',
  invisibleCta: false,
  noPaddingImg: false,
  extraCssItem: null,
  extraCssGrid: null,
  extraCSSSection: null,
  width: '',
};

export default CTAGrid;
