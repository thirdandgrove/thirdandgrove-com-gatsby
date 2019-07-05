import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import FullWidthSection from '../FullWidthSection';

const LogoGrid = ({ title, logos }) => {
  const Logos = styled.div`
    display: flex;
  `;

  return (
    <FullWidthSection>
      <h2>{title}</h2>
      <Logos>
        {logos.map((logo, i) => (
          <img src={logo.src} alt={logo.alt} index={i} />
        ))}
      </Logos>
    </FullWidthSection>
  );
};

LogoGrid.propTypes = {
  title: PropTypes.string.isRequired,
  logos: PropTypes.array,
};

LogoGrid.defaultProps = {
  logos: [
    { src: 'images/icon.png', alt: 'Third and Grove' },
    { src: 'images/icon.png', alt: 'Third and Grove' },
  ],
};

export default LogoGrid;
