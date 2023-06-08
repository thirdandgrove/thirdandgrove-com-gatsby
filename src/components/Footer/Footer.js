import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import EasterEggContext from '../../context/EasterEggContext';
import { colors, fonts, weights, mediaQueries, container } from '../../styles';
import buildMenu from '../../helpers/menu';

import allDataFooter from './default-query';

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

  const parentLinkStyle = css`
    font-size: 18px;
    line-height: 1;
    font-weight: ${weights.bold};
    padding: 13px;
    display: block;
    color: ${colors.whiteFaded};

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

  const desktopDelay1 = css`
    ${mediaQueries.phoneLarge} {
      transition-delay: 0s, 0.2s, 0.2s;
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

  const data = allDataFooter();
  const mainMenu = buildMenu(data?.mainMenu?.nodes) || [];

  const renderItems = list =>
    list?.map(item => (
      <Link css={[linkStyle]} to={item.link.uri.replace('internal:', '')}>
        {item.title}
      </Link>
    ));
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
              `,
            ]}
          >
            {mainMenu &&
              mainMenu.map(menu => (
                <section css={[sectionStyle, sectionPrimaryStyle]}>
                  <h5 css={[sectionHeaderStyle, desktopDelay1]}>
                    {menu.title}
                  </h5>
                  {renderItems(menu.children)}
                </section>
              ))}
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
