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
  gridColumns,
  altStyle,
}) => {
  const ctaGridContainer = css`
    display: grid;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10%;
    grid-row-gap: 70px;
    width: 100%;
    padding-bottom: 0;
    @media all and (-ms-high-contrast: none) {
      display: flex;
      flex-flow: row nowrap;
    }

    ${mediaQueries.phoneLarge} {
      ${container.textOnly}
      display: grid;
      -ms-grid-columns: ${gridColumns};
      grid-template-columns: ${gridColumns};
      grid-column-gap: 70px;
      grid-row-gap: 70px;
      padding-bottom: 72px;
      @media all and (-ms-high-contrast: none) {
        display: flex;
        flex-flow: row nowrap;
      }
    }
  `;

  const ctaGridContainerAlt = css`
    display: block;

    ${mediaQueries.phoneLarge} {
      ${container.textOnly}
      display: grid;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
      @media all and (-ms-high-contrast: none) {
        display: flex;
        flex-flow: row nowrap;
      }
    }
  `;

  const sectionPadding = css`
    padding: 80px 20px 70px 20px;

    ${mediaQueries.phoneLarge} {
      padding: 100px 0;
    }
  `;

  const sectionPaddingAlt = css`
    padding: 70px 20px 70px 20px;

    ${mediaQueries.phoneLarge} {
      padding: 100px 0;
    }
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
        width: 820px;
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
    <FullWidthSection
      customStyles={sectionStyles}
      backgroundColor={backgroundColor}
    >
      {header !== '' && <h3>{header}</h3>}
      <div css={!altStyle ? ctaGridContainer : ctaGridContainerAlt}>
        {items.map(({ node }) => (
          <CTAGridItem
            key={node.title}
            icon={getImageSrc(node.icon)}
            title={node.title}
            description={node.description}
            altStyle={altStyle}
          />
        ))}
      </div>
      {!altStyle && (
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
  gridColumns: PropTypes.string,
};

CTAGrid.defaultProps = {
  items: [],
  images: [],
  altStyle: false,
  header: '',
  backgroundColor: '#FFF',
  link: '/',
  cta: 'Get Support Now',
  gridColumns: '1fr 1fr 1fr',
};

export default CTAGrid;
