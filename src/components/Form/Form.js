import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import { mediaQueries, colors, fonts, weights } from '../../styles';
import { encode } from '../../util';
import ErrorToaster from './Error';

function Form({ formName, altStyle }) {
  const [formState, updateForm] = useState({
    whatDidYouNeedHelpWith: '',
    workEmail: '',
    howDidYouHearAboutUs: '',
    botField: '',
  });
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [errors, updateErrors] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  let currentErrs = {};
  const submitform = async e => {
    e.preventDefault();
    const { howDidYouHearAboutUs, workEmail, whatDidYouNeedHelpWith } =
      formState;

    if (hasSubmitted) {
      // Deter multiple submissions.
      updateErrors({ error: 'The form has already been submitted.' });
      return;
    }

    // Validate inputs.
    if (!howDidYouHearAboutUs || !workEmail || !whatDidYouNeedHelpWith) {
      // Notify user of required fields.
      currentErrs = {};

      if (!howDidYouHearAboutUs) {
        currentErrs.howDidYouHearAboutUs =
          'How did you hear about us? is required';
      }
      if (!whatDidYouNeedHelpWith) {
        currentErrs.whatDidYouNeedHelpWith =
          'What do you need help with? is required';
      }
      if (!workEmail) {
        currentErrs.workEmail = 'Email is required';
      }
      updateErrors(currentErrs);
      return;
    }

    if (
      ['gmail', 'aol', 'yahoo', 'comcast', 'hotmail'].some(substring =>
        workEmail.includes(substring)
      )
    ) {
      updateErrors({ workEmailDomain: `Email must use your company's domain` });
      return;
    }

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
        workEmail: '',
        howDidYouHearAboutUs: '',
        whatDidYouNeedHelpWith: '',
      });
      setHasSubmitted(true);
    }
  };
  const updateInput = event => {
    updateErrors(null);
    updateForm({ ...formState, [event.target.name]: event.target.value });
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
  `;
  const labelCss = css``;
  const activeLabel = css``;
  const inactiveLabel = css``;
  const inputStyles = css``;
  const errorLabel = css`
    color: ${colors.red};

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
      <form
        name={formName}
        method='POST'
        data-netlify='true'
        data-cy='contactForm'
        netlify-honeypot='botField'
        onSubmit={submitform}
        data-netlify-recaptcha='true'
      >
        <input type='hidden' name='form-name' value={formName} />
        <input
          type='hidden'
          name='botField'
          value={formState.botField}
          onChange={updateInput}
        />
        <fieldset css={fieldSetStyles}>
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
            </span>
            <Input
              css={inputStyles}
              value={formState.workEmail}
              onChange={updateInput}
              type='workEmail'
              name='workEmail'
              id='cf-workEmail'
              altStyle={altStyle}
            />{' '}
          </label>
          <label
            htmlFor='cf-whatDidYouNeedHelpWith'
            css={[
              labelCss,
              formState.name ? activeLabel : inactiveLabel,
              errors?.whatDidYouNeedHelpWith ? errorLabel : '',
            ]}
          >
            <span>
              What do you need help with? <sup>*</sup>
            </span>
            <TextArea
              value={formState.whatDidYouNeedHelpWith}
              onChange={updateInput}
              name='whatDidYouNeedHelpWith'
              id='cf-whatDidYouNeedHelpWith'
              altStyle={altStyle}
            />
          </label>
          <label
            htmlFor='cf-howDidYouHearAboutUs'
            css={[
              labelCss,
              formState.name ? activeLabel : inactiveLabel,
              errors?.howDidYouHearAboutUs ? errorLabel : '',
            ]}
          >
            <span>
              How did you hear about us? <sup>*</sup>
            </span>
            <TextArea
              value={formState.howDidYouHearAboutUs}
              onChange={updateInput}
              data-cy='messageField'
              name='howDidYouHearAboutUs'
              id='cf-howDidYouHearAboutUs'
              altStyle={altStyle}
            />
          </label>
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
        <ErrorToaster errs={[errors?.workEmailDomain]} />
      </form>
    </div>
  );
}

Form.propTypes = {};

export default Form;
