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
    }
  `;

  const sectionSecondaryStyle = css`
    padding-top: 40px;
  `;

  const sectionHeaderStyle = css`
    text-align: center;
    margin-bottom: 10px;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 26px;
    }

    span {
      font-weight: ${weights.thin};
      color: ${colors.white};
      letter-spacing: -0.1px;
      line-height: 15px;
      font-size: 15px;

      &:hover {
        font-size: 19px;
      }

      padding-bottom: 0px;
      text-decoration: none;
      background-image: linear-gradient(currentColor, currentColor);
      background-repeat: no-repeat;
      background-position: 100% 100%;
      background-size: 0% 2px;
      transition:
        background-size 0.5s,
        font-size 0.5s;

      &:hover,
      &:focus-visible {
        background-position: 0 100%;
        background-size: 100% 2px;
      }

      ${mediaQueries.phoneLarge} {
        line-height: 81px;
        font-size: 21px;

        &:hover {
          font-size: 25px;
        }
      }
    }
  `;

  const linksWrapper = css`
    display: grid;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    max-width: 240px;
    margin: 0 auto;

    > a:last-of-type:nth-of-type(odd) {
      grid-column: span 2;
    }

    ${mediaQueries.phoneLarge} {
      display: block;
      max-width: none;
      margin: 0 auto;
    }
  `;

  const linksWrapperLargeWidth = css`
    display: grid;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    max-width: 270px;
    margin: 0 auto;

    > a:last-of-type:nth-of-type(odd) {
      grid-column: span 2;
    }

    ${mediaQueries.phoneLarge} {
      display: block;
      max-width: none;
      margin: 0 auto;
    }
  `;

  const data = allDataHeader();
  const mainMenu = buildMenu(data?.mainMenu?.nodes) || [];

  const renderItems = list =>
    list?.map(item =>
      item.link.uri.indexOf('internal:') !== -1 ? (
        <Link
          key={item.title}
          css={[
            linkPrimaryStyle,
            textFadeIn,
            linkBaseStyles,
            mobileDelay3,
            desktopDelay3,
            linkSecondaryStyle,
          ]}
          onClick={() => toggleOpen()}
          to={item.link.uri.replace('internal:', '')}
        >
          {item.title}
        </Link>
      ) : (
        <a
          key={item.title}
          css={[
            linkPrimaryStyle,
            textFadeIn,
            linkBaseStyles,
            mobileDelay3,
            desktopDelay3,
            linkSecondaryStyle,
          ]}
          onClick={() => toggleOpen()}
          href={item.link.uri}
          title={item.title}
          target='_blank'
        >
          {item.title}
        </a>
      )
    );

  const checkClass = list =>
    list.filter(item => item.title.trim().length >= 9).length > 1;

  return (
    <nav
      css={css`
        // Updated styles for the mobile menu
        position: fixed;
        width: 100%;
        display: flex;
        align-items: flex-start;
        background-color: ${colors.darkgray};
        transition: 0.3s ease all;
        z-index: 3;
        top: ${menuOpen ? '0' : '100vh'};
        flex-direction: column;
        justify-content: flex-start;
        min-height: 100vh;
        padding: 0;

        ${mediaQueries.phoneLarge} {
          flex-direction: row;
          height: ${menuOpen ? '100vh' : '0'};
          align-items: center;
        }
      `}
    >
      <div
        css={[
          container.max,
          css`
            // Container for the menu content
            padding-top: 80px;
            padding-bottom: 60px;

            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
              padding-top: 0;
              padding-bottom: 0;
            }

            @media (max-width: 900px) {
              // Only apply the following styles on mobile
              display: none;

              > * + * {
                margin-top: 64px;
              }
            }
          `,
        ]}
      >
        {mainMenu &&
          mainMenu.map(menu => (
            <section key={menu.title} css={[sectionStyle, sectionPrimaryStyle]}>
              {menu.link ? (
                menu.link.uri.indexOf('internal:') !== -1 ? (
                  <Link
                    onClick={() => toggleOpen()}
                    to={menu.link.uri.replace('internal:', '')}
                  >
                    <h5 css={[sectionHeaderStyle, textFadeIn, desktopDelay1]}>
                      <span>{menu.title.trim()}</span>
                    </h5>
                  </Link>
                ) : (
                  <a
                    onClick={() => toggleOpen()}
                    href={menu.link.uri}
                    title={menu.title}
                    target='_blank'
                  >
                    <h5 css={[sectionHeaderStyle, textFadeIn, desktopDelay1]}>
                      <span>{menu.title.trim()}</span>
                    </h5>
                  </a>
                )
              ) : (
                <h5 css={[sectionHeaderStyle, textFadeIn, desktopDelay1]}>
                  <span>{menu.title.trim()}</span>
                </h5>
              )}
              <div
                css={[
                  checkClass(menu.children)
                    ? linksWrapperLargeWidth
                    : linksWrapper,
                ]}
              >
                {renderItems(menu.children)}
              </div>
            </section>
          ))}
      </div>

      <div
        css={[
          container.max,
          css`
            // Container for the menu content (on desktop)
            padding-top: 80px;
            padding-bottom: 60px;

            @media (min-width: 900px) {
              // Only apply the following styles on mobile
              display: none;
            }
          `,
        ]}
      >
        <div
          css={css`
            > * + * {
              margin-top: 64px;
            }
          `}
        >
          {mainMenu &&
            mainMenu.map(menu => (
              <section
                key={menu.title}
                css={[sectionStyle, sectionPrimaryStyle]}
              >
                {menu.link ? (
                  menu.link.uri.indexOf('internal:') !== -1 ? (
                    <Link
                      onClick={() => toggleOpen()}
                      to={menu.link.uri.replace('internal:', '')}
                    >
                      <h5 css={[sectionHeaderStyle, textFadeIn, desktopDelay1]}>
                        <span>{menu.title.trim()}</span>
                      </h5>
                    </Link>
                  ) : (
                    <a
                      onClick={() => toggleOpen()}
                      href={menu.link.uri}
                      title={menu.title}
                      target='_blank'
                    >
                      <h5 css={[sectionHeaderStyle, textFadeIn, desktopDelay1]}>
                        <span>{menu.title.trim()}</span>
                      </h5>
                    </a>
                  )
                ) : (
                  <h5 css={[sectionHeaderStyle, textFadeIn, desktopDelay1]}>
                    <span>{menu.title.trim()}</span>
                  </h5>
                )}
                <div
                  css={[
                    checkClass(menu.children)
                      ? linksWrapperLargeWidth
                      : linksWrapper,
                  ]}
                >
                  {renderItems(menu.children)}
                </div>
              </section>
            ))}
        </div>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default Menu;
