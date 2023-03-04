import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import FullWidthSection from '../FullWidthSection';
import { colors, mediaQueries } from '../../styles';
import LogoGrid from '../LogoGrid';

const LogoWall = ({ data }) => {
  const {
    field_header_text: headerText,
    field_subhead_text: subheadText,
  } = data;
  const images = data.relationships.field_images;

  return (
    <FullWidthSection height='0' minHeight='0'>
      <LogoGrid
        images={images}
        title={headerText}
        subtitle={subheadText}
        backgroundColor={colors.white}
        styles={css`
          padding-top: 25px !important;
          padding-bottom: 80px !important;

          > h2 {
            font-size: 33px;
            font-weight: 700;
            letter-spacing: normal;
            line-height: 1.2;
          }
          > h3 {
            font-size: 16px;
            font-weight: 100;
            font-family: 'NB International Pro', sans-serif;
          }
          > div {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 10px !important;

            ${mediaQueries.phoneLarge} {
              margin-bottom: 0;
            }
          }
          > div > div {
            width: auto;
            flex: unset;
            padding: 0 10px;
            margin-bottom: 0;

            ${mediaQueries.phoneLarge} {
              margin-bottom: 30px !important;
            }
          }
          > div > div > img {
            margin-bottom: 0;
          }
        `}
        minHeight='100px !important'
        defaultItemWidth='20%'
      />
    </FullWidthSection>
  );
};

LogoWall.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LogoWall;
