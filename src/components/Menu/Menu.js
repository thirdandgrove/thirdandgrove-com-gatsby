import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import { colors, mediaQueries, weights, container } from '../../styles';
import buildMenu from '../../helpers/menu';

import allDataHeader from './default-query';

const Menu = ({ menuOpen, toggleOpen }) => {
  const textFadeIn = css`
    position: relative;
    opacity: ${menuOpen ? '1' : '0'};
    transform: translateY(${menuOpen ? '0' : '50%'});
    transition-property: color, transform, opacity;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${colors.darkgray};
      transition: inherit;
      height: ${menuOpen ? '0' : '100%'};
    }
  `;

  const mobileDelay1 = css`
    transition-delay: 0s, 0.1s, 0.1s;
  `;

  const mobileDelay2 = css`
    transition-delay: 0s, 0.2s, 0.2s;
  `;

  const mobileDelay3 = css`
    transition-delay: 0s, 0.3s, 0.3s;
  `;

  const mobileDelay4 = css`
    transition-delay: 0s, 0.4s, 0.4s;
  `;

  const mobileDelay5 = css`
    transition-delay: 0s, 0.5s, 0.5s;
  `;

  const mobileDelay6 = css`
    transition-delay: 0s, 0.6s, 0.6s;
  `;

  const mobileDelay7 = css`
    transition-delay: 0s, 0.7s, 0.7s;
  `;

  const mobileDelay8 = css`
    transition-delay: 0s, 0.8s, 0.8s;
  `;

  const mobileDelay9 = css`
    transition-delay: 0s, 0.9s, 0.9s;
  `;

  const desktopDelay1 = css`
    ${mediaQueries.phoneLarge} {
      transition-delay: 0s, 0.2s, 0.2s;
    }
  `;

  const desktopDelay2 = css`
    ${mediaQueries.phoneLarge} {
      transition-delay: 0s, 0.4s, 0.4s;
    }
  `;

  const desktopDelay3 = css`
    ${mediaQueries.phoneLarge} {
      transition-delay: 0s, 0.6s, 0.6s;
    }
  `;

  const desktopDelay4 = css`
    ${mediaQueries.phoneLarge} {
      transition-delay: 0s, 0.8s, 0.8s;
    }
  `;

  const desktopDelay5 = css`
    ${mediaQueries.phoneLarge} {
      transition-delay: 0s, 1s, 1s;
    }
  `;

  const linkBaseStyles = css`
    display: block;
    color: ${colors.whiteFaded};
    font-weight: ${weights.medium};
    letter-spacing: -0.2px;
    text-align: center;

    &:hover,
    &:focus {
      color: ${colors.white};
    }
  `;

  const linkPrimaryStyle = css`
    font-size: 36px;
    line-height: 57px;

    ${mediaQueries.desktop} {
      font-size: 48px;
      line-height: 81px;
    }
  `;

  const linkSecondaryStyle = css`
    line-height: 42px;
    font-size: 20px;

    ${mediaQueries.phoneLarge} {
      font-size: 30px;
      line-height: 60px;
    }
  `;

  const sectionStyle = css`
    ${mediaQueries.phoneLarge} {
      padding: 0 40px;
    }
  `;

  const sectionPrimaryStyle = css`
    h5 {
      display: none;

      ${mediaQueries.phoneLarge} {
        display: block;
      }
    }
  `;

  const sectionSecondaryStyle = css`
    padding-top: 40px;
  `;

  const sectionHeaderStyle = css`
    font-weight: ${weights.thin};
    color: ${colors.white};
    letter-spacing: -0.1px;
    text-align: center;
    line-height: 15px;
    font-size: 15px;
    margin-bottom: 10px;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 26px;
      line-height: 81px;
      font-size: 21px;
    }
  `;

  const linksWrapper = css`
    display: grid;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    max-width: 240px;
    margin: 0 auto;

    ${mediaQueries.phoneLarge} {
      display: block;
      max-width: none;
      margin: 0 auto;
    }
  `;
  const data = allDataHeader();
  const mainMenu = buildMenu(data?.mainMenu?.nodes) || [];
  const renderItems = list =>
    list?.map(item => (
      <Link
        css={[
          linkPrimaryStyle,
          textFadeIn,
          linkBaseStyles,
          mobileDelay3,
          desktopDelay3,
        ]}
        onClick={() => toggleOpen()}
        to={item.link.uri.replace('internal:', '')}
      >
        {item.title}
      </Link>
    ));

  return (
    <nav
      css={css`
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: ${colors.darkgray};
        transition: 0.3s ease all;
        overflow: hidden;
        z-index: 3;
        top: ${menuOpen ? '0' : '100vh'};
        flex-direction: column;
        justify-content: center;
        height: ${menuOpen ? 'auto' : '0'};
        min-height: ${menuOpen ? '100vh' : '0'};
        padding: 0;

        ${mediaQueries.phoneLarge} {
          flex-direction: row;
          height: ${menuOpen ? '100vh' : '0'};
        }
      `}
    >
      <div
        css={[
          container.max,
          css`
            padding-top: 80px;
            padding-bottom: 60px;
            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
              padding-top: 0;
              padding-bottom: 0;
            }
          `,
        ]}
      >
        {mainMenu &&
          mainMenu.map(menu => (
            <section css={[sectionStyle, sectionPrimaryStyle]}>
              <h5 css={[sectionHeaderStyle, textFadeIn, desktopDelay1]}>
                {menu.title}
              </h5>
              {renderItems(menu.children)}
            </section>
          ))}
      </div>
    </nav>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default Menu;
