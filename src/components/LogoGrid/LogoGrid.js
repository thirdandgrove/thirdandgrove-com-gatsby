import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import FullWidthSection from '../FullWidthSection';

import { ReactComponent as GoogleLogo } from './logos/google.svg';
import { ReactComponent as FoxLogo } from './logos/fox.svg';
import { ReactComponent as GELogo } from './logos/ge.svg';
import { ReactComponent as AbsolutLogo } from './logos/absolut.svg';
import { ReactComponent as QuickenLogo } from './logos/quicken.svg';
import { ReactComponent as UCLALogo } from './logos/ucla.svg';
import { ReactComponent as WSILogo } from './logos/williamsSonoma.svg';
import { ReactComponent as DwellLogo } from './logos/dwell.svg';

const LogoGrid = ({ title, logoset }) => {
  const logosets = {
    default: [
      <GoogleLogo alt='Google logo' />,
      <FoxLogo alt='FOX logo' />,
      <GELogo alt='GE logo' />,
      <AbsolutLogo alt='Absolut Vodka logo' />,
      <QuickenLogo alt='Quicken logo' />,
      <UCLALogo alt='UCLA logo' />,
      <WSILogo alt='Williams-Sonoma Inc. logo' />,
      <DwellLogo alt='dwell logo' />,
    ],
  };

  const Logos = styled.div`
    display: flex;
  `;

  return (
    <FullWidthSection>
      <h2>{title}</h2>
      <Logos>
        {logosets[logoset].map(logo => (
          <>{logo}</>
        ))}
      </Logos>
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
