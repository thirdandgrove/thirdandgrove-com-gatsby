import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import ContactForm from '../components/ContactForm';
import { mediaQueries, fonts, weights, container } from '../styles';

export default () => {
  const wrapperCss = css`
    padding-top: 80px;
    padding-bottom: 80px;
    text-align: center;
    font-family: ${fonts.sans};
    font-weight: ${weights.light};
    font-size: 16px;
    line-height: 1.7;

    ${mediaQueries.phoneLarge} {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-top: 100px;
      padding-bottom: 100px;
    }
  `;

  const headingCss = css`
    margin-bottom: 0;
    font-family: ${fonts.sans};
    font-weight: ${weights.bold};
    font-size: 21px;

    ${mediaQueries.phoneLarge} {
      font-size: 18px;
      line-height: 2;
    }
  `;

  const contactItem = css`
    min-height: 120px;

    ${mediaQueries.phoneLarge} {
      flex: 0 0 calc(50% - 20px);
      width: calc(50% - 20px);
    }
  `;

  const contactItemWide = css`
    ${mediaQueries.phoneLarge} {
      flex: 0 0 100%;
      width: 100%;
      padding-top: 40px;
    }
  `;

  const socialList = css`
    list-style-type: none;
    margin: 0;

    ${mediaQueries.phoneLarge} {
      display: flex;
      justify-content: center;
      line-height: 1.1;
    }

    li {
      margin-bottom: 0;

      ${mediaQueries.phoneLarge} {
        padding: 0 30px;

        & + li {
          border-left: solid 1px currentColor;
        }
      }
    }
  `;

  return (
    <Layout
      headerData={{
        title: 'Contact us:',
        height: '850px',
        children: <ContactForm />,
      }}
    >
      <main css={[container.textOnly, wrapperCss]}>
        <div css={contactItem}>
          <h3 css={headingCss}>General Inquiries</h3>
          <a href='mailto:hello@thirdandgrove.com'>hello@thirdandgrove.com</a>
        </div>

        <div css={contactItem}>
          <h3 css={headingCss}>New Business</h3>
          <a href='business@thirdandgrove.com'>business@thirdandgrove.com</a>
        </div>

        <div css={contactItem}>
          <h3 css={headingCss}>Boston</h3>
          <a
            href='https://www.google.com/maps/place/1528+Webster+St,+Oakland,+CA+94612/@37.8047419,-122.2696821,17z/data=!3m1!4b1!4m5!3m4!1s0x808f80b364b1815d:0xd742e481761fb458!8m2!3d37.8047419!4d-122.2674934'
            target='_blank'
            rel='noopener noreferrer'
          >
            333 Washington St Suite 326
            <br />
            Boston, MA 02108
          </a>
        </div>

        <div css={contactItem}>
          <h3 css={headingCss}>Oakland</h3>
          <a
            href='https://www.google.com/maps/place/333+Washington+St,+Boston,+MA+02108/@42.3567997,-71.0633117,17z/data=!4m5!3m4!1s0x89e370849b9d3e3b:0xd5c1f9df0911e93!8m2!3d42.3569512!4d-71.059026'
            target='_blank'
            rel='noopener noreferrer'
          >
            1528 Webster St
            <br />
            Oakland, CA 94612
          </a>
        </div>

        <div css={[contactItem, contactItemWide]}>
          <h3 css={headingCss}>Follow Us</h3>
          <ul css={socialList}>
            <li>
              <a
                href='https://www.linkedin.com/company/third-and-grove/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/thirdandgrove/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://github.com/thirdandgrove'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/thirdandgrove'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};
