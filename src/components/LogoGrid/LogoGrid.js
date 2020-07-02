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

const LogoGrid = ({ title, subtitle, logoset, backgroundColor, minHeight }) => {
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

  const LogosTight = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-between;
    max-width: 400px;
    margin: auto;
    margin-bottom: -40px;

    ${mediaQueries.phoneLarge} {
      max-width: 700px;
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
      flex: 0 0 ${logoCount === 5 ? '20%' : '25%'};
      width: ${logoCount === 5 ? '20%' : '25%'};
      max-width: ${logoCount === 5 ? '20%' : '25%'};
      margin-bottom: 70px;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  `;

  const logoItemTight = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    width: 50%;
    max-width: 50%;
    margin-bottom: 25px;

    &:last-of-type {
      margin-top: 6px;
    }

    ${mediaQueries.phoneLarge} {
      flex: 0 0 ${logoCount === 5 ? '15%' : '18%'};
      width: ${logoCount === 5 ? '15%' : '18%'};
      max-width: ${logoCount === 5 ? '15%' : '18%'};
      margin-bottom: 50px;

      &:nth-child(2) {
        flex: 0 0 ${logoCount === 5 ? '15%' : '20.5%'};
        width: ${logoCount === 5 ? '15%' : '20.5%'};
        max-width: ${logoCount === 5 ? '15%' : '20.5%'};
        margin-right: 7px;
      }

      &:nth-child(3) {
        flex: 0 0 ${logoCount === 5 ? '15%' : '20.5%'};
        width: ${logoCount === 5 ? '15%' : '20.5%'};
        max-width: ${logoCount === 5 ? '15%' : '20.5%'};
        padding-bottom: 5px;
      }

      &:last-of-type {
        flex: 0 0 ${logoCount === 5 ? '15%' : '22.75%'};
        width: ${logoCount === 5 ? '15%' : '22.75%'};
        max-width: ${logoCount === 5 ? '15%' : '22.75%'};
        padding-bottom: 1px;
      }
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
      <div css={[container.max, containerStyles]}>
        {subtitle !== '' ? (
          <>
            <h2 css={[smSectionHead, multiLineStyles]}>{title}</h2>
            <h3 css={[smSectionHead, subTitleStyles]}>{subtitle}</h3>
            <LogosTight>
              {renderSet.map((logo, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} css={logoItemTight}>
                  {logo}
                </div>
              ))}
            </LogosTight>
          </>
        ) : (
          <>
            <h2 css={[smSectionHead, titleStyles]}>{title}</h2>
            <Logos>
              {renderSet.map((logo, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} css={logoItem}>
                  {logo}
                </div>
              ))}
            </Logos>
          </>
        )}
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
};

LogoGrid.defaultProps = {
  logoset: 'default',
  backgroundColor: colors.lightgray,
  minHeight: '100vh',
  subtitle: '',
};

export default LogoGrid;
