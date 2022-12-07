import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import { colors, weights, mediaQueries, fonts, jsBreakpoints } from '../styles';
import Button from '../components/Button';
import ColoredBlocks from '../components/ColoredBlocks';
import LogoGridSlider from '../components/LogoGrid/LogoGridSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import ImageGallery from '../components/ImageGallery';
import AppleImage from '../images/about/apple-animation.gif';
import Counter from '../components/Counter';
import AboutSlider from '../components/AboutSlider/AboutSlider';
import { mediaQueriesMax } from '../styles/css-utils';
import { useHasBeenVisible } from '../hooks/useVisibility';
import useWindowSize from '../hooks/useWindowSize';

import logoSets from '../components/LogoGrid/logosets';

const aboutCoreValues = logoSets('corevalues', 'TRUE');

const mergeById = (a1, a2) =>
  a1.map(itm => ({
    ...a2.find(item => item.name === itm.imageName && item),
    ...itm,
  }));

const About = ({ data }) => {
  const {
    allAboutJson,
    partyPhoto,
    remotePhoto,
    grandma,
    grandmaMobile,
    galleryImages,
    testimonialGallery,
  } = data;
  const { stats, header, imageGallery } = allAboutJson.nodes[0];
  const nodeRef = React.useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  const remoteWorkStyleCustom = css`
    ${mediaQueriesMax.phoneLarge} {
      p {
        position: relative;
        font-weight: ${weights.regular};
        font-family: ${fonts.serif};
        font-size: 36px;
        line-height: 1.3;
        right: 0;
        margin: 0 20px;
        ${mediaQueriesMax.xs} {
          font-weight: 350;
          font-size: 2rem;
        }
      }
    }
    ${mediaQueries.phoneLarge} {
      display: none;
    }
  `;

  const remoteWorkStyle = css`
    min-height: 450px;
    position: relative;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 50px;

    ${mediaQueriesMax.phoneLarge} {
      min-height: 350px;
    }

    ${mediaQueriesMax.tablet} {
      min-height: 400px;
    }

    div.gatsby-image-wrapper {
      position: absolute;
      right: 0;
      width: 100%;
      max-height: 330px;

      ${mediaQueries.phoneLarge} {
        top: 120px;
        width: 70%;
        max-height: 900px;
      }
    }

    p {
      position: relative;
      margin-left: 50px;
      margin-top: 25px;
      margin-bottom: 0;
      font-size: 32px;
      line-height: 1.5;
      font-weight: ${weights.regular};
      font-family: ${fonts.serif};
      ${mediaQueriesMax.phoneLarge} {
        display: none;
      }
    }

    h2 {
      color: ${colors.reallydarkgray};
      font-weight: ${weights.bold};
      font-size: xxx-large;
      margin-left: 0;
      position: absolute;
      bottom: -30px;
      ${mediaQueries.phoneMini} {
        bottom: 20px;
      }
      ${mediaQueriesMax.xs} {
        margin-left: 0;
        margin-top: 220px;
      }
      ${mediaQueries.tablet} {
        bottom: 50px;
      }
      ${mediaQueries.phoneLarge} {
        font-size: 120px;
        margin-left: 40px;
        position: relative;
        bottom: 0;
      }
      ${mediaQueries.desktop} {
        font-size: 120px;
        position: relative;
        bottom: 0;
      }
    }

    button {
      position: relative;
      margin-left: 0;
      ${mediaQueries.phoneLarge} {
        margin-left: 40px;
      }
      ${mediaQueriesMax.phoneLarge} {
        margin-top: 450px;
      }
      ${mediaQueriesMax.xs} {
        display: none;
      }
    }
  `;

  const headerStyle = css`
    max-width: 1440px;
    padding-top: 200px;
    h1 {
      text-align: left;
    }
    ${mediaQueriesMax.phoneLarge} {
      .balance-text {
        width: 100%;
      }
      .balance-text > br {
        display: none;
      }
      padding-bottom: 0px;
      min-height: 66vh;
    }
  `;

  const subHeaderStyle = css`
    padding: 20px;
    ${mediaQueries.phoneLarge} {
      max-width: 600px;
      position: relative;
      left: 200px;
      padding-left: 0px;
    }
  `;

  const statsSection = css`
    position: relative;
    padding: 0;
    .gatsby-image-wrapper {
      width: 100%;
    }
    ${mediaQueriesMax.phoneMini} {
      display: none;
    }
    ${mediaQueriesMax.phoneLarge} {
      min-height: 345px;
    }
    ${mediaQueriesMax.xs} {
      min-height: 600px;
    }
  `;

  const statWrapper = css`
    display: flex;
    align-items: center;
    position: absolute;
    color: ${colors.white};
    font-family: ${fonts.serif};
    margin-left: 80px;
    h4 {
      font-size: 130px;
    }
    p {
      max-width: 400px;
      font-size: 36px;
      line-height: 50px;
      text-align: center;
      letter-spacing: 0.4px;
    }
    ${mediaQueriesMax.desktop} {
      align-content: center;
      justify-content: space-around;
      flex-wrap: wrap;
      margin: 0 10%;

      h4 {
        font-size: xxx-large;
        padding: 0;
        margin: 0;
      }
      p {
        line-height: normal;
      }
    }

    ${mediaQueriesMax.phoneLarge} {
      h4 {
        font-size: xx-large;
      }
      p {
        font-size: large;
        line-height: normal;
      }
    }
    ${mediaQueriesMax.xs} {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: space-between;
      justify-content: space-between;
      align-items: center;

      h4 {
        font-size: 60px;
      }
    }
  `;
  const statItem = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;
    p {
      min-height: 150px;
      ${mediaQueriesMax.xs} {
        min-height: fit-content;
      }
    }
    ${mediaQueriesMax.desktop} {
      width: 50%;
      max-height: 110px;
      padding: 0;
    }
    ${mediaQueriesMax.phoneLarge} {
      width: 35%;
      max-height: 110px;
      padding: 0;
    }
    ${mediaQueriesMax.xs} {
      min-height: fit-content;
      max-height: fit-content;
      width: 75%;
    }
  `;

  const gradientStyleImage = css`
    display: contents;
    ${mediaQueriesMax.desktop} {
      display: contents;
    }
  `;

  const gradientStyle = css`
    position: absolute;
    inset: 0 0 0 0;
    background: #747474;
    mix-blend-mode: multiply;
  `;

  const awardSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 20000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    draggable: false,
  };

  const awardStyle = css`
    justify-content: start;
    position: relative;
    padding: 0;

    .gatsby-image-wrapper {
      width: 100%;
    }
    ${mediaQueriesMax.phoneLarge} {
      margin: 20px auto;
    }

    .award-image {
      display: initial;
      ${mediaQueriesMax.phoneLarge} {
        display: none;
      }
    }
    .award-image-mobile {
      display: none;
      ${mediaQueriesMax.phoneLarge} {
        display: initial;
        max-height: 700px;
      }
    }
  `;

  const awardsLogo = css`
    position: absolute;
    top: 0;

    > div {
      flex-wrap: nowrap;
      min-width: 400px;

      > div {
        margin-left: 0;
        margin-right: 0;
      }
    }

    .slick-slider {
      width: 100%;
      margin: auto;

      .slick-slide > div > div {
        margin-bottom: 0;
      }
    }

    img {
      margin: auto;
      padding: 0 25px;
    }
  `;

  const coreValuesStyle = css`
    position: relative;
    padding: 0;
    bottom: 170px;

    .gatsby-image-wrapper {
      width: 100%;
    }

    ${mediaQueriesMax.xs} {
      bottom: 130px;
    }
  `;

  const coreValues = css`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: flex-end;
    padding-top: 130px;

    ${mediaQueriesMax.xs} {
      display: block;
    }
  `;

  const coreValuesTitle = css`
    width: 800px;
    position: relative;
    right: 90px;
    top: 0;

    h3 {
      font-size: 8.5rem;
      font-family: ${fonts.serif};
      line-height: 90px;
      ${mediaQueriesMax.phoneLarge} {
        font-size: 6rem;
      }
      ${mediaQueriesMax.xs} {
        font-size: 6rem;
        font-weight: 500;
        line-height: 0.75;
      }
    }

    ${mediaQueriesMax.xs} {
      right: inherit;
      top: 30px;
      text-align: center;
      padding: auto;
      width: 100%;
    }

    h3:nth-of-type(1) {
      text-align: left;

      ${mediaQueriesMax.xs} {
        text-align: center;
      }
    }
    h3:nth-of-type(2) {
      text-align: right;

      ${mediaQueriesMax.xs} {
        text-align: center;
      }
    }
  `;

  const coreValueMobileContainer = css`
    padding: 40px 0 140px;
  `;

  const coreValueLogoMobile = css`
    display: inline-block;
    padding: 50px 0;

    .corevalue-body {
      width: 75%;
      margin: auto;
      text-align: center;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  `;

  const remoteWorkButton = css`
    display: block;

    ${mediaQueriesMax.tablet} {
      display: none;
    }
  `;

  const styleImageMainSlider = css`
    max-width: 300px;
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mediaQueriesMax.xs} {
      position: relative;
      display: block;
      margin: auto;
    }
  `;

  const { width } = useWindowSize();

  const testimonials = mergeById(imageGallery, galleryImages.nodes);

  return (
    <Layout
      headerData={{
        title: header[0].title,
        mobileMinHeight: '93vh',
        height: '400px',
        color: colors.white,
        styles: headerStyle,
        children: (
          <div css={subHeaderStyle}>
            <p>{header[0].subtitle}</p>
          </div>
        ),
      }}
    >
      {/* Stats Section. */}
      <FullWidthSection css={statsSection}>
        <GatsbyImage
          css={gradientStyleImage}
          image={partyPhoto.childImageSharp.gatsbyImageData}
          alt='Get together party'
        />
        <div css={gradientStyle} />
        <div css={statWrapper} ref={nodeRef}>
          {isVisible && (
            <>
              {stats.map(stat => {
                const numberData = stat.title.replace(/\D/g, '');
                const symbol = stat.title.replace(/\d/g, '');
                return (
                  <div css={statItem}>
                    <Counter mainCount={numberData} symbol={symbol} />
                    <p>{stat.subtitle}</p>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </FullWidthSection>

      {/* Core Values Section. */}
      <div css={coreValues}>
        <img src={AppleImage} alt='Core Values' css={styleImageMainSlider} />
        <div css={coreValuesTitle}>
          <h3>Core</h3>
          <h3>Values</h3>
        </div>
      </div>

      {width < 1100 ? (
        <div css={coreValueMobileContainer}>
          {aboutCoreValues.map((logo, i) => (
            // eslint-disable-next-line
            <div class='full list' key={i} css={coreValueLogoMobile}>
              {logo}
            </div>
          ))}
        </div>
      ) : (
        <FullWidthSection css={coreValuesStyle}>
          <AboutSlider />
        </FullWidthSection>
      )}

      {/* Awards Section. */}
      <h3
        css={css`
          font-family: ${fonts.serif};
          text-align: center;
          font-size: xxx-large;
          ${mediaQueries.desktop} {
            line-height: 130px;
            font-size: 95px;
          }
          ${mediaQueriesMax.xs} {
            width: 75%;
            margin: auto;
          }
        `}
      >
        We are sort of a big deal.
      </h3>
      <FullWidthSection css={awardStyle}>
        <GatsbyImage
          className='award-image'
          image={grandma.childImageSharp.gatsbyImageData}
          alt='Grandma standing with a plate'
        />
        <GatsbyImage
          className='award-image-mobile'
          image={grandmaMobile.childImageSharp.gatsbyImageData}
          alt='Grandma standing with a plate'
        />
        <LogoGridSlider
          minHeight='0'
          styles={awardsLogo}
          logoset='awards'
          backgroundColor='none'
          sliderSettings={awardSliderSettings}
        />
      </FullWidthSection>

      {/* Testimonials Section. */}
      <TestimonialSlider
        data={{ nodes: [...testimonials] }}
        showButton
        backgroundColor={colors.white}
        title='We speak highly of ourselves, but so do our people.'
        arrows
      />

      {/* Remote Organization Section. */}
      <div css={remoteWorkStyleCustom}>
        <p>
          Our CEO is in Boston, <br />
          but we are a fully...
        </p>
      </div>
      <FullWidthSection css={remoteWorkStyle}>
        <GatsbyImage
          image={remotePhoto.childImageSharp.gatsbyImageData}
          alt='Man working remotely at computer with dress shirt and no pants'
        />
        <p>
          Our CEO is in Boston, <br />
          but we are a fully...
        </p>
        <h2>
          Remote
          <br />
          Organization
        </h2>
        <Button css={remoteWorkButton}>Contact Us</Button>
      </FullWidthSection>

      {/* Footer Blocks Section. */}
      <ColoredBlocks
        blocks={[
          {
            headline: 'Are you a brand that defies mediocrity?',
            linkTitle: 'Contact Us',
            path: '/contact',
            backgroundColor: colors.yellow,
          },
          {
            headline: 'Check out some of our beautiful work.',
            linkTitle: 'View Work',
            path: '/work',
            backgroundColor: colors.lightblue,
          },
          {
            headline: "Show us what you're made of.",
            linkTitle: 'Join The Team',
            path: 'https://thirdandgrove.breezy.hr',
            backgroundColor: colors.yellow,
          },
        ]}
      />
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  {
    remotePhoto: file(relativePath: { eq: "about/remote-working.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 627
          width: 935
          transformOptions: { cropFocus: CENTER }
          layout: FULL_WIDTH
        )
      }
    }
    partyPhoto: file(relativePath: { eq: "about/party-image.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1400
          height: 700
          transformOptions: { cropFocus: CENTER }
          layout: CONSTRAINED
        )
      }
    }
    grandma: file(relativePath: { eq: "about/grandma.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1400
          height: 700
          transformOptions: { cropFocus: CENTER }
          layout: CONSTRAINED
        )
      }
    }
    grandmaMobile: file(relativePath: { eq: "about/grandmaMobile.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 700
          height: 1400
          transformOptions: { cropFocus: CENTER }
          layout: CONSTRAINED
        )
      }
    }
    allAboutJson {
      nodes {
        stats {
          title
          subtitle
        }
        header {
          title
          subtitle
        }
        imageGallery {
          title
          imageName
        }
      }
    }
    galleryImages: allFile(
      filter: { relativePath: { regex: "/about/imageGallery/g" } }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            transformOptions: { cropFocus: CENTER }
            layout: CONSTRAINED
          )
          fullWidth: gatsbyImageData(
            transformOptions: { cropFocus: CENTER }
            layout: FULL_WIDTH
          )
          squareImage: gatsbyImageData(
            width: 700
            height: 700
            transformOptions: { cropFocus: CENTER }
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`;
