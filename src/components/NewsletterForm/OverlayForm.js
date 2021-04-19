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
}) => {
  const [formState, updateForm] = useState({
    email: '',
    name: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
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
    updateForm({ ...formState, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    const {
      name,
      email,
      addressOne,
      city,
      state,
      country,
      zipcode,
    } = formState;
    if (hasSubmitted) {
      // Deter multiple submissions.
      updateErrors({ error: 'The form has already been submitted.' });
      return;
    }
    // Validate inputs.
    if (
      !name ||
      !email ||
      !addressOne ||
      !city ||
      !state ||
      !country ||
      !zipcode
    ) {
      // Notify user of required fields.
      const currentErrs = {};
      if (!name) {
        currentErrs.name = 'Name is required';
      }
      if (!email) {
        currentErrs.email = 'Email is required';
      }
      if (!addressOne) {
        currentErrs.addressOne = 'Address is required';
      }
      if (!city) {
        currentErrs.city = 'City is required';
      }
      if (!state) {
        currentErrs.state = 'State/Region is required';
      }
      if (!country) {
        currentErrs.country = 'Country is required';
      }
      if (!zipcode) {
        currentErrs.zipcode = 'Zipcode is required';
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
        name: '',
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
      });
      setHasSubmitted(true);
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
          {errs &&
            Object.entries(errs).map(
              (err, i) => name === err[0] && <p key={err[1]}>{err[1]}</p>
            )}
        </div>
      </div>
    ) : null;
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
            overflow-y: ${hasSubmitted ? `auto` : `scroll`};

            @media (max-width: 475px) {
              padding: 125px 24px;
            }

            ${mediaQueries.phoneLarge} {
              overflow-y: initial;
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
                <input
                  type='hidden'
                  name={`${formName}`}
                  value={`${formName}`}
                />
                <fieldset css={[fieldsetStyles, flexStyles]}>
                  <div>
                    <input
                      css={inputStyles}
                      value={formState.name}
                      onChange={updateInput}
                      type='text'
                      name='name'
                      id='of-name'
                      placeholder='Name'
                    />
                    <ReturnError errs={errors} name='name' />
                  </div>
                  <div>
                    <input
                      css={inputStyles}
                      value={formState.email}
                      onChange={updateInput}
                      type='email'
                      name='email'
                      id='of-email'
                      placeholder='Email'
                    />
                    <ReturnError errs={errors} name='email' />
                  </div>
                </fieldset>
                <fieldset css={[fieldsetStyles, flexStyles]}>
                  <div>
                    <input
                      css={inputStyles}
                      value={formState.addressOne}
                      onChange={updateInput}
                      type='text'
                      name='addressOne'
                      id='of-addressOne'
                      placeholder='Address 1'
                    />
                    <ReturnError errs={errors} name='addressOne' />
                  </div>
                  <div>
                    <input
                      css={inputStyles}
                      value={formState.addressTwo}
                      onChange={updateInput}
                      type='text'
                      name='addressTwo'
                      id='of-addressTwo'
                      placeholder='Address 2 [Optional]'
                    />
                  </div>
                </fieldset>

                <fieldset css={[fieldsetStyles, flexStyles]}>
                  <div>
                    <input
                      css={inputStyles}
                      value={formState.city}
                      onChange={updateInput}
                      type='text'
                      name='city'
                      id='of-city'
                      placeholder='City'
                    />
                    <ReturnError errs={errors} name='city' />
                  </div>
                  <div>
                    <input
                      css={inputStyles}
                      value={formState.state}
                      onChange={updateInput}
                      type='text'
                      name='state'
                      id='of-state'
                      placeholder='State/Region'
                    />
                    <ReturnError errs={errors} name='state' />
                  </div>
                </fieldset>

                <fieldset css={[fieldsetStyles, flexStyles]}>
                  <div>
                    <input
                      css={inputStyles}
                      value={formState.country}
                      onChange={updateInput}
                      type='text'
                      name='country'
                      id='of-country'
                      placeholder='Country'
                    />
                    <ReturnError errs={errors} name='country' />
                  </div>
                  <div>
                    <input
                      css={inputStyles}
                      value={formState.zipcode}
                      onChange={updateInput}
                      type='number'
                      name='zipcode'
                      id='of-zipcode'
                      placeholder='Zipcode'
                    />
                    <ReturnError errs={errors} name='zipcode' />
                  </div>
                </fieldset>
                <Button
                  onClick={onSubmit}
                  disabled={hasSubmitted}
                  css={css`
                    max-width: 200px;
                    width: 100%;
                    margin: auto;
                  `}
                >
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
};

OverlayForm.defaultProps = {
  buttonText: 'Sign Me Up',
  confirmMessage: 'Thank You',
  header: 'Illuminating stuff, right?',
  subheader:
    'Join our mailing list and you can stay this informed all the time.',
  formName: 'overlay-form',
};

export default OverlayForm;
