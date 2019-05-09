import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import ContactForm from '../components/ContactForm';
import { mediaQueries } from '../styles';

export default () => {
  return (
    <Layout
      headerData={{
        title: 'Contact Us',
        height: '850px',
        children: <ContactForm />,
      }}
    >
      <main
        css={css`
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: center;
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
            article {
              padding: 3rem 5rem;
              display: flex;
              align-items: center;
              flex-direction: column;
              h3 {
                font-family: 'NB International Pro';
                font-size: 21px;
              }
              h5 {
                font-family: 'NB International Pro';
                font-size: 21px;
                font-weight: 300;
              }
            }
          }
          ${mediaQueries.phoneLarge} {
            flex-direction: column;
          }
        `}
      >
        <section>
          <article>
            <h3>General Inquiries</h3>
            <h5>hello@thirdandgrove.com</h5>
          </article>
          <article>
            <h3>Boston</h3>
            <h5>333 Washington St Suite 326,</h5>
            <h5>Boston, MA 02108</h5>
          </article>
          <article>
            <h3>Press & Media</h3>
            <h5>Arianna Harrison</h5>
            <h5>media@thirdandgrove.com</h5>
          </article>
        </section>
        <section>
          <article>
            <h3>New Business</h3>
            <h5>business@thirdandgrove.com</h5>
          </article>
          <article>
            <h3>Oakland</h3>
            <h5>1528 Webster St</h5>
            <h5>Oakland, CA 94612</h5>
          </article>
          <article>
            <h3>Follow Us</h3>
            <h5>LinkedIn</h5>
            <h5>Instagram</h5>
            <h5>GitHub</h5>
            <h5>Twitter</h5>
          </article>
        </section>
      </main>
    </Layout>
  );
};
