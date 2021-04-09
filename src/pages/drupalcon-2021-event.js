import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import Img from 'gatsby-image';

import FullWidthSection from '../components/FullWidthSection';
import SplitSection from '../components/SplitSection';
import Layout from '../components/layout';
import { container, mediaQueries, weights, colors, fonts } from '../styles';
import Button from '../components/Button';
import { BeUs, WhatWeDo } from '../components/Prefooter';
import InsightsSlider from '../components/InsightsSlider';
import Quote from '../components/ContentBody/Quote';
import ButtonForm from '../components/ButtonForm';

const Drupalcon2021Event = ({ data }) => {
  const [isDate, setDate] = useState(false);
  const [exploreLink, setExploreLink] = useState(
    'https://events.drupal.org/drupalcon2021'
  );
  const [joinLink, setJoinLink] = useState(
    'https://events.drupal.org/drupalcon2021'
  );

  const {
    header,
    booth,
    tag,
    liveQas,
    quote,
    swag,
  } = data.allDrupalconJson.edges[0].node;

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

      case type === 'childImageTypeB':
        src = image.childImageTypeB.fluid;
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

  const layoutStyles = css`
    span {
      font-size: 25px;
    }
  `;

  useEffect(() => {
    setDate(new Date() > new Date('2021-04-12'));
  }, []);

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
        setJoinLink('https://events.drupal.org/drupalcon2021');
        setExploreLink('https://events.drupal.org/drupalcon2021');
      }
    }
    getLinks();
  }, []);

  return (
    <Layout
      css={layoutStyles}
      headerData={{
        metaTitle: 'Talk to Drupal Experts at DrupalCon 2021 | Third and Grove',
        title: header.title,
        description:
          'Drop by our virtual booth for a chat during DrupalCon North America 2021! Feel free to attend our speaker sessions, too!',
        subTitle: header.date,
        linksA: [
          {
            url: '../../../calendar/Drupalcon2021.ics',
            text: '+iCal',
          },
          {
            url: '../../../calendar/Drupalcon2021.ics',
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
        hasHeroLogo: true,
        heroLogo: null,
        heroLogoAlt: null,
      }}
    >
      <SplitSection
        css={css`
          grid-template-columns: ${isDate
            ? `repeat(2, 1fr)`
            : `1fr !important`};

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
              max-width: 800px;
              height: auto;
              width: 100%;
              margin: 0 auto 24px;
            }

            .d-image {
              max-width: 400px;
              height: auto;
              width: 100%;
              margin: 0 auto 48px;
            }

            h3 {
              font-size: 21px;
              font-weight: ${weights.bold};
              margin-bottom: 24px;
              font-family: ${fonts.sans};
              line-height: 1.2;

              ${mediaQueries.phoneLarge} {
                font-size: 23px;
              }
            }

            h4 {
              font-size: 20px;
              font-family: ${fonts.sans};
              margin-bottom: 16px;
              text-align: center;
            }

            p {
              max-width: 700px;
              width: 100%;
              text-align: center;
              margin-bottom: 0;
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
        {isDate && (
          <div>
            <img
              alt='DrupalCon'
              src={getSrc('drupalcon', 'svg')}
              className='d-image'
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
                <div
                  className='button--container'
                  style={{ marginBottom: '0' }}
                  key={url}
                >
                  <Button
                    css={css`
                      display: none;

                      ${mediaQueries.phoneLarge} {
                        display: inline-block;
                      }
                    `}
                  >
                    <a href={exploreLink} target='_blank' rel='noreferrer'>
                      {text}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div>
          <Img
            alt='Third and Grove Web Camera Cover'
            fluid={getSrc('TAG-Webcam-Cover-NEW', 'childImageTypeB')}
            className='cc-image'
          />
          <h3
            css={css`
              text-align: center;
            `}
          >
            {swag.header}
          </h3>
          <p>{swag.body}</p>
          <div>
            {swag.ctas.map(({ text, url }) => (
              <div className='button--container' key={url}>
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
            width: 700px;
            max-width: 100%;
            margin: 0 auto;

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
          <div style={{ width: '150px', margin: '0 auto 2rem' }}>
            <Img
              alt='DrupalCon Silver Sponsor'
              fluid={getSrc('Silver_sponsor_0', 'childImageTypeA')}
              objectFit='contain'
              imgStyle={{
                objectFit: 'contain',
                backgroundColor: 'transparent',
              }}
              className='image'
            />
          </div>
          <h3>{tag.header}</h3>
          <p>
            DrupalCon North America event organizers are working hard to bring
            you a virtual version of the DrupalCon experience you know and love.
            The event will take place April 12th-16th, 2021 Online, and
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
            We know Drupal like the back of our hand. DrupalCon North America
            will have everything from keynotes, sessions, industry and topical
            summits, discussion groups, networking opportunities, and much more.
            Be sure to drop by the Third and Grove booth and get to know us a
            little better.
          </p>
          {tag.ctas.map(({ text, url }) => (
            <div className='button--container' key={url}>
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
              margin: 20px auto;
              display: flex;
              align-items: baseline;

              b {
                white-space: pre;
              }

              strong {
                font-size: 22px;

                span {
                  font-size: 14px;
                }
              }
            }

            .qa--container {
              width: 100%;
              max-width: 550px;
              margin: 0 auto;
            }

            hr {
              margin: 5px auto;
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
          <div className='qa--container'>
            {liveQas.qas.map(({ date, title, time }) => (
              <p key={title}>
                <b>{date}</b>
                <span>&nbsp;-&nbsp;</span>
                <strong>
                  {title}
                  <br />
                  <hr />
                  <span>{time}</span>
                </strong>
              </p>
            ))}
          </div>
        </div>
      </FullWidthSection>

      <InsightsSlider data={data.allInsight} />

      <SplitSection>
        <WhatWeDo
          text='See What We Do.'
          link='/work/'
          linkText='explore work'
        />
        <BeUs />
      </SplitSection>
    </Layout>
  );
};

Drupalcon2021Event.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Drupalcon2021Event;

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
        childImageTypeB: childImageSharp {
          fluid {
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
    allDrupalconJson {
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
            subheader
            body
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
              time
            }
          }
        }
      }
    }
  }
`;
