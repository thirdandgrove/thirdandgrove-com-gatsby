import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

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

const LogoGrid = ({ title, logoset, backgroundColor }) => {
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
    margin-bottom: 90px;

    ${mediaQueries.phoneLarge} {
      flex: 0 0 ${logoCount === 5 ? '20%' : '25%'};
      width: ${logoCount === 5 ? '20%' : '25%'};
      max-width: ${logoCount === 5 ? '20%' : '25%'};
      margin-bottom: 110px;
    }

    svg {
      max-width: 100%;
      height: auto;

      *,
      path,
      g,
      polyline {
        fill: ${colors.midgray};
      }
    }
  `;

  const titleStyles = css`
    text-align: center;
    margin-bottom: 60px;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 70px;
    }
  `;

  const containerStyles = css`
    min-height: 100vh;
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
      minHeight='100vh'
      height='600px'
    >
      <div css={[container.max, containerStyles]}>
        <h2 css={[smSectionHead, titleStyles]}>{title}</h2>
        <Logos>
          {renderSet.map((logo, i) => (
            // eslint-disable-next-line react/no-array-index-key
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
  logoset: PropTypes.string,
  backgroundColor: PropTypes.string,
};

LogoGrid.defaultProps = {
  logoset: 'default',
  backgroundColor: colors.lightgray,
};

export default LogoGrid;
