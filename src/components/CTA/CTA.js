import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

import { colors, weights, mediaQueries } from '../../styles';
import FullWidthSection from '../FullWidthSection';
import { FakeButton } from '../Button';

const CTA = ({
  backgroundColor,
  headline,
  subTitle,
  cta,
  link,
  icon,
  iconAlt,
  altStyle,
  headlineStyle,
  subTitleStyle,
  padding,
}) => {
  const ctaStyle1 = css`
    padding: ${padding || '40px 0'};

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    h2 {
      color: ${colors.reallydarkgray};
      font-weight: ${weights.bold};
      text-align: center;
    }

    img {
      max-width: 73px;
    }
  `;

  const ctaStyle2 = css`
    padding: ${padding || '100px 48px'};

    ${mediaQueries.phoneLarge} {
      padding-left: 20px;
      padding-right: 20px;
    }

    div {
      width: 100%;
      max-width: 550px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    img {
      max-width: 73px;
    }

    h2 {
      color: ${colors.reallydarkgray};
      font-weight: ${weights.thin};
      font-size: 30px;
      line-height: 39px;
      text-align: center;

      ${mediaQueries.phoneLarge} {
        font-size: 36px;
        line-height: 54px;
      }
    }

    p {
      font-weight: ${weights.thin};
      line-height: 27px;
      text-align: center;
      margin-bottom: 48px;
    }
  `;

  return (
    <FullWidthSection
      backgroundColor={backgroundColor}
      minHeight='300px'
      height='300px'
      align-items='center'
      padding={padding}
      css={altStyle ? ctaStyle2 : ctaStyle1}
    >
      <div>
        {icon && <img src={icon} alt={iconAlt} />}
        {headline && <h2 css={headlineStyle}>{headline}</h2>}
        {subTitle && <p css={subTitleStyle}>{subTitle}</p>}
        {link.indexOf('#') !== -1 ? (
          <a href={link} className='anchor'>
            {' '}
            <FakeButton>{cta}</FakeButton>
          </a>
        ) : (
          <Link to={link}>
            <FakeButton>{cta}</FakeButton>
          </Link>
        )}
      </div>
    </FullWidthSection>
  );
};

CTA.propTypes = {
  backgroundColor: PropTypes.string,
  headline: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  cta: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  altStyle: PropTypes.bool,
  headlineStyle: PropTypes.object,
  subTitleStyle: PropTypes.object,
  padding: PropTypes.string,
};

CTA.defaultProps = {
  backgroundColor: colors.lightblue,
  headline: `Want to chat more?`,
  subTitle: '',
  cta: `GET IN TOUCH`,
  link: `/contact/`,
  icon: '',
  iconAlt: '',
  altStyle: false,
  headlineStyle: null,
  subTitleStyle: null,
  padding: '',
};

export default CTA;
