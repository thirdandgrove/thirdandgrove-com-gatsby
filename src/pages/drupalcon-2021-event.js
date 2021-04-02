import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import Img from 'gatsby-image';

import ContactForm from '../components/ContactForm';
import FullWidthSection from '../components/FullWidthSection';
import SplitSection from '../components/SplitSection';
import Layout from '../components/layout';
import { container, mediaQueries, weights, colors, fonts } from '../styles';
import Button from '../components/Button';
import { GetInTouch, WhatWeDo } from '../components/Prefooter';
import InsightsSlider from '../components/InsightsSlider';
import Quote from '../components/ContentBody/Quote';
import ButtonForm from '../components/ButtonForm';

const Drupalicon = ({ data }) => {
  const [exploreLink, setExploreLink] = useState(
    'https://acquiaengage2020.eventfinity.co/libraries/105548'
  );
  const [joinLink, setJoinLink] = useState(
    'https://acquiaengage2020.eventfinity.co/libraries/105548'
  );

  const {
    header,
    booth,
    tag,
    speakers,
    liveQas,
    quote,
  } = data.allDrupaliconJson.edges[0].node;

  const images = data.allFile.nodes;

  const getSrc = name => {
    return images.find(img => img.name === name).childImageSharp.fluid;
  };

  const getImageSrc = imgName =>
    images.filter(({ name }) => name === imgName)[0].publicURL;

  useEffect(() => {
    async function getLinks() {
      const URL =
        'https://spreadsheets.google.com/feeds/cells/18dA1bKdXZo3ecZFyjLhtY1CXFwZDsCpwxpnZQqB8Y8s/1/public/full?alt=json';

      try {
        const response = await fetch(URL);
        const json = await response.json();
        json.feed.entry.forEach(item => {
          if (item.title.$t.indexOf('B1') !== -1) {
            setExploreLink(item.content.$t);
          }
          if (item.title.$t.indexOf('B2') !== -1) {
            setJoinLink(item.content.$t);
          }
        });
      } catch (error) {
        setJoinLink('https://acquiaengage2020.eventfinity.co/libraries/105548');
        setExploreLink(
          'https://acquiaengage2020.eventfinity.co/libraries/105548'
        );
      }
    }
    getLinks();
  }, []);

  const layoutStyles = css`
    span {
      font-size: 25px;
      font-weight: ${weights.black};
    }
  `;

  const logogridStyles = css`
    h2 {
      font-size: 27px;
      font-weight: ${weights.bold};

      ${mediaQueries.phoneLarge} {
        font-size: 32px;
      }
    }

    h3 {
      font-family: ${fonts.sans};
      font-weight: ${weights.thin};
      line-height: 1;
      font-size: 16px;
    }

    div {
      max-width: 850px;
    }

    .logo-grid-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 75px;

      ${mediaQueries.phoneLarge} {
        margin-top: 0;
        justify-content: space-between;
        flex-direction: row;
      }
    }

    .logo-grid-item {
      ${mediaQueries.phoneLarge} {
        flex: 0 0 25%;
        width: 25%;
        max-width: 25%;
        margin-bottom: 50px;
      }
    }

    .logo-grid-item img {
      width: 100%;
    }
  `;

  const splitWithButtonsCss = css`
    > div {
      padding-top: 20px;

      ${mediaQueries.phoneLarge} {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-left: 40px;
        padding-right: 40px;
      }
    }

    > div > div {
      margin-bottom: 64px;

      ${mediaQueries.phoneLarge} {
        margin-bottom: 90px;
        flex: 0 0 calc(50% - 86px);
        padding-top: 20px;

        &:nth-child(odd):last-child {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    h3 {
      font-size: 21px;
      font-weight: ${weights.bold};
      margin-bottom: 6px;
      padding-top: 40px;
      font-family: ${fonts.sans};
      line-height: 1.2;

      ${mediaQueries.phoneLarge} {
        font-size: 23px;
      }
    }

    p {
      font-weight: ${weights.thin};
      margin-bottom: 0;
    }

    .gatsby-image-wrapper > div {
      ${mediaQueries.phoneLarge} {
        padding-bottom: 100% !important;
      }
    }

    .button--container {
      display: flex;
      justify-content: center;
      align-items: center;
      ${mediaQueries.phoneLarge} {
        display: block;
      }
      button {
        margin: 0 auto;
        display: block;
      }
    }
  `;

  const splitWithImageCss = css`
    padding-top: 0;

    ${mediaQueries.phoneLarge} {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-left: 40px;
      padding-right: 40px;
    }

    > div {
      margin-bottom: 64px;

      ${mediaQueries.phoneLarge} {
        flex: 0 0 calc(50% - 86px);
        padding-top: 20px;

        &:nth-child(odd):last-child {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    h4 {
      font-size: 21px;
      font-weight: ${weights.bold};
      margin-bottom: 6px;
      padding-top: 40px;

      ${mediaQueries.phoneLarge} {
        font-size: 27px;
      }
    }

    p {
      font-weight: ${weights.thin};
      margin-bottom: 0;
    }

    .gatsby-image-wrapper > div {
      ${mediaQueries.phoneLarge} {
        padding-bottom: 100% !important;
      }
    }
  `;

  return (
    <Layout
      css={layoutStyles}
      headerData={{
        metaTitle: header.title,
        title: header.title,
        subTitle: header.date,
        linksA: [
          {
            url: '../Visit TAG at Acquia Engage 2020.ics',
            text: '+iCal',
          },
          {
            url: '../Visit TAG at Acquia Engage 2020.ics',
            text: '+Google Calendar',
          },
        ],
        mobileMinHeight: '93vh',
        hideNav: true,
        color: colors.drupal9Blue,
        invert: true,
        banner: true,
        styles: layoutStyles,
        navLink: joinLink,
      }}
    >
      <FullWidthSection
        height='200px'
        backgroundColor={colors.white}
        css={css`
          > div {
            ${container.textOnly}
            padding: 10px 20px 0;
            position: relative;
            ${mediaQueries.phoneLarge} {
            }
            .cc-image {
              max-width: 300px;
              width: 100%;
              margin: 0 auto;
            }
          }
        `}
      >
        <div css={[splitWithButtonsCss, container.medium]}>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            `}
          >
            <Img
              alt='Third and Grove Web Camera Cover'
              fluid={getSrc('TAG-webcamCover-01')}
              className='cc-image'
            />
            <small>Drupalcon 2021</small>
          </div>
          <h3>{booth.header}</h3>
          <div>
            {booth.ctas.map(({ text, url }) => (
              <div className='button--container'>
                {text.toLowerCase() === 'grab that swag' ? (
                  <ButtonForm
                    text={text}
                    header='Enter your email for your free card caddy.'
                    confirmMessage='Thanks! We’ll be in touch.'
                    subheader=''
                    formName='drupalcon-swag-form'
                    css={css`
                      display: none;

                      ${mediaQueries.phoneLarge} {
                        display: inline-block;
                      }
                    `}
                  />
                ) : (
                  <Button
                    css={css`
                      display: none;

                      ${mediaQueries.phoneLarge} {
                        display: inline-block;
                      }
                    `}
                  >
                    <a href={url} target='_blank' rel='noreferrer'>
                      {text}
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </FullWidthSection>

      <FullWidthSection height='500px' backgroundColor={colors.yellow}>
        <div
          css={css`
            ${container.textOnly}
            padding: 50px 20px;
            position: relative;
            text-align: center;

            ${mediaQueries.phoneLarge} {
              padding: 120px 0;
            }

            a {
              text-decoration: underline;
            }

            p {
              text-align: center;
              margin: 20px 0;
            }
          `}
        >
          <h3>{tag.header}</h3>
          <p>
            DrupalCon Global event organizers are working hard to bring you a
            virtual version of the DrupalCon experience you know and love. The
            event will take place April 12th-16th, 2021 Online, and{' '}
            <a href='https://drupal.regfox.com/drupalcon-north-america-2021'>
              you can register for the event now
            </a>
            .
          </p>
          <p>
            Third and Grove is excited to share thought leadership around all
            things open- source. We will walk you through how we craft digital
            experiences and discover opportunities to enhance B2B lead
            generation strategies, and how to be ready for Drupal 10.
          </p>
          <p>
            We know Drupal like the back of our hand. DrupalCon Global will have
            everything from keynotes, sessions, industry and topical summits,
            discussion groups, networking opportunities, and much more. Be sure
            to drop by the Third and Grove booth and get to know us a little
            better.
          </p>
          {tag.ctas.map(({ text, url }) => (
            <div className='button--container'>
              <Button
                css={css`
                  display: none;

                  ${mediaQueries.phoneLarge} {
                    display: inline-block;
                  }
                `}
              >
                <a href={url} target='_blank' rel='noreferrer'>
                  {text}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </FullWidthSection>

      <FullWidthSection
        backgroundColor={colors.white}
        height='100%'
        css={css`
          padding: 40px 0 20px;

          ${mediaQueries.desktop} {
            padding: 45px 0 20px;
          }

          h3 {
            font-size: 27px;
            font-weight: ${weights.bold};

            ${mediaQueries.phoneLarge} {
              font-size: 32px;
            }
          }
        `}
      >
        <h3>{speakers.header}</h3>

        <div css={[splitWithImageCss, container.medium]}>
          {speakers.people.map(({ img, name, email, title }) => (
            <div key={name}>
              <Img alt={name} fluid={getSrc(img, 'leader')} />
              <h4>{name}</h4>
              <p>
                <a href={`mailto:${email}`}>Say Hi</a>
              </p>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </FullWidthSection>

      <Quote
        center
        size='small'
        padding='100px 0 0 0'
        backgroundColor={colors.drupal9Blue}
        quoteColor={colors.yellow}
        color={colors.white}
        data={{
          field_quote: quote.text,
          field_footer_text: quote.author,
        }}
      />

      <FullWidthSection height='500px' backgroundColor={colors.yellow}>
        <div
          css={css`
            ${container.textOnly}
            padding: 100px 20px;
            position: relative;

            ${mediaQueries.phoneLarge} {
              padding: 120px 0;
            }

            a {
              text-decoration: underline;
            }

            p {
              font-size: 18px;
              margin: 20px 0;
            }

            h3 {
              font-size: 27px;
              font-weight: ${weights.bold};
              text-align: center;

              ${mediaQueries.phoneLarge} {
                font-size: 32px;
              }
            }
          `}
        >
          <h3>{liveQas.header}</h3>
          <div className='button--container'>
            <ul>
              {liveQas.qas.map(({ date, title }) => (
                <li>
                  <p>
                    <b>{date}</b>
                    <span>&nbsp;-&nbsp;</span>
                    <b>{title}</b>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FullWidthSection>

      <InsightsSlider data={data.allInsight} />

      {/* <FullWidthSection
        backgroundColor={colors.drupal9Blue}
        padding='110px 0'
        minHeight='100%'
      >
        <ButtonForm
          text='another modal form'
          header='other form for another reason !'
          confirmMessage='T.'
          formName='other-form'
          css={css`
            display: none;

            ${mediaQueries.phoneLarge} {
              display: inline-block;
            }
          `}
        />
      </FullWidthSection> */}

      <SplitSection>
        <WhatWeDo
          text='See What We Do.'
          link='/work/'
          linkText='explore work'
        />
        <GetInTouch />
      </SplitSection>

      <FullWidthSection
        backgroundColor={colors.white}
        padding='110px 0'
        minHeight='100%'
      >
        <h3
          id='contact'
          css={css`
            font-size: 36px;
            margin-bottom: 20px;
            text-align: center;
            ${mediaQueries.phoneLarge} {
              font-size: 48px;
              margin: 0 0 1.45rem;
            }
          `}
        >
          Drupalicon
          <br />
          2021
        </h3>
        <p
          css={css`
            font-size: 16px;
            line-height: 27px;
            font-weight: lighter;
            text-align: center;
          `}
        >
          Ready to get started?
        </p>
        <ContactForm formName='druplicon' />
      </FullWidthSection>
    </Layout>
  );
};

Drupalicon.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Drupalicon;

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/drupalcon/|/headshots/" } }) {
      nodes {
        name
        publicURL
        childImageSharp {
          fluid(cropFocus: NORTH, maxHeight: 335, maxWidth: 335) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    allInsight(
      sort: { fields: created, order: DESC }
      limit: 4
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        ...InsightFragment
      }
    }
    allDrupaliconJson {
      edges {
        node {
          header {
            date
            subtitle
            title
            links {
              text
              url
            }
          }
          booth {
            ctas {
              text
              url
            }
            header
          }
          tag {
            body
            ctas {
              text
              url
            }
            header
          }
          speakers {
            header
            people {
              email
              img
              name
              title
            }
          }
          insights {
            header
          }
          quote {
            author
            text
          }
          liveQas {
            header
            qas {
              date
              title
            }
          }
        }
      }
    }
  }
`;
