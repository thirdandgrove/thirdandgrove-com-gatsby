import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import { mediaQueries, colors, fonts, weights } from '../../styles';
import { encode } from '../../util';
import ErrorToaster from './Error';
import Thanks from '../Thanks';

function Form({ formName, altStyle }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formState, updateForm] = useState({
    whatDidYouNeedHelpWith: '',
    workEmail: '',
    howDidYouHearAboutUs: '',
    botField: '',
  });

  const updateInput = event => {
    updateErrors(null);
    updateForm({ ...formState, [event.target.name]: event.target.value });
  };

  const [errors, updateErrors] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  let currentErrs = {};

  const verifyToken = async token => {
    try {
      const response = await fetch('/.netlify/functions/verify', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error ', error);
    }
    return null;
  };

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitform = async e => {
    e.preventDefault();
    currentErrs = {};

    if (!executeRecaptcha) {
      console.log('Recaptcha has not been loaded');
      return;
    }

    const { howDidYouHearAboutUs, workEmail, whatDidYouNeedHelpWith } =
      formState;

    if (hasSubmitted) {
      // Deter multiple submissions.
      updateErrors({ error: 'The form has already been submitted.' });
      return;
    }

    // Validate inputs.
    if (
      !howDidYouHearAboutUs ||
      !workEmail ||
      !whatDidYouNeedHelpWith ||
      ['gmail', 'aol', 'yahoo', 'comcast', 'hotmail'].some(substring =>
        workEmail.includes(substring)
      ) ||
      !validateEmail(workEmail)
    ) {
      // Notify user of required fields.
      if (
        ['gmail', 'aol', 'yahoo', 'comcast', 'hotmail'].some(substring =>
          workEmail.includes(substring)
        )
      ) {
        currentErrs.workEmail = `Email must use your company's domain`;
      }

      if (!workEmail) {
        currentErrs.workEmail = 'Email is required';
      }

      if (!validateEmail(workEmail)) {
        currentErrs.workEmail = `Must be a valid email address.`;
      }

      if (!whatDidYouNeedHelpWith) {
        currentErrs.whatDidYouNeedHelpWith =
          'What do you need help with? is required';
      }

      if (!howDidYouHearAboutUs) {
        currentErrs.howDidYouHearAboutUs =
          'How did you hear about us? is required';
      }

      updateErrors(currentErrs);
      return;
    }

    // If all verification passes, generate token.
    const token = await executeRecaptcha('form');

    if (token) {
      try {
        const validToken = await verifyToken(token);

        if (validToken.success) {
          const formResponse = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': formName, ...formState }),
          });

          if (!formResponse.ok) {
            const message = `An error has occured: ${formResponse.status}`;
            throw new Error(message);
          }

          if (formResponse.ok) {
            updateForm({
              whatDidYouNeedHelpWith: '',
              workEmail: '',
              howDidYouHearAboutUs: '',
            });
            setHasSubmitted(true);
          }
        }
      } catch (error) {
        updateForm({
          whatDidYouNeedHelpWith: '',
          workEmail: '',
          howDidYouHearAboutUs: '',
        });
        const message = `An error has occured: ${error}, please try again`;
        updateErrors({
          error: message,
        });
      }
    }
  };

  const fieldSetStyles = css`
    @keyframes fadein {
      from {
        ${!altStyle ? 'opacity : 0' : ''};
      }

      to {
        ${!altStyle ? 'opacity : 0.7' : ''};
      }
    }

    animation: fadein 3s 1 forwards;

    &:focus-within {
      opacity: 1 !important;
    }

    border: none;
    margin: 0;
    padding: 0;
    display: grid;

    textarea,
    input {
      margin-bottom: 16px;
      letter-spacing: 0.5px;
    }

    label {
      margin-top: 0;
    }
  `;

  const labelCss = css`
    @keyframes fadein {
      from {
        ${!altStyle ? 'opacity : 0' : ''};
      }

      to {
        ${!altStyle ? 'opacity : 0.7' : ''};
      }
    }

    display: block;
    position: relative;
    width: 100%;
    animation: fadein 3s 1 forwards;

    &:focus-within {
      opacity: 1 !important;
    }

    span {
      position: absolute;
      left: 20px;
      font-family: ${fonts.sans};
      font-weight: ${!altStyle ? weights.light : weights.bold};
      text-transform: ${!altStyle ? 'none' : 'uppercase'};
      line-height: 1.3;
      transition: 0.3s ease all;
      color: ${!altStyle ? 'inherit' : colors.tagGray};
    }

    input,
    textarea {
      letter-spacing: 0;
    }
  `;

  const activeLabel = css`
    opacity: 1 !important;
    animation: none;

    span {
      top: 6px;
      font-size: 9px;
    }

    input {
      padding-top: 10px;
    }
  `;

  const inactiveLabel = css`
    span {
      top: 16px;
      font-size: ${!altStyle ? '16px' : '15px'};
      font-weight: bold;
      color: ${colors.black};
    }
  `;

  const inputStyles = css`
    background: transparent;
    outline-color: ${!altStyle ? colors.darkgray : colors.tagGray};
    outline-width: 1px;
    outline-style: solid;
    border: none;
    height: 50px;
    color: ${colors.darkgray};
    font-family: ${fonts.sans};
    font-weight: ${weights.light};
    font-size: 16px;
    line-height: 1.3;
    padding: 0 20px;
    margin-bottom: 20px;
    width: 100%;
    padding-top: 10px;

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
  const errorLabel = css`
    color: ${colors.red};
    border-color: ${colors.red};
    outline-color: ${colors.red};

    input,
    textarea {
      border-color: ${colors.red};
      outline-color: ${colors.red};
    }
  `;

  return (
    <div
      css={css`
        margin: 32px auto 0;
        padding: 0 20px 32px;
        width: 100%;
        max-width: 920px;
        min-height: 450px;

        ${mediaQueries.xs} {
          margin-top: 36px;
        }
      `}
    >
      {!hasSubmitted ? (
        <form
          name={formName}
          method='POST'
          data-netlify='true'
          data-cy='contactForm'
          netlify-honeypot='botField'
          onSubmit={submitform}
        >
          <input type='hidden' name='form-name' value={formName} />
          <input
            type='hidden'
            name='botField'
            value={formState.botField}
            onChange={updateInput}
          />
          <fieldset css={[fieldSetStyles]}>
            <label
              htmlFor='cf-workEmail'
              css={[
                labelCss,
                formState.workEmail ? activeLabel : inactiveLabel,
                errors?.workEmail || errors?.workEmailDomain ? errorLabel : '',
              ]}
            >
              <span>
                Work Email <sup>*</sup>
              </span>{' '}
            </label>
            <Input
              css={[
                inputStyles,
                errors?.workEmail || errors?.workEmailDomain ? errorLabel : '',
              ]}
              value={formState.workEmail}
              onChange={updateInput}
              type='workEmail'
              name='workEmail'
              id='cf-workEmail'
              altStyle={altStyle}
            />

            <label
              htmlFor='cf-whatDidYouNeedHelpWith'
              css={[
                labelCss,
                formState.whatDidYouNeedHelpWith ? activeLabel : inactiveLabel,
                errors?.whatDidYouNeedHelpWith ? errorLabel : '',
              ]}
            >
              <span>
                What do you need help with? <sup>*</sup>
              </span>
            </label>
            <TextArea
              css={[errors?.whatDidYouNeedHelpWith ? errorLabel : '']}
              value={formState.whatDidYouNeedHelpWith}
              onChange={updateInput}
              name='whatDidYouNeedHelpWith'
              id='cf-whatDidYouNeedHelpWith'
              altStyle={altStyle}
            />

            <label
              htmlFor='cf-howDidYouHearAboutUs'
              css={[
                labelCss,
                formState.howDidYouHearAboutUs ? activeLabel : inactiveLabel,
                errors?.howDidYouHearAboutUs ? errorLabel : '',
              ]}
            >
              <span>
                How did you hear about us? <sup>*</sup>
              </span>{' '}
            </label>
            <TextArea
              css={[errors?.howDidYouHearAboutUs ? errorLabel : '']}
              value={formState.howDidYouHearAboutUs}
              onChange={updateInput}
              data-cy='messageField'
              name='howDidYouHearAboutUs'
              id='cf-howDidYouHearAboutUs'
              altStyle={altStyle}
            />
          </fieldset>
          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-top: 35px;

              ${mediaQueries.phoneLarge} {
                margin-bottom: 0;
              }
            `}
          >
            <Button data-cy='contactSubmit' type='submit'>
              send
            </Button>
          </div>
          <ErrorToaster errs={errors} />
        </form>
      ) : (
        <Thanks message='Thank you for your inquiry. <br/> We will be in touch soon.' />
      )}
    </div>
  );
}

Form.propTypes = {
  formName: PropTypes.string,
  altStyle: PropTypes.bool,
};

Form.defaultProps = {
  formName: 'contact',
  altStyle: false,
};

export default Form;
