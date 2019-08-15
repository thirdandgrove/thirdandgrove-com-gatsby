/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { css } from '@emotion/core';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import { mediaQueries, colors, fonts, weights } from '../../styles';

const ContactForm = () => {
  const [formState, updateForm] = useState({
    comments: '',
    email: '',
    name: '',
    phone: '',
    website: '',
  });
  const [errors, updateErrors] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const updateInput = event => {
    updateErrors(null);
    updateForm({ ...formState, [event.target.name]: event.target.value });
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const submitContact = event => {
    event.preventDefault();
    const { name, email, website, comments } = formState;
    if (hasSubmitted) {
      // deter multiple submissions
      updateErrors({ error: 'The form has already been submitted.' });
      return;
    }
    // validate inputs
    if (!name || !email || !website || !comments) {
      // notify user of required fields
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
      // currently we only validate that a dot is present
      // a more strict validation could exclude valid edgecases
      updateErrors({ website: 'Website must be valid' });
      return;
    }
    // the form has not been submitted
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
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
      font-weight: ${weights.light};
      line-height: 1.3;
      transition: 0.3s ease all;
    }

    input,
    textarea {
      letter-spacing: 0;
    }
  `;

  const inactiveLabel = css`
    span {
      top: 16px;
      font-size: 16px;
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

  // eslint-disable-next-line react/prop-types
  const ErrorToaster = ({ errs }) => {
    return errs ? (
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin-top: 4rem;
          flex-direction: column;
        `}
      >
        <span
          css={css`
            align-self: center;
            width: 100%;
            text-align: center;

            ${mediaQueries.phoneLarge} {
              position: absolute;
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
        </span>
      </div>
    ) : null;
  };

  return (
    <main
      css={css`
        margin: 0 auto;
        padding: 0 20px;
        width: 100%;
        max-width: 920px;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
      `}
    >
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        data-cy='contactForm'
        netlify-honeypot='bot-field'
        onSubmit={submitContact}
      >
        <input type='hidden' name='contact' value='contact' />
        <span
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${mediaQueries.phoneLarge} {
              display: grid;
              grid-template-columns: repeat(2, calc(50% - 10px));
              grid-column-gap: 20px;
              align-items: stretch;
            }
          `}
        >
          <label
            htmlFor='cf-name'
            css={[labelCss, formState.name ? activeLabel : inactiveLabel]}
          >
            <span>Name</span>
            <Input
              value={formState.name}
              onChange={updateInput}
              type='text'
              name='name'
              id='cf-name'
            />
          </label>

          <label
            htmlFor='cf-email'
            css={[labelCss, formState.email ? activeLabel : inactiveLabel]}
          >
            <span>Email</span>
            <Input
              value={formState.email}
              onChange={updateInput}
              type='email'
              name='email'
              id='cf-email'
            />
          </label>

          <label
            htmlFor='cf-website'
            css={[labelCss, formState.website ? activeLabel : inactiveLabel]}
          >
            <span>Website</span>
            <Input
              value={formState.website}
              onChange={updateInput}
              name='website'
              id='cf-website'
            />
          </label>

          <label
            htmlFor='cf-phone'
            css={[labelCss, formState.phone ? activeLabel : inactiveLabel]}
          >
            <span>Phone [optional]</span>
            <Input
              value={formState.phone}
              onChange={updateInput}
              type='tel'
              name='phone'
              id='cf-phone'
            />
          </label>

          <label
            htmlFor='cf-message'
            css={[
              labelCss,
              fullWidth,
              formState.comments ? activeLabel : inactiveLabel,
            ]}
          >
            <span>Leave a Message</span>
            <TextArea
              value={formState.comments}
              onChange={updateInput}
              data-cy='messageField'
              name='comments'
              id='cf-message'
              css={css`
                height: 130px;

                ${mediaQueries.phoneLarge} {
                  height: 200px;
                }
              `}
            />
          </label>
        </span>
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
    </main>
  );
};

export default ContactForm;
