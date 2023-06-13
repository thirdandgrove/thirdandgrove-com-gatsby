import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import EasterEggContext from '../../context/EasterEggContext';
import { colors, fonts, weights, mediaQueries } from '../../styles';
import buildMenu from '../../helpers/menu';

import allDataFooter from './default-query';

const Footer = () => {
  const linkStyle = css`
    display: block;
    color: ${colors.whiteFaded};
    font-family: ${fonts.sans};
    padding: 0;
    font-size: 16px;
    line-height: 22px;
    font-weight: ${weights.bold};

    ${mediaQueries.phoneLarge} {
      padding: 0;
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
    line-height: 35px;
    font-size: 25px;
    margin-bottom: 0;
  `;

  const desktopDelay1 = css`
    ${mediaQueries.phoneLarge} {
      transition-delay: 0s, 0.2s, 0.2s;
    }
  `;

  const sectionStyle = css`
    ${mediaQueries.phoneLarge} {
      padding: 0;
    }
  `;

  const sectionPrimaryStyle = css`
    flex: 100%;

    > * + * {
      margin-top: 16px;
    }

    a:last-child {
      margin-bottom: 16px;
    }
  `;

  const data = allDataFooter();
  const mainMenu = buildMenu(data?.mainMenu?.nodes) || [];

  const renderItems = list =>
    list?.map(item => (
      <Link
        key={item.title}
        css={[linkStyle]}
        to={item.link.uri.replace('internal:', '')}
      >
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
              css`
                // Container for the menu content
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                gap: 24px;
                padding-top: 80px;
                padding-bottom: 60px;
                max-width: 1220px;
                width: 100%;
                padding-left: 20px;
                padding-right: 20px;
                margin: 0 auto;

                ${mediaQueries.phoneLarge} {
                  flex-direction: row;
                  padding-top: 0;
                  padding-bottom: 0;
                  gap: 16px;
                }
              `,
            ]}
          >
            {mainMenu &&
              mainMenu.map(menu => (
                <section
                  key={menu.title}
                  css={[sectionStyle, sectionPrimaryStyle]}
                >
                  {menu.link ? (
                    <Link to={menu.link.uri.replace('internal:', '')}>
                      <h5 css={[sectionHeaderStyle, desktopDelay1]}>
                        {menu.title}
                      </h5>
                    </Link>
                  ) : (
                    <h5 css={[sectionHeaderStyle, desktopDelay1]}>
                      {menu.title}
                    </h5>
                  )}
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
