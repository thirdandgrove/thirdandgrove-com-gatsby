import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import useWindow from '../../hooks/useWindow';
import Menu from '../Menu';
import { colors, mediaQueries, jsBreakpoints, container } from '../../styles';

import { ReactComponent as TAG } from './svg/tagLogo.svg';
import { ReactComponent as ThirdAndGrove } from './svg/thirdAndGroveLogo.svg';
import Hamburger from './svg/hamburger';

const TopNav = ({ fill }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  const { width } = useWindow();
  return (
    <>
      <div
        css={[
          container.max,
          css`
            position: ${isOpen ? 'fixed' : 'absolute'};
            top: 0;
            padding-top: 20px;
            padding-bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 4;

            ${mediaQueries.phoneLarge} {
              padding-top: 30px;
            }
          `,
        ]}
      >
        <Link to='/' data-cy='homeButton'>
          {/* this guard keeps the Gatsby build from breaking */}
          {typeof window !== 'undefined' &&
            (width > jsBreakpoints.phoneLarge ? (
              <ThirdAndGrove
                css={css`
                  height: 22px;
                  fill: ${isOpen ? colors.lightgray : fill};
                `}
              />
            ) : (
              <TAG
                css={css`
                  fill: ${isOpen ? colors.lightgray : fill};
                  height: 50px;
                  margin-left: -10px;
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
            cursor: pointer;
            :focus {
              outline: none;
            }
          `}
          type='button'
          onClick={() => toggleOpen()}
          data-cy='menuButton'
        >
          <Hamburger fill={isOpen ? colors.lightgray : fill} isOpen={isOpen} />
        </button>
      </div>
      {/* // some transition in/out? */}
      <Menu toggleOpen={toggleOpen} menuOpen={isOpen} />
    </>
  );
};

TopNav.propTypes = {
  fill: PropTypes.string,
};

TopNav.defaultProps = {
  fill: colors.lightgray,
};

export default TopNav;
