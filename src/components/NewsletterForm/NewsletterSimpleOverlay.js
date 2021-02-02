import React, { useState } from 'react';
import { Global, css } from '@emotion/react';
import PropTypes from 'prop-types';

import FullWidthSection from '../FullWidthSection';
import { mediaQueries, colors, fonts, weights } from '../../styles';
import Button from '../Button';
import { encode } from '../../util';

const NewsletterSimpleOverlay = ({
  buttonText,
  confirmMessage,
  header,
  subheader,
  isActive,
  setIsActive,
}) => {
  const [email, updateEmail] = useState('');
  const [submitted, hasSubmitted] = useState(false);
  const toggle = () => setIsActive(!isActive);
  const onSubmit = evt => {
    evt.preventDefault();
    if (!email) {
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'acquia-engage', email }),
    }).then(() => {
      updateEmail('');
      hasSubmitted(true);
      setTimeout(() => {
        setIsActive(!isActive);
      }, 1000);
    });
  };

  const fieldsetStyles = css`
    border: none;
    margin: 0;
    padding: 0;
  `;

  const inputStyles = css`
    background: transparent;
    outline: 1px solid ${colors.darkgray};
    border: none;
    height: 50px;
    color: ${colors.darkgray};
    font-family: ${fonts.sans};
    font-weight: ${weights.light};
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 1.3;
    padding: 0 20px;
    margin-bottom: 20px;
    width: 100%;

    &::placeholder {
      color: ${colors.darkgray};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      /* this hack allows the background color of autocomplete to stay transparent */
      transition: background-color 5000s ease-in-out 0s;
    }

    &:invalid {
      border: ${colors.red} 1px solid;
    }
  `;

  return (
    <>
      <Global
        styles={css`
          .active {
            display: flex !important;
          }
        `}
      />
      <FullWidthSection
        className={isActive ? 'active' : ''}
        padding='60px 20px'
        css={css`
          ${mediaQueries.phoneLarge} {
          }
          position: fixed;
          padding: 0;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          display: none;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          background-color: ${colors.darkergrayFaded};
          z-index: 9999;
          }
        `}
      >
        <div
          css={css`
            ${mediaQueries.phoneLarge} {
              width: 700px;
              padding: 115px 24px;
            }

            @media (max-width: 900px) and (orientation: landscape) {
              padding: 4% 24px;
            }

            width: calc(100% - 60px);
            background-color: ${colors.white};
            padding: 72px 24px;
            position: relative;

            @media (max-width: 475px) {
              padding: 125px 24px;
            }
          `}
        >
          <button
            type='button'
            onClick={toggle}
            css={css`
              ${mediaQueries.phoneLarge} {
                top: -30px;
                right: -30px;
                padding: 20px;
              }
              position: absolute;
              top: 12px;
              right: 12px;
              border: none;
              display: flex;
              justify-content: center;
              align-items: center;
              touch-action: manipulation;
              cursor: pointer;
              user-select: none;
              background-color: ${colors.tagGray};
              padding: 15px;
              transition: none;
              border-radius: 9px;
            `}
          >
            <span
              role='img'
              aria-label='close'
              css={css`
                ${mediaQueries.phoneLarge} {
                }
                color: ${colors.white};
                height: 30px;
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                &:before {
                  content: ' before ';
                  transform: rotate(45deg);
                  position: absolute;
                  content: ' ';
                  height: 30px;
                  width: 4px;
                  background-color: ${colors.white};
                }
                &:after {
                  content: ' after ';
                  transform: rotate(-45deg);
                  position: absolute;
                  content: ' ';
                  height: 30px;
                  width: 4px;
                  background-color: ${colors.white};
                }
              `}
            />
          </button>
          <h1
            css={css`
              ${mediaQueries.phoneLarge} {
                color: ${colors.reallydarkgray};
                font-family: ${fonts.serif};
                font-size: 40px;
                font-weight: 700;
                line-height: 45px;
              }
              width: 100%;
              color: ${colors.reallydarkgray};
              font-family: ${fonts.serif};
              font-size: 30px;
              font-weight: 700;
              line-height: 36px;
              margin-bottom: 12px;
            `}
          >
            {header}
          </h1>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <p
              css={css`
                ${mediaQueries.phoneLarge} {
                  width: 335px;
                  color: ${colors.reallydarkgray};
                  font-family: ${fonts.sans};
                  font-size: 16px;
                  font-weight: 300;
                  letter-spacing: 0.2px;
                  line-height: 27px;
                }
                width: 275px;
                color: ${colors.reallydarkgray};
                font-family: ${fonts.sans};
                font-size: 16px;
                font-weight: 300;
                letter-spacing: 0.2px;
                line-height: 27px;
              `}
            >
              {subheader}
            </p>
            <form
              name='acquia-engage'
              data-netlify='true'
              netlify-honeypot='bot-field'
              css={css`
                display: flex;
                justify-content: center;
                flex-direction: column;
              `}
            >
              <input type='hidden' name='form-name' value='acquia-engage' />
              <fieldset css={fieldsetStyles}>
                {!submitted && (
                  <input
                    css={inputStyles}
                    type='email'
                    name='email'
                    id='nws-email'
                    placeholder='Email'
                    value={email}
                    onChange={evt => updateEmail(evt.target.value)}
                  />
                )}
              </fieldset>
              <Button
                onClick={onSubmit}
                disabled={submitted}
                css={css`
                  max-width: 200px;
                  width: 100%;
                  margin: auto;
                `}
              >
                {submitted ? confirmMessage : buttonText}
              </Button>
            </form>
          </div>
        </div>
      </FullWidthSection>
    </>
  );
};

NewsletterSimpleOverlay.propTypes = {
  setIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  buttonText: PropTypes.string,
  confirmMessage: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
};

NewsletterSimpleOverlay.defaultProps = {
  buttonText: 'Sign Me Up',
  confirmMessage: 'Thank You',
  header: 'Illuminating stuff, right?',
  subheader:
    'Join our mailing list and you can stay this informed all the time.',
};

export default NewsletterSimpleOverlay;
