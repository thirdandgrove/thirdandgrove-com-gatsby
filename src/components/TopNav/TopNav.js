import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import useWindow from '../../hooks/useWindow';
import Menu from '../Menu';
import { colors, mediaQueries, jsBreakpoints, container } from '../../styles';

import TagLogo from './svg/TagLogo';
import ThirdAndGrove from './svg/ThirdAndGrove';
import Hamburger from './svg/hamburger';

const TopNav = ({ fill, hideNav, banner, navLink }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);
  const [acquiaOpen, setAcquiaOpen] = useState(false);
  const toggleAcquiaOpen = () => setAcquiaOpen(!acquiaOpen);
  const [isDate, setDate] = useState(false);
  const { width } = useWindow();

  useEffect(() => {
    setDate(new Date() > new Date('2021-04-12'));
  }, []);

  return (
    <>
      {hideNav && !banner && (
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
              justify-content: center;
              align-items: center;
              z-index: 4;

              ${mediaQueries.phoneLarge} {
                padding-top: 30px;
              }
            `,
          ]}
        >
          <ThirdAndGrove
            css={css`
              height: 22px;
              fill: ${isOpen ? colors.lightgray : fill};
            `}
          />
        </div>
      )}

      {!hideNav && !banner && (
        <>
          {' '}
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
            <Link to='/' aria-label='return to homepage' data-cy='homeButton'>
              {/* This guard keeps the Gatsby build from breaking by ensuring this code isn't run at build time. */}
              {typeof window !== 'undefined' &&
                (width > jsBreakpoints.phoneLarge ? (
                  <ThirdAndGrove
                    css={css`
                      height: 22px;
                      fill: ${isOpen ? colors.lightgray : fill};
                    `}
                  />
                ) : (
                  <TagLogo
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
              aria-label='open site menu'
            >
              <Hamburger
                fill={isOpen ? colors.lightgray : fill}
                isOpen={isOpen}
              />
            </button>
          </div>
          <Menu toggleOpen={toggleOpen} menuOpen={isOpen} />
        </>
      )}

      {hideNav && banner && isDate && (
        <div
          css={[
            container.max,
            css`
              position: absolute;
              top: 0;
              padding-top: 20px;
              padding-bottom: 20px;
              display: ${acquiaOpen ? `none` : `flex`};

              z-index: 4;
              width: 100%;
              background-color: ${colors.white};
              color: ${colors.tagGray};

              p {
                margin-bottom: 0;
                justify-content: center;
                align-items: center;
              }

              img {
                margin: 0;
                max-width: 120px;
              }

              .image {
                width: 50px;
              }

              a {
                color: ${colors.black};
                font-size: 18px;
                text-decoration: underline;
              }

              a:hover {
                color: ${colors.tagGray};
              }

              .top-bar--container {
                display: flex;
                width: 100%;
              }

              .left {
                img {
                  display: none;
                }

                ${mediaQueries.tablet} {
                  flex: 1;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  img {
                    display: block;
                  }
                }
              }

              .center {
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 1;
                text-align: center;
              }

              .right {
                ${mediaQueries.tablet} {
                  flex: 1;
                  display: flex;
                  justify-content: flex-end;
                  align-items: center;
                }
              }
            `,
          ]}
        >
          <div className='top-bar--container'>
            <div className='left' />

            <div className='center'>
              <p>
                <a href={navLink} target='_blank' rel='noreferrer'>
                  Join the Live Event Now!
                </a>
              </p>
            </div>
            <div className='right'>
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
                  color: #fff;
                `}
                type='button'
                onClick={() => toggleAcquiaOpen()}
                data-cy='menuButton'
                aria-label='open site menu'
              >
                &#10006;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

TopNav.propTypes = {
  fill: PropTypes.string,
  hideNav: PropTypes.bool,
  banner: PropTypes.bool,
  navLink: PropTypes.string.isRequired,
};

TopNav.defaultProps = {
  fill: colors.lightgray,
  hideNav: false,
  banner: false,
};

export default TopNav;
