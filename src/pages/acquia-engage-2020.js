import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Img from 'gatsby-image';

import { NewsletterSimpleOverlay } from '../components/NewsletterForm';
import LogoGrid from '../components/LogoGrid';
import FullWidthSection from '../components/FullWidthSection';
import SplitSection from '../components/SplitSection';
import Layout from '../components/layout';
import {
  container,
  mediaQueries,
  weights,
  colors,
  jsBreakpoints,
  fonts,
} from '../styles';
import CTA from '../components/CTA';
import Button from '../components/Button';
import { GetInTouch, SeeInsights } from '../components/Prefooter';

const AcquiaEngage = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const { node } = data.allAcquiaEngageJson.edges[0];

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
        font-size: 25px;
      }
    }

    p {
      font-weight: ${weights.thin};
      margin-bottom: 0;
    }

    .gatsby-image-wrapper > div {
      // Forcing correct image aspect ratio, overriding inline
      // gatsby-image provided styles
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
      // Forcing correct image aspect ratio, overriding inline
      // gatsby-image provided styles
      ${mediaQueries.phoneLarge} {
        padding-bottom: 100% !important;
      }
    }
  `;

  const linkStyles = css`
    display: flex;
    margin-top: 12px;
    a {
      font-family: ${fonts.sans};
      font-size: 15px;
      font-weight: ${weights.light};
      line-height: 2.4;
      padding: 0 10px;
      position: relative;
    }
  `;

  const images = data.allFile.nodes;

  const getSrc = (name, media) => {
    if (media === 'leader') {
      return [
        images.find(img => img.name === name).mobileImage.fluid,
        {
          ...images.find(img => img.name === name).leaderDesktop.fluid,
          media: `(min-width: ${jsBreakpoints.phoneLarge}px)`,
        },
      ];
    }
    if (media === 'location') {
      return [
        images.find(img => img.name === name).mobileImage.fluid,
        {
          ...images.find(img => img.name === name).desktopImage.fluid,
          media: `(min-width: ${jsBreakpoints.phoneLarge}px)`,
        },
      ];
    }
    return images.find(img => img.name === name).childImageSharp.fluid;
  };

  const getImageSrc = name =>
    data.allFile.edges.filter(({ node }) => name === node.name)[0].node
      .publicURL;

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const onKeypress = e => {
    if (e.keyCode === 13) {
      setIsActive(!isActive);
    }
  };

  return (
    <Layout
      css={layoutStyles}
      headerData={{
        metaTitle: node.header[0].title,
        title: node.header[0].title,
        subTitle: node.header[0].date,
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
        color: colors.yellow,
        invert: false,
        banner: true,
        styles: layoutStyles,
        images: data.allFile.edges,
      }}
    >
      <FullWidthSection
        height='200px'
        backgroundColor={colors.white}
        css={css`
          > div {
            padding: 50px 20px 0;
            position: relative;
            ${container.textOnly}

            ${mediaQueries.phoneLarge} {
              padding: 100px 0 0 0;
            }
          }
        `}
      >
        <div css={[splitWithButtonsCss, container.medium]}>
          <h3>{node.header[0].subtitle}</h3>

          <div>
            <div className='button--container'>
              <Button
                css={css`
                  display: none;

                  ${mediaQueries.phoneLarge} {
                    display: inline-block;
                  }
                `}
              >
                Explore Event
              </Button>
            </div>
            <div className='button--container'>
              <Button
                onClick={handleClick}
                onKeyDown={onKeypress}
                css={css`
                  display: none;

                  ${mediaQueries.phoneLarge} {
                    display: inline-block;
                  }
                `}
              >
                Grab That Swag
              </Button>
            </div>
          </div>
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
        <h3>{node.who[0].header}</h3>

        <div css={[splitWithImageCss, container.medium]}>
          <div>
            <Img
              alt={node.who[0].justin.name}
              fluid={getSrc('emond', 'leader')}
            />
            <h4>{node.who[0].justin.name}</h4>
            <p>
              <a href={`mailto:${node.who[0].justin.email}`}>Say Hi</a>
            </p>
            <p>{node.who[0].justin.title}</p>
          </div>
          <div>
            <Img
              alt={node.who[0].ashley.name}
              fluid={getSrc('ashley', 'leader')}
            />
            <h4>{node.who[0].ashley.name}</h4>
            <p>
              <a href={`mailto:${node.who[0].ashley.email}`}>Say Hi</a>
            </p>
            <p>{node.who[0].ashley.title}</p>
          </div>
        </div>
      </FullWidthSection>
      <LogoGrid
        title={node.drumroll[0].header}
        logoset='acquiaEngage'
        subtitle={node.drumroll[0].subhead}
        styles={logogridStyles}
      />
      <FullWidthSection
        align='flex-start'
        height='500px'
        css={css`
          padding: 50px 20px;
          position: relative;
          ${container.textOnly}

          ${mediaQueries.phoneLarge} {
            padding: 50px 0 50px 0;
          }

          p {
            text-align: left;
            margin-bottom: 0;
          }
        `}
      >
        <h3>{node.talk[0].header}</h3>

        <p>
          {`We’ve crafted the most compelling, engaging content to throw at you.
          That’s why our breakout sessions are a must-see. Don’t believe us? I
          guess you’ll have to see for yourself.`}{' '}
        </p>
        <br />
        <p>
          Using Drupal 8 and Acquia to boost B2B lead generation and marketing
          velocity
        </p>

        <p>
          Learn how VMware’s CloudHealth, a powerful cloud management platform
          trusted by organizations around the world, used an upgrade to Drupal
          8, a redesign, and the Acquia platform to boost B2B lead generation
          and improve the velocity of their marketing and development efforts.
          You will also learn tips and tricks on how to combine your team
          members with an agency team to form an excellent single delivery team.
        </p>
      </FullWidthSection>
      <FullWidthSection
        align='flex-start'
        height='500px'
        css={css`
          padding: 50px 20px;
          position: relative;
          ${container.textOnly}

          ${mediaQueries.phoneLarge} {
            padding: 50px 0 120px 0;
          }

          p {
            text-align: left;
            margin-bottom: 0;
          }
        `}
      >
        <h3>Our Friends</h3>

        <p>
          {`After you visit with us, we have some other suggestions for you. Here’s a breakdown of what to do and who to meet.`}{' '}
        </p>
        <br />
        <p>
          <b>Why Predictive Marketing? Why Now?</b>
        </p>
        <p>Tuesday, October 20th</p>
        <p>1:35PM - 1:55PM</p>
        <p>
          {`Most marketers strive to be data-driven. But many find themselves
          stuck in old ruts. Running batch-and-blast email campaigns, letting
          creative ideas trample data, and allowing broad segmentation and
          targeting to stand in for real personalization. In this session,
          you’ll hear from Omer Artun, Acquia’s Chief Science Officer and former
          CEO of AgilOne. He’ll share Acquia’s vision for Artificial
          Intelligence, along with practical tips for leveraging predictive
          analytics to boost customer acquisition and growth, and identify and
          lure in lapsed or at-risk customers. Omer will go beyond theory, and
          focus on concrete steps you can take now to help navigate these
          unprecedented times.`}
        </p>
        <br />
        <p>
          <b>Our Vision for Drupal Cloud: What’s Next?</b>
        </p>
        <p>Wednesday, October 21st</p>
        <p>12:10PM - 12:30PM</p>
        <p>
          Want a peek into the future? Spend twenty minutes with the Head of
          Product (Drupal Cloud) to learn about the long-term vision, key
          priorities, and plans to help customers conquer.
        </p>
        <br />
        <p>
          <b>The Future of Customer Experience with Acquia Marketing Clou</b>d
        </p>
        <p>Wednesday, October 21st</p>
        <p>12:10PM - 12:30PM</p>
        <p>
          To meet shifting customer expectations in an uncertain environment,
          organizations must be able to respond to changes quickly and scale new
          tactics efficiently. But delivering a seamless experience with
          relevant and timely touchpoints at every step of the customer journey
          is no small task. Acquia Marketing Cloud is constantly adapting and
          innovating to help marketers keep up with customers, and orchestrate
          and analyze their experiences at scale. In this session, we’ll look
          into the future of Acquia Marketing Cloud and learn what’s next.
        </p>
      </FullWidthSection>
      <FullWidthSection height='100%'>
        {node.header[0].links && (
          <div css={linkStyles}>
            {node.header[0].links.map(l => (
              <a href={l.url}>
                <img src={getImageSrc(l.text.toLowerCase())} alt={l.text} />
              </a>
            ))}
          </div>
        )}
      </FullWidthSection>
      <SplitSection>
        <SeeInsights />
        <GetInTouch />
      </SplitSection>
      {isActive && (
        <NewsletterSimpleOverlay
          setIsActive={setIsActive}
          isActive={isActive}
          header='Enter your email for your free card caddy.'
          confirmMessage='Thanks! We’ll be in touch.'
          subheader=''
          formName='acquia-engage'
        />
      )}
    </Layout>
  );
};

export default AcquiaEngage;

export const query = graphql`
  {
    allFile(
      filter: { absolutePath: { regex: "/acquia-engage/|/headshots/" } }
    ) {
      edges {
        node {
          name
          publicURL
          absolutePath
        }
      }
      nodes {
        name
        childImageSharp {
          fluid(cropFocus: NORTH, maxHeight: 335, maxWidth: 335) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        mobileImage: childImageSharp {
          fluid(cropFocus: NORTH, maxHeight: 335, maxWidth: 335) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        desktopImage: childImageSharp {
          fluid(cropFocus: NORTH, maxHeight: 335, maxWidth: 335) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        leaderDesktop: childImageSharp {
          fluid(cropFocus: NORTH, maxHeight: 335, maxWidth: 335) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    allAcquiaEngageJson {
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
          talk {
            header
            subhead
          }
          who {
            ashley {
              email
              img
              name
              title
            }
            header
            justin {
              email
              img
              name
              title
            }
          }
          drumroll {
            header
            sites {
              category
              name
            }
            subhead
          }
          cta {
            one {
              before
              during
              url
            }
            two {
              text
              url
            }
          }
        }
      }
    }
  }
`;
