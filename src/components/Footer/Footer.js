import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import EasterEggContext from '../../context/EasterEggContext';
import googlePartnerLogo from '../../../static/images/Partner-RGB.png';
import acquiaBadge from '../../../static/images/acquia-practice-certification.png';
import drupalBadge from '../../../static/images/drupal-certified-diamond-partner.svg';

import { colors, fonts, weights, mediaQueries, container } from '../../styles';

const Footer = () => {
  const linkStyle = css`
    display: block;
    color: ${colors.whiteFaded};
    font-family: ${fonts.sans};
    padding: 13px;
    font-size: 18px;
    line-height: 1;
    font-weight: ${weights.bold};

    ${mediaQueries.phoneLarge} {
      margin-right: 40px;
      padding: 11px 0;
    }
    &:hover {
      color: ${colors.white};
    }
  `;
  const wrapperStyle = css`
    padding: 0;
    text-align: center;
    background-color: ${colors.darkgray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${mediaQueries.phoneLarge} {
      display: block;
      min-height: 0;
    }
  `;
  const innerWrapperStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 50vh;

    ${mediaQueries.phoneLarge} {
      flex-direction: row;
      justify-content: center;
      min-height: 0;
    }
  `;
  const easterEggButtonStyle = css`
    border: 0;
    background: transparent;
    width: 100%;
    height: 80px;
  `;

  const partnerContainer = css`
    border-top: 2px solid ${colors.gray};
    padding-top: min(5vh, 3rem);
    margin-left: auto;
    margin-right: auto;
    margin-top: min(5vh, 3rem);
    max-width: calc(75px * 5);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const innerPartnerContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    ${mediaQueries.phoneLarge} {
      flex-direction: row;
    }

    img {
      margin: min(3vh, 1rem) 0;

      ${mediaQueries.phoneLarge} {
        margin: 0 min(3vw, 1rem);
      }
    }
  `;

  return (
    <EasterEggContext.Consumer>
      {context => (
        <div css={wrapperStyle}>
          <button
            onClick={context.toggleEasterEgg}
            css={easterEggButtonStyle}
            type='button'
          >
            &nbsp;
          </button>
          <div css={[innerWrapperStyle, container.max]}>
            <Link css={linkStyle} to='/work/'>
              Work
            </Link>
            <Link css={linkStyle} to='/capabilities/'>
              Capabilities
            </Link>
            <Link css={linkStyle} to='/insights/'>
              Insights
            </Link>
            <Link css={linkStyle} to='/about/'>
              About
            </Link>
            <a
              css={linkStyle}
              href='https://thirdandgrove.breezy.hr/'
              target='_blank'
              rel='noreferrer'
            >
              Careers
            </a>
            <Link css={linkStyle} to='/contact/'>
              Contact
            </Link>
            <Link css={linkStyle} to='/legal/'>
              Legal
            </Link>
            <Link css={linkStyle} to='/partners/'>
              Partners
            </Link>
          </div>
          <div css={[partnerContainer]}>
            <div css={[innerPartnerContainer]}>
              <img src={drupalBadge} alt='Drupal Badge' width={75} />
              <img
                src={googlePartnerLogo}
                alt='Google Partner Logo'
                width={75}
              />
              <img src={acquiaBadge} alt='Acquia Badge' width={75} />
            </div>
          </div>
          <button
            onClick={context.toggleEasterEgg}
            css={easterEggButtonStyle}
            type='button'
          >
            &nbsp;
          </button>
        </div>
      )}
    </EasterEggContext.Consumer>
  );
};

export default Footer;
