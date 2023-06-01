import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import EasterEggContext from '../../context/EasterEggContext';
import { colors, fonts, weights, mediaQueries, container } from '../../styles';

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
  const data = allDataFooter();

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
            {data &&
              data?.mainMenu?.nodes.map(menu => (
                <Link
                  css={linkStyle}
                  to={menu.link.uri.replace('internal:', '')}
                >
                  {menu.title}
                </Link>
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
