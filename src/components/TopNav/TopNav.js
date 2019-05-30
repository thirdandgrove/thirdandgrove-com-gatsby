import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import useWindow from '../../hooks/useWindow';
import Menu from '../Menu';
import { ReactComponent as TAG } from './svg/tagLogo.svg';
import { ReactComponent as ThirdAndGrove } from './svg/thirdAndGroveLogo.svg';
import Close from './svg/close';
import Hamburger from './svg/hamburger';
import { colors, mediaQueries, jsBreakpoints } from '../../styles';

const TopNav = ({ height, invert }) => {
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
          {/* this guard keeps the Gatsby build from breaking */}
          {typeof window !== 'undefined' &&
            (size.width > jsBreakpoints.phoneLarge ? (
              <ThirdAndGrove
                css={css`
                  height: 150px;
                  fill: ${invert ? colors.white : colors.darkgray};
                `}
              />
            ) : (
              <TAG
                css={css`
                  fill: ${invert ? colors.white : colors.darkgray};
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
          {isOpen ? (
            <Hamburger fill={invert ? colors.white : colors.darkgray} />
          ) : (
            <Close fill={invert ? colors.white : colors.darkgray} />
          )}
        </button>
      </span>
      {/* // some transition in/out? */}
      {isOpen && <Menu toggleOpen={toggleOpen} height={height} />}
    </>
  );
};

TopNav.propTypes = {
  invert: PropTypes.bool,
  height: PropTypes.string,
};

TopNav.defaultProps = {
  invert: false,
  height: '700px',
};

export default TopNav;
