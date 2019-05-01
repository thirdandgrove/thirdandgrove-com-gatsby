import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import useWindow from '../../hooks/useWindow';
import Menu from '../Menu';
import { ReactComponent as TAG } from './svg/tagLogo.svg';
import { ReactComponent as ThirdANDGrove } from './svg/thirdAndGroveLogo.svg';
import { colors } from '../../styles';

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
        `}
      >
        <Link to='/'>
          {size.width > 900 ? (
            <ThirdANDGrove
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
          )}
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
          {/* Hamburger / 'X' */}
          {isOpen ? (
            <svg
              width='25px'
              height='25px'
              viewBox='0 0 21 21'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g
                id='Concept-01'
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
              >
                <g
                  id='Desktop---Menu'
                  transform='translate(-1287.000000, -33.000000)'
                >
                  <rect x='0' y='0' width='1440' height='700' />
                  <g
                    id='X-Icon'
                    transform='translate(1287.000000, 33.000000)'
                    fill='#282829'
                  >
                    <rect
                      id='Rectangle'
                      transform='translate(10.500000, 10.500000) rotate(45.000000) translate(-10.500000, -10.500000) '
                      x='-2'
                      y='9'
                      width='25'
                      height='3'
                    />
                    <rect
                      id='Rectangle'
                      transform='translate(10.500000, 10.500000) rotate(-45.000000) translate(-10.500000, -10.500000) '
                      x='-2'
                      y='9'
                      width='25'
                      height='3'
                    />
                  </g>
                </g>
              </g>
            </svg>
          ) : (
            <svg
              width='25px'
              height='25px'
              viewBox='0 0 25 23'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g
                id='Concept-01'
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
              >
                <g
                  id='Desktop---Work'
                  transform='translate(-1285.000000, -32.000000)'
                >
                  <rect x='0' y='0' width='1440' height='5040' />
                  <g id='Hero' fill='#282829'>
                    <g
                      id='Hamburger'
                      transform='translate(1285.000000, 32.000000)'
                    >
                      <rect id='Rectangle' x='0' y='0' width='25' height='3' />
                      <rect id='Rectangle' x='0' y='20' width='25' height='3' />
                      <rect id='Rectangle' x='8' y='10' width='17' height='3' />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          )}
        </button>
      </span>
      {/* // some transition in/out? */}
      {isOpen && <Menu toggleOpen={toggleOpen} />}
    </>
  );
};

export default TopNav;
