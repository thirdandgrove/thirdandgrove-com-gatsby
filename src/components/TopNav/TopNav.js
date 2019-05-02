import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import useWindow from '../../hooks/useWindow';
import Menu from '../Menu';
import { ReactComponent as TAG } from './svg/tagLogo.svg';
import { ReactComponent as ThirdAndGrove } from './svg/thirdAndGroveLogo.svg';
import { ReactComponent as Close } from './svg/close.svg';
import { ReactComponent as Hamburger } from './svg/hamburger.svg';
import { colors, mediaQueries } from '../../styles';

const TopNav = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  const size = useWindow();
  return (
    <>
      <span
        css={css`
          position: absolute;
          top: 0;
          font-family: 'Canela-Medium';
          padding: 10px 100px;
          width: 100%;
          display: flex;
          background-color: transparent;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
          ${mediaQueries.phoneLarge} {
            padding: 10px 25px;
          }
        `}
      >
        <Link to='/'>
          {typeof window !== 'undefined' &&
            (size.width >= 900 ? (
              <ThirdAndGrove
                css={css`
                  height: 150px;
                  fill: ${colors.darkgray};
                `}
              />
            ) : (
              <TAG
                css={css`
                  fill: ${colors.darkgray};
                  height: 50px;
                `}
              />
            ))}
        </Link>
        <button
          css={css`
            background-color: transparent;
            padding: 0;
            margin: 0;
            border: none;
            min-height: 25px;
            :focus {
              outline: none;
            }
          `}
          type='button'
          onClick={() => toggleOpen()}
        >
          {isOpen ? <Hamburger /> : <Close />}
        </button>
      </span>
      {/* // some transition in/out? */}
      {isOpen && <Menu toggleOpen={toggleOpen} />}
    </>
  );
};

export default TopNav;
