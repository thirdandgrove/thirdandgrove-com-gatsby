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
    insights,
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
            padding: 50px 20px 0;
            position: relative;
            ${mediaQueries.phoneLarge} {
              padding: 100px 0 0 0;
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
          <Img
            alt='Third and Grove Card Caddy'
            fluid={getSrc('cc-transparent')}
            className='cc-image'
          />
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
      <FullWidthSection
        height='500px'
        css={css`
          ${container.textOnly}
          padding: 50px 20px;
          position: relative;
          ${mediaQueries.phoneLarge} {
            padding: 50px 0 120px 0;
          }

          p {
            text-align: left;
            margin: 20px 0;
          }
        `}
      >
        <h3>{tag.header}</h3>
        <p dangerouslySetInnerHTML={{ __html: tag.body }} />
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

      <InsightsSlider data={data.allInsight} />

      <Quote
        size='small'
        data={{
          field_quote:
            'It’s a rare opportunity that an agency like TAG can fit in so well with our in-house team. The support, partnership, and commitment to creating a custom solution for our multi-lingual sites made all the difference in our successful launch.',
          field_footer_text:
            'Steve Reichgut,  Former Director of Web Engineering & Web Operations at Benefit Cosmetics',
        }}
      />

      <FullWidthSection
        backgroundColor={colors.drupal9Blue}
        padding='110px 0'
        minHeight='100%'
      >
        <ButtonForm
          text='another modal form'
          header='other form for another reason !'
          confirmMessage='T.'
          css={css`
            display: none;

            ${mediaQueries.phoneLarge} {
              display: inline-block;
            }
          `}
        />
      </FullWidthSection>

      <SplitSection>
        <WhatWeDo
          text='See What We Do.'
          link='/work/'
          linkText='explore work'
        />
        <GetInTouch />
      </SplitSection>

      <FullWidthSection
        backgroundColor={colors.lightblue}
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
    allFile(
      filter: { absolutePath: { regex: "/acquia-engage/|/headshots/" } }
    ) {
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
        }
      }
    }
  }
`;
