import React, { useState, useEffect } from 'react';
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
    swag,
  } = data.allDrupaliconJson.edges[0].node;

  const images = data.allFile.nodes;

  const getSrc = (name, type) => {
    const image = images.find(img => img.name === name);
    let src = '';
    switch (true) {
      case type === 'leader':
        src = image.childImageSharp.fluid;
        break;

      case type === 'childImageTypeA':
        src = image.childImageTypeA.fluid;
        break;

      case type === 'svg':
        src = image.publicURL;
        break;

      default:
        src = image.childImageSharp.fluid;
        break;
    }
    return src;
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
      margin-bottom: 64px;

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
            url: '../../Visit TAG at Acquia Engage 2020.ics',
            text: '+iCal',
          },
          {
            url: '../../Visit TAG at Acquia Engage 2020.ics',
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
      <SplitSection
        css={css`
          > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px 25px 20px;

            ${mediaQueries.phoneLarge} {
              padding: 50px 50px 100px;
            }

            .cc-image {
              max-width: 200px;
              height: 200px;
              width: 100%;
              margin: 0 auto;
            }

            h3 {
              font-size: 21px;
              font-weight: ${weights.bold};
              margin-bottom: 6px;
              font-family: ${fonts.sans};
              line-height: 1.2;

              ${mediaQueries.phoneLarge} {
                font-size: 23px;
              }
            }

            .button--container {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 25px 0;

              ${mediaQueries.phoneLarge} {
                display: block;
              }

              button {
                margin: 0 auto;
                display: block;
              }
            }
          }
          > div:last-of-type {
            padding-bottom: 50px;

            ${mediaQueries.phoneLarge} {
              padding-bottom: 100px;
              padding-top: 73px;
            }
          }
        `}
      >
        {' '}
        <div>
          <img
            alt='DrupalCon'
            src={getSrc('drupalcon', 'svg')}
            className='cc-image'
          />
          <h3
            css={css`
              text-align: center;
            `}
          >
            {booth.header}
          </h3>
          <div>
            {booth.ctas.map(({ text, url }) => (
              <div className='button--container' style={{ marginBottom: '0' }}>
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
        </div>
        <div>
          <Img
            alt='Third and Grove Web Camera Cover'
            fluid={getSrc('TAG-webcamCover-01', 'childImageTypeA')}
            className='cc-image'
          />
          <h3
            css={css`
              text-align: center;
            `}
          >
            {swag.header}
          </h3>
          <div>
            {swag.ctas.map(({ text, url }) => (
              <div className='button--container'>
                <ButtonForm
                  text={text}
                  header='Enter your details for your free webcam cover.'
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
              </div>
            ))}
          </div>
        </div>
      </SplitSection>

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

      <Quote
        center
        size='small'
        padding='100px 0 100px 0'
        backgroundColor={colors.white}
        quoteColor={colors.yellow}
        color={colors.darkgray}
        innerMargin='0'
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

            .cc-image {
              max-width: 200px;
              height: 200px;
              width: 100%;
              margin: 40px auto 0;
            }

            a {
              text-decoration: underline;
            }

            p {
              font-size: 18px;
              margin: 20px 0;
              display: flex;

              b {
                white-space: pre;
              }
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
                    <strong>{title}</strong>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <Img
            alt='DrupalCon Silver Sponsor'
            fluid={getSrc('silver-sponsor', 'childImageTypeA')}
            objectFit='contain'
            imgStyle={{
              objectFit: 'contain',
            }}
            className='cc-image'
          />
        </div>
      </FullWidthSection>

      <InsightsSlider data={data.allInsight} />

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
          Drupalcon
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
        <ContactForm formName='drupalcon' />
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
        childImageTypeA: childImageSharp {
          fluid(maxWidth: 335) {
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
          swag {
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
