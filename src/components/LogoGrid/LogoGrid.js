import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import FullWidthSection from '../FullWidthSection';
import useWindow from '../../hooks/useWindow';
import {
  colors,
  mediaQueries,
  jsBreakpoints,
  smSectionHead,
  container,
} from '../../styles';

import logoSets from './logosets';

const LogoGrid = ({
  title,
  subtitle,
  logoset,
  backgroundColor,
  minHeight,
  styles,
  defaultItemWidth,
}) => {
  const { width } = useWindow();
  const isSmScreen = width < jsBreakpoints.phoneLarge;

  const renderSet = logoSets(logoset, isSmScreen);

  const logoCount = renderSet.length;

  const Logos = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin-bottom: -60px;

    ${mediaQueries.phoneLarge} {
      flex-wrap: ${logoCount >= 6 ? 'wrap' : 'nowrap'};
    }
  `;

  const logoItem = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    width: 50%;
    max-width: 50%;
    margin-bottom: 70px;

    ${mediaQueries.phoneLarge} {
      flex: 0 0 ${logoCount === 5 ? '20%' : defaultItemWidth};
      width: ${logoCount === 5 ? '20%' : defaultItemWidth};
      max-width: ${logoCount === 5 ? '20%' : defaultItemWidth};
      margin-bottom: 70px;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  `;

  const titleStyles = css`
    text-align: center;
    margin-bottom: 60px;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 70px;
    }
  `;

  const multiLineStyles = css`
    text-align: center;
    margin-bottom: 20px;
    line-height: 1;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 0;
    }
  `;

  const subTitleStyles = css`
    text-align: center;
    margin-bottom: 36px;
    line-height: 1;
    font-size: 24px;
    font-weight: 700;

    ${mediaQueries.phoneLarge} {
      font-size: 44px;
      font-weight: 700;
    }
  `;

  const containerStyles = css`
    padding-top: 50px;
    padding-bottom: 50px;

    ${mediaQueries.phoneLarge} {
      min-height: 0;
      padding-top: 85px;
      padding-bottom: 85px;
    }
  `;

  return (
    <FullWidthSection
      backgroundColor={backgroundColor}
      minHeight={minHeight}
      height='600px'
    >
      <div css={[container.max, containerStyles, styles]}>
        <h2 css={[smSectionHead, subtitle ? multiLineStyles : titleStyles]}>
          {title}
        </h2>
        {subtitle && <h3 css={[smSectionHead, subTitleStyles]}>{subtitle}</h3>}
        <Logos>
          {renderSet.map((logo, i) => (
            // eslint-disable-next-line
            <div key={i} css={logoItem}>
              {logo}
            </div>
          ))}
        </Logos>
      </div>
    </FullWidthSection>
  );
};

LogoGrid.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  logoset: PropTypes.string,
  backgroundColor: PropTypes.string,
  minHeight: PropTypes.string,
  styles: PropTypes.object,
  defaultItemWidth: PropTypes.string,
};

LogoGrid.defaultProps = {
  logoset: 'default',
  backgroundColor: colors.lightgray,
  minHeight: '100vh',
  subtitle: '',
  styles: {},
  defaultItemWidth: '25%',
};

export default LogoGrid;
