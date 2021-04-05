import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import FullWidthSection from '../FullWidthSection';
import { weights, mediaQueries, colors, contValues } from '../../styles';

const Quote = ({
  data,
  size,
  padding,
  color,
  backgroundColor,
  quoteColor,
  center,
  altStyle,
  innerMargin,
}) => {
  const isSmall = size === 'small';

  const quoteText = css`
    font-size: ${isSmall ? '21px' : '39px'};
    font-weight: ${isSmall ? weights.bold : weights.medium};
    line-height: ${isSmall ? '1.48' : '1.15'};
    text-align: ${isSmall || center ? 'center' : 'left'};
    color: ${color};

    ${mediaQueries.phoneLarge} {
      font-weight: ${weights.bold};
      text-align: center;
      letter-spacing: ${isSmall ? '-0.09px' : '-0.16px'};
      line-height: ${isSmall ? '1.48' : '1.38'};
    }
  `;

  const quoteTextAlt = css`
    font-size: 39px;
    font-weight: ${weights.medium};
    line-height: 48px;
    text-align: center;
    color: ${color};

    ${mediaQueries.phoneLarge} {
      font-size: 48px;
      font-weight: ${weights.medium};
      line-height: 48px;
      text-align: center;
      color: ${color};
    }
  `;

  const quoL = css`
    color: ${quoteColor};

    ${mediaQueries.desktop} {
      position: absolute;
      margin-left: ${isSmall ? '-12px' : '-18px'};
    }
  `;

  const quoR = css`
    color: ${quoteColor};
  `;

  const quoteAttr = css`
    margin-bottom: 0;
    font-size: ${isSmall ? '16px' : '12px'};
    text-align: ${isSmall || center ? 'center' : 'left'};
    padding-top: 10px;
    font-weight: ${weights.light};
    color: ${color};

    ${mediaQueries.phoneLarge} {
      font-size: 16px;
      letter-spacing: 0.2px;
      line-height: 1.56;
      text-align: center;
    }
  `;

  const containerStyles = css`
    width: ${contValues.min};
    max-width: 100%;
    margin: ${padding === '0' ? '0 auto 60px' : '0 auto'};
    padding: ${isSmall ? '0 10px' : '0 20px'};
    ${mediaQueries.phoneLarge} {
      ${isSmall &&
      `margin: 0 0 ${innerMargin || '130px'};
        padding: 13px 8px 0;
      `};
    }
  `;

  return (
    <FullWidthSection
      height='auto'
      minHeight='auto'
      padding={padding}
      backgroundColor={backgroundColor}
    >
      <div css={containerStyles}>
        <div css={!altStyle ? quoteText : quoteTextAlt}>
          <span css={quoL}>&ldquo;</span>
          {data.field_quote}
          <span css={quoR}>&rdquo;</span>
        </div>
        {data.field_footer_text && (
          <p css={quoteAttr}>{`—${data.field_footer_text}`}</p>
        )}
      </div>
    </FullWidthSection>
  );
};

Quote.propTypes = {
  data: PropTypes.object.isRequired,
  size: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  quoteColor: PropTypes.string,
  center: PropTypes.bool,
  altStyle: PropTypes.bool,
  innerMargin: PropTypes.string,
};

Quote.defaultProps = {
  size: 'large',
  padding: '0',
  color: colors.black,
  backgroundColor: colors.white,
  quoteColor: colors.yellow,
  center: false,
  altStyle: false,
  innerMargin: '130px',
};

export default Quote;
