import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import FullWidthSection from '../FullWidthSection';

const LogoGrid = ({ title, logoset }) => {
  const logosets = {
    default: [
      { src: 'images/logos/google.svg', alt: 'Google' },
      { src: 'images/logos/fox.svg', alt: 'FOX' },
      { src: 'images/logos/ge.svg', alt: 'GE' },
      { src: 'images/logos/absolut.svg', alt: 'Absolut Vodka' },
      { src: 'images/logos/quicken.svg', alt: 'Quicken' },
      { src: 'images/logos/ucla.svg', alt: 'UCLA' },
      { src: 'images/logos/williams-sonoma.svg', alt: 'Williams-Sonoma Inc.' },
      { src: 'images/logos/dwell.svg', alt: 'dwell' },
    ],
  };

  const Logos = styled.div`
    display: flex;
  `;

  return (
    <FullWidthSection>
      <h2>{title}</h2>
      <Logos>
        {logosets[logoset].map((logo, i) => (
          <img src={logo.src} alt={logo.alt} index={i} />
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
