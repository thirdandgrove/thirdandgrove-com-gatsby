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

import { ReactComponent as GoogleLogo } from './logos/google.svg';
import { ReactComponent as FoxLogo } from './logos/fox.svg';
import { ReactComponent as GELogo } from './logos/ge.svg';
import { ReactComponent as AbsolutLogo } from './logos/absolut.svg';
import { ReactComponent as QuickenLogo } from './logos/quicken.svg';
import { ReactComponent as UCLALogo } from './logos/ucla.svg';
import { ReactComponent as WSILogo } from './logos/williamsSonoma.svg';
import { ReactComponent as DwellLogo } from './logos/dwell.svg';

const LogoGrid = ({ title, logoset }) => {
  const { width } = useWindow();

  const logosets = {
    default: [
      <GoogleLogo
        alt='Google'
        width={width < jsBreakpoints.phoneLarge ? '105' : '134'}
        height={width < jsBreakpoints.phoneLarge ? '35' : '44'}
      />,
      <FoxLogo
        alt='FOX'
        width={width < jsBreakpoints.phoneLarge ? '68' : '84'}
        height={width < jsBreakpoints.phoneLarge ? '30' : '36'}
      />,
      <GELogo
        alt='GE'
        width={width < jsBreakpoints.phoneLarge ? '51' : '72'}
        height={width < jsBreakpoints.phoneLarge ? '51' : '72'}
      />,
      <AbsolutLogo
        alt='Absolut Vodka'
        width={width < jsBreakpoints.phoneLarge ? '87' : '116'}
        height={width < jsBreakpoints.phoneLarge ? '40' : '54'}
      />,
      <QuickenLogo
        alt='Quicken'
        width={width < jsBreakpoints.phoneLarge ? '107' : '134'}
        height={width < jsBreakpoints.phoneLarge ? '24' : '30'}
      />,
      <UCLALogo
        alt='UCLA'
        width={width < jsBreakpoints.phoneLarge ? '87' : '116'}
        height={width < jsBreakpoints.phoneLarge ? '40' : '54'}
      />,
      <WSILogo
        alt='Williams-Sonoma Inc.'
        width={width < jsBreakpoints.phoneLarge ? '96' : '116'}
        height={width < jsBreakpoints.phoneLarge ? '31' : '38'}
      />,
      <DwellLogo
        alt='dwell'
        width={width < jsBreakpoints.phoneLarge ? '78' : '94'}
        height={width < jsBreakpoints.phoneLarge ? '30' : '36'}
      />,
    ],
    about: [
      <GoogleLogo alt='Google' />,
      <FoxLogo alt='FOX' />,
      <GELogo alt='GE' />,
      <AbsolutLogo alt='Absolut Vodka' />,
      <QuickenLogo alt='Quicken' />,
      <UCLALogo alt='UCLA' />,
      <WSILogo alt='Williams-Sonoma Inc.' />,
      <DwellLogo alt='dwell' />,
      <GoogleLogo alt='Google' />,
      <FoxLogo alt='FOX' />,
      <GELogo alt='GE' />,
      <AbsolutLogo alt='Absolut Vodka' />,
      <QuickenLogo alt='Quicken' />,
      <UCLALogo alt='UCLA' />,
      <WSILogo alt='Williams-Sonoma Inc.' />,
      <DwellLogo alt='dwell' />,
    ],
  };

  const logoCount = logosets[logoset].length;

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
    min-height: calc(100vh - 100px);

    ${mediaQueries.phoneLarge} {
      min-height: 0;
    }
  `;

  return (
    <FullWidthSection
      backgroundColor={colors.lightgray}
      mobileHeight='100vh'
      height='600px'
    >
      <div css={[container.max, containerStyles]}>
        <h2 css={[smSectionHead, titleStyles]}>{title}</h2>
        <Logos>
          {logosets[logoset].map(logo => (
            <div css={logoItem}>{logo}</div>
          ))}
        </Logos>
      </div>
    </FullWidthSection>
  );
};

LogoGrid.propTypes = {
  title: PropTypes.string.isRequired,
  logoset: PropTypes.string,
};

LogoGrid.defaultProps = {
  logoset: 'default',
};

export default LogoGrid;
