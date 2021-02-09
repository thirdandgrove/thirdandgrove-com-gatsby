import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import { mediaQueries, colors, fonts, weights } from '../../styles';
import { encode } from '../../util';

import Thanks from './Thanks';

const ContactForm = ({ formName, altStyle }) => {
  const [formState, updateForm] = useState({
    comments: '',
    email: '',
    name: '',
    phone: '',
    website: '',
    botField: '',
  });
  const [errors, updateErrors] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const updateInput = event => {
    updateErrors(null);
    updateForm({ ...formState, [event.target.name]: event.target.value });
  };

  const submitContact = event => {
    event.preventDefault();
    const { name, email, website, comments } = formState;
    if (hasSubmitted) {
      // Deter multiple submissions.
      updateErrors({ error: 'The form has already been submitted.' });
      return;
    }
    // Validate inputs.
    if (!name || !email || !website || !comments) {
      // Notify user of required fields.
      const currentErrs = {};
      if (!name) {
        currentErrs.name = 'Name is required';
      }
      if (!website) {
        currentErrs.website = 'Website is required';
      }
      if (!email) {
        currentErrs.email = 'Email is required';
      }
      if (!comments) {
        currentErrs.comments = 'Message is required';
      }
      updateErrors(currentErrs);
      return;
    }
    if (!website.includes('.') && website.length > 3) {
      // Currently we only validate that a dot is present
      // a more strict validation could exclude valid edgecases.
      updateErrors({ website: 'Website must be valid' });
      return;
    }
    // The form has not been submitted.
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formName, ...formState }),
    }).then(() => {
      updateForm({
        comments: 'Thank you for your inquiry.',
        email: '',
        name: '',
        phone: '',
        website: '',
      });
      setHasSubmitted(true);
    });
  };

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
    letter-spacing: 2px;
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

  const labelCss = css`
    @keyframes fadein {
      from {
        opacity: 0;
      }

      to {
        opacity: 0.7;
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

  const inactiveLabel = css`
    span {
      top: 16px;
      font-size: ${!altStyle ? '16px' : '15px'};
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

  const fullWidth = css`
    grid-column-start: 1;
    grid-column-end: 3;
  `;

  const fieldSetStyles = css`
    @keyframes fadein {
      from {
        opacity: 0;
      }

      to {
        opacity: 0.7;
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

  const fieldSetTextAreaStyles = css`
    @keyframes fadein {
      from {
        opacity: 0;
      }

      to {
        opacity: 0.7;
      }
    }

    animation: fadein 3s 1 forwards;

    &:focus-within {
      opacity: 1 !important;
    }

    border: none;
    margin: 0;
    padding: 0;
    grid-column-start: 1;
    grid-column-end: -1;
    textarea {
      height: 200px;
    }
  `;

  const hidden = css`
    display: none;
  `;

  const ErrorToaster = ({ errs }) => {
    return errs ? (
      <div
        css={css`
          margin-top: 64px;

          ${mediaQueries.xs} {
            position: relative;
            margin-top: 72px;
          }
        `}
      >
        <div
          css={css`
            text-align: center;

            ${mediaQueries.phoneLarge} {
              position: absolute;
              width: 100%;
              top: 50%;
              transform: translateY(-50%);
            }

            p {
              display: inline;
              color: ${colors.red};
            }
          `}
        >
          {errs &&
            Object.values(errs).map((err, i) => (
              <p key={err}>
                {err}{' '}
                {i !== Object.keys(errs).length - 1 && (
                  <span>&nbsp;-&nbsp;</span>
                )}
              </p>
            ))}
        </div>
      </div>
    ) : null;
  };

  return (
    <div
      css={css`
        margin: 32px auto 0;
        padding: 0 20px;
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
          onSubmit={submitContact}
        >
          <input type='hidden' name='form-name' value={formName} />
          <fieldset css={hidden}>
            {/* eslint-disable-next-line */}
            <label>
              Don’t fill this out if you&apos;re human:{' '}
              <input
                name='botField'
                value={formState.botField}
                onChange={updateInput}
              />
            </label>
          </fieldset>
          <div
            css={css`
              ${mediaQueries.phoneLarge} {
                display: grid;
                grid-template-columns: repeat(2, calc(50% - 10px));
                grid-column-gap: 20px;
                align-items: stretch;
              }
            `}
          >
            <fieldset css={fieldSetStyles}>
              {/* eslint-disable-next-line */}
              <label
                htmlFor='cf-name'
                css={[labelCss, formState.name ? activeLabel : inactiveLabel]}
              >
                <span>Name</span>
              </label>
              <Input
                css={inputStyles}
                value={formState.name}
                onChange={updateInput}
                type='text'
                name='name'
                id='cf-name'
                altStyle={altStyle}
              />
            </fieldset>

            <fieldset css={fieldSetStyles}>
              {/* eslint-disable-next-line */}
              <label
                htmlFor='cf-email'
                css={[labelCss, formState.email ? activeLabel : inactiveLabel]}
              >
                <span>Email</span>
              </label>
              <Input
                css={inputStyles}
                value={formState.email}
                onChange={updateInput}
                type='email'
                name='email'
                id='cf-email'
                altStyle={altStyle}
              />
            </fieldset>

            <fieldset css={fieldSetStyles}>
              <label
                htmlFor='cf-website'
                css={[
                  labelCss,
                  formState.website ? activeLabel : inactiveLabel,
                ]}
              >
                <span>Website</span>{' '}
              </label>
              <Input
                css={inputStyles}
                value={formState.website}
                onChange={updateInput}
                name='website'
                id='cf-website'
                altStyle={altStyle}
              />
            </fieldset>

            <fieldset css={fieldSetStyles}>
              <label
                htmlFor='cf-phone'
                css={[labelCss, formState.phone ? activeLabel : inactiveLabel]}
              >
                <span>Phone [optional]</span>{' '}
              </label>
              <Input
                css={inputStyles}
                value={formState.phone}
                onChange={updateInput}
                type='tel'
                name='phone'
                id='cf-phone'
                altStyle={altStyle}
              />
            </fieldset>

            <fieldset css={fieldSetTextAreaStyles}>
              <label
                htmlFor='cf-message'
                css={[
                  labelCss,
                  fullWidth,
                  formState.comments ? activeLabel : inactiveLabel,
                ]}
              >
                <span>Leave a Message</span>{' '}
              </label>
              <TextArea
                value={formState.comments}
                onChange={updateInput}
                data-cy='messageField'
                name='comments'
                id='cf-message'
                altStyle={altStyle}
              />
            </fieldset>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-top: 35px;
              margin-bottom: -50px;

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
};

ContactForm.propTypes = {
  formName: PropTypes.string,
  altStyle: PropTypes.bool,
};

ContactForm.defaultProps = {
  formName: 'contact',
  altStyle: false,
};

export default ContactForm;
