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
  const images = data.relationships.field_images_list;
  const isLogoWall = images.some(
    x => x.field_header_text && x.field_description
  );
  const imageList = [];

  if (isLogoWall) {
    images.map(image => {
      return imageList.push({
        title: image.field_header_text,
        description: image.field_description,
        icon: [image.relationships.field_image],
      });
    });
  }

  return (
    <FullWidthSection height='0' minHeight='0'>
      <LogoGrid
        images={isLogoWall ? imageList : images}
        title={headerText}
        subtitle={subheadText}
        backgroundColor={colors.white}
        styles={css`
          padding-top: 80px !important;
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
            margin-bottom: 10px;

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
        isLogoWall={isLogoWall}
        link={data.field_primary_cta?.uri?.replace('entity:', '') || ''}
        cta={data.field_primary_cta?.title}
        drupalData
      />
    </FullWidthSection>
  );
};

LogoWall.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LogoWall;
