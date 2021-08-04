import React, { useState } from 'react';
import { Global, css } from '@emotion/react';
import PropTypes from 'prop-types';

import FullWidthSection from '../FullWidthSection';
import { mediaQueries, colors, fonts, weights } from '../../styles';
import Button from '../Button';
import { encode } from '../../util';

const OverlayForm = ({
  buttonText,
  confirmMessage,
  header,
  subheader,
  isActive,
  setIsActive,
  formName,
  setFormSubmitted,
}) => {
  const [formState, updateForm] = useState({
    email: '',
    company: '',
    privacyPolicy: false,
    botField: '',
  });

  const [errors, updateErrors] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
    setHasSubmitted(false);
  };

  const updateInput = event => {
    updateErrors(null);
    updateForm({
      ...formState,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const { email, company, privacyPolicy } = formState;

    if (hasSubmitted) {
      // Deter multiple submissions.
      updateErrors({ error: 'The form has already been submitted.' });
      return;
    }
    // Validate inputs.
    if (!email || !company || !privacyPolicy) {
      // Notify user of required fields.
      const currentErrs = {};

      if (!email) {
        currentErrs.email = 'Email is required';
      }

      if (!company) {
        currentErrs.company = 'Company is required';
      }

      if (!privacyPolicy) {
        currentErrs.privacyPolicy = 'This checkbox is required for download';
      }

      updateErrors(currentErrs);
      return;
    }
    // The form has not been submitted.
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formName, ...formState }),
    }).then(() => {
      updateForm({
        email: '',
        company: '',
        privacyPolicy: false,
      });
      setIsActive(!isActive);
      setHasSubmitted(true);
      setFormSubmitted(true);
    });
  };

  const ReturnError = ({ errs, name }) => {
    return errs ? (
      <div
        css={css`
          margin-bottom: 10px;
          margin-top: -10px;
          ${mediaQueries.xs} {
            position: relative;
          }
        `}
      >
        <div
          css={css`
            ${mediaQueries.phoneLarge} {
            }

            p {
              display: inline;
              color: ${colors.red};
            }
          `}
        >
          {errs && Object.entries(errs).map(err => name === err[0] && <p key={err[1]}>{err[1]}</p>)}
        </div>
      </div>
    ) : null;
  };

  ReturnError.propTypes = {
    errs: PropTypes.array,
    name: PropTypes.string,
  };

  ReturnError.defaultProps = {
    errs: [],
    name: '',
  };

  const fieldsetStyles = css`
    border: none;
    margin: 0 0 10px;
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

  const flexStyles = css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0;

    ${mediaQueries.phoneLarge} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
  `;

  const checkBoxStyles = css`
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 1.5;

    span {
      font-size: 12px;
      line-height: 1.5;
    }

    div {
      margin-bottom: 10px;
      p {
        display: block;
        margin-bottom: 0;
        font-size: 12px;
      }
    }

    div > label {
      display: flex;
      justify-content: flex-start;
      font-size: 12px;
      margin-bottom: 16px;

      input {
        border: none;
        outline: none;
        width: 20px;
        flex: 0 1 20px;
        height: 20px;
      }

      span {
        flex: 10;
        margin-left: 10px;
        font-size: 12px;
      }
    }
  `;

  const solidButtonStyles = css`
    ${mediaQueries.phoneLarge} {
      display: inline-block;
    }

    span {
      background-image: linear-gradient(to bottom, ${colors.white}, ${colors.white} 50%, ${colors.white} 50%);
    }

    &::before {
      background: ${colors.tagGray};
      height: 100%;
    }

    max-width: 225px;
    width: 100%;
    margin: auto;
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
        `}
      >
        <div
          css={css`
            width: calc(100% - 60px);
            background-color: ${colors.white};
            padding: 72px 24px;
            position: relative;
            overflow-y: ${hasSubmitted ? `auto` : `scroll`};

            @media (max-width: 900px) and (orientation: landscape) {
              padding: 4% 24px;
            }

            @media (max-width: 475px) {
              padding: 125px 24px;
            }

            ${mediaQueries.tablet} {
              overflow-y: initial;
              width: 100%;
              max-width: 700px;
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
            {!hasSubmitted ? (
              <form
                name={`${formName}`}
                data-netlify='true'
                netlify-honeypot='bot-field'
                css={css`
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                `}
              >
                <input type='hidden' name={`${formName}`} value={`${formName}`} />

                <fieldset css={[fieldsetStyles, flexStyles]}>
                  <div>
                    <input
                      css={inputStyles}
                      value={formState.email}
                      onChange={updateInput}
                      type='email'
                      name='email'
                      id='of-email'
                      placeholder='Work Email'
                    />
                    <ReturnError errs={errors} name='email' />
                  </div>

                  <div>
                    <input
                      css={inputStyles}
                      value={formState.company}
                      onChange={updateInput}
                      type='text'
                      name='company'
                      id='of-company'
                      placeholder='Company'
                    />
                    <ReturnError errs={errors} name='company' />
                  </div>
                </fieldset>

                <fieldset css={[fieldsetStyles, checkBoxStyles]}>
                  <div>
                    <label htmlFor='of-privacyPolicy'>
                      <input
                        css={inputStyles}
                        value={formState.privacyPolicy}
                        onChange={updateInput}
                        type='checkbox'
                        name='privacyPolicy'
                        id='of-privacyPolicy'
                      />
                      <span>
                        By entering your email, you agree to receive emails from Third and Grove. Your information will
                        be processed in accordance with our Privacy Policy. We do not sell, rent, or lease your data to
                        third parties, and we will not provide your personal information to any third party individual,
                        government agency, or company.
                      </span>
                    </label>
                    <ReturnError errs={errors} name='privacyPolicy' />
                  </div>
                </fieldset>

                <Button onClick={onSubmit} disabled={hasSubmitted} css={solidButtonStyles}>
                  {hasSubmitted ? confirmMessage : buttonText}
                </Button>
              </form>
            ) : (
              <p>{confirmMessage}</p>
            )}
          </div>
        </div>
      </FullWidthSection>
    </>
  );
};

OverlayForm.propTypes = {
  setIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  buttonText: PropTypes.string,
  confirmMessage: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  formName: PropTypes.string,
  setFormSubmitted: PropTypes.func,
};

OverlayForm.defaultProps = {
  buttonText: 'Sign Me Up',
  confirmMessage: 'Thank You',
  header: 'Illuminating stuff, right?',
  subheader: 'Join our mailing list and you can stay this informed all the time.',
  formName: 'overlay-form',
  setFormSubmitted: () => {},
};

export default OverlayForm;
