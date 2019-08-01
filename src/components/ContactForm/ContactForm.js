/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { css } from '@emotion/core';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import { mediaQueries, colors, fonts, weights } from '../../styles';

const ContactFrom = () => {
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
        currentErrs.comments = 'Comments is required';
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
    display: block;
    position: relative;
    width: 100%;

    span {
      position: absolute;
      left: 20px;
      font-family: ${fonts.sans};
      font-weight: ${weights.light};
      letter-spacing: 2px;
      line-height: 1.3;
      transition: 0.3s ease all;
    }
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
            position: absolute;
            align-self: center;
            width: 100%;
            text-align: center;
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
          <label htmlFor='cf-name' css={labelCss}>
            <span
              css={css`
                top: ${formState.name ? '6px' : '16px'};
                font-size: ${formState.name ? '9px' : '15px'};
              `}
            >
              Name
            </span>
            <Input
              value={formState.name}
              onChange={updateInput}
              type='text'
              name='name'
              id='cf-name'
            />
          </label>

          <label htmlFor='cf-email' css={labelCss}>
            <span
              css={css`
                top: ${formState.email ? '6px' : '16px'};
                font-size: ${formState.email ? '9px' : '15px'};
              `}
            >
              Email
            </span>
            <Input
              value={formState.email}
              onChange={updateInput}
              type='email'
              name='email'
              id='cf-email'
            />
          </label>

          <label htmlFor='cf-website' css={labelCss}>
            <span
              css={css`
                top: ${formState.website ? '6px' : '16px'};
                font-size: ${formState.website ? '9px' : '15px'};
              `}
            >
              Website
            </span>
            <Input
              value={formState.website}
              onChange={updateInput}
              name='website'
              id='cf-website'
            />
          </label>

          <label htmlFor='cf-phone' css={labelCss}>
            <span
              css={css`
                top: ${formState.phone ? '6px' : '16px'};
                font-size: ${formState.phone ? '9px' : '15px'};
              `}
            >
              Phone [optional]
            </span>
            <Input
              value={formState.phone}
              onChange={updateInput}
              type='tel'
              name='phone'
              id='cf-phone'
            />
          </label>
        </span>
        <span
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 3rem;
            ${mediaQueries.phoneLarge} {
              display: inline;
              margin: 0;
            }
          `}
        >
          <label htmlFor='cf-message' css={labelCss}>
            <span
              css={css`
                top: ${formState.phone ? '6px' : '16px'};
                font-size: ${formState.phone ? '9px' : '15px'};
              `}
            >
              Leave a Message
            </span>
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
        <span
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 4rem;
          `}
        >
          <Button data-cy='contactSubmit' type='submit'>
            send
          </Button>
        </span>
        <ErrorToaster errs={errors} />
      </form>
    </main>
  );
};

export default ContactFrom;
