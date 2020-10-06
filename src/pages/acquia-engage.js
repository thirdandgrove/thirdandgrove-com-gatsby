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
  pLight,
} from '../styles';
import CTA from '../components/CTA';
import Button from '../components/Button';

const AcquiaEngage = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const { node } = data.allAcquiaEngageJson.edges[0];

  console.log(data);

  const layoutStyles = css`
    span {
      font-size: 25px;
      font-weight: ${weights.black};
    }
  `;

  const logogridStyles = css`
    h3 {
      font-size: 20px;
      font-weight: ${weights.regular};
    }
  `;

  const leadersCss = css`
    padding-top: 20px;

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
        margin-bottom: 90px;
        flex: 0 0 calc(50% - 86px);
        padding-top: 20px;

        &:nth-child(odd):last-child {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    h2 {
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
        padding-bottom: 68% !important;
      }
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

  const handleClick = e => {
    setIsActive(!isActive);
    console.log(isActive);
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
        links: node.header[0].links,
        mobileMinHeight: '93vh',
        hideNav: true,
        color: colors.yellow,
        invert: false,
        banner: true,
        styles: layoutStyles,
      }}
    >
      <FullWidthSection
        height='500px'
        backgroundColor={colors.white}
        css={css`
          > div {
            padding: 50px 20px;
            position: relative;
            ${container.textOnly}

            ${mediaQueries.phoneLarge} {
              padding: 100px 0 100px 0;
            }
          }
        `}
      >
        <div>
          <h3>{node.header[0].subtitle}</h3>

          <div css={[leadersCss, container.medium]}>
            <div>
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
                Explore Event
              </Button>
            </div>
            <div>
              <Button
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
        backgroundColor={colors.drupal9Blue}
        css={css`
          padding: 44px 0 0;

          ${mediaQueries.desktop} {
            padding: 120px 0;
          }
        `}
      >
        <h3>{node.who[0].header}</h3>

        <div css={[leadersCss, container.medium]}>
          <div>
            <Img
              alt={node.who[0].justin.name}
              fluid={getSrc('emond', 'leader')}
            />
            <h2>{node.who[0].justin.name}</h2>
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
            <h2>{node.who[0].ashley.name}</h2>
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
          Title: Using Drupal 8 and Acquia to boost B2B lead generation and
          marketing velocity
        </p>

        <p>Presenters: Michael LaLiberté, VMware and Justin Emond, TAG</p>
        <p>Scheduled Time: TBD </p>
      </FullWidthSection>
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
        <h3>Our Friends</h3>

        <p>
          {`Aside from visiting us, we have some suggestions for you. Here’s a breakdown of what to do and who to meet.`}{' '}
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
      {isActive && (
        <NewsletterSimpleOverlay
          setIsActive={setIsActive}
          isActive={isActive}
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
          fluid(maxWidth: 980, maxHeight: 480) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        mobileImage: childImageSharp {
          fluid(cropFocus: NORTH, maxHeight: 335, maxWidth: 335) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        desktopImage: childImageSharp {
          fluid(maxWidth: 530, srcSetBreakpoints: [480, 900, 1200]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        leaderDesktop: childImageSharp {
          fluid {
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
