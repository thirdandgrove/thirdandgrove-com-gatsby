import React from 'react';
import PropTypes from 'prop-types';
import { navigate, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Slider from 'react-slick';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import { colors, weights, mediaQueries, fonts } from '../styles';
import Button from '../components/Button';
import ColoredBlocks from '../components/ColoredBlocks';
import LogoGrid from '../components/LogoGrid';
import LogoGridSlider from '../components/LogoGrid/LogoGridSlider';
import ImageGallery from '../components/ImageGallery';
import AppleImage from '../images/about/apple-animation.gif';

const About = ({ data }) => {
  const {
    allAboutJson,
    partyPhoto,
    remotePhoto,
    grandma,
    galleryImages,
  } = data;
  const { stats, header, imageGallery } = allAboutJson.nodes[0];

  const awardSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const remoteWorkStyle = css`
    min-height: 450px;
    position: relative;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 50px;
    ${mediaQueries.phoneLarge} {
      min-height: 700px;
    }

    div.gatsby-image-wrapper {
      position: absolute;
      right: 0;
      width: 100%;

      ${mediaQueries.phoneLarge} {
        top: 50px;
        width: 70%;
      }
    }

    p {
      position: relative;
      margin-left: 50px;
      margin-top: 25px;
      font-size: 32px;
      font-weight: ${weights.regular};
      font-family: ${weights.serif};
      ${mediaQueries.phoneLarge} {
        margin-left: 100px;
        margin-top: 0;
        font-size: 36px;
      }
    }

    h2 {
      position: relative;
      color: ${colors.reallydarkgray};
      font-weight: ${weights.bold};
      font-size: 80px;
      margin-left: 50px;

      ${mediaQueries.phoneLarge} {
        font-size: 120px;
        margin-left: 100px;
      }
    }

    button {
      position: relative;
      margin-left: 50px;
      ${mediaQueries.phoneLarge} {
        margin-left: 100px;
      }
    }
  `;

  const subHeaderStyle = css`
    padding: 20px;
    ${mediaQueries.phoneLarge} {
      max-width: 600px;
      position: relative;
      left: 200px;
      top: -40px;
    }
  `;

  const headerStyle = css`
    max-width: 1080px;
    h1 {
      text-align: left;
    }
  `;

  const statsSection = css`
    position: relative;
    padding: 0;
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
  `;
  const statItem = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;
    p {
      min-height: 150px;
    }
  `;
  const gradientStyle = css`
    position: absolute;
    inset: 0 0 0 0;
    background: #747474;
    mix-blend-mode: multiply;
  `;
  const awardStyle = css`
    position: relative;
    padding: 0;
    .gatsby-image-wrapper {
      width: 100%;
    }
  `;
  const awardsLogo = css`
    position: absolute;
    top: 0;
    > div {
      flex-wrap: nowrap;
    }
  `;

  const coreValuesStyle = css`
    position: relative;
    padding: 0;
    bottom: 170px;

    .gatsby-image-wrapper {
      width: 100%;
    }
  `;

  const coreValuesTitle = css`
    width: 800px;
    position: relative;
    right: 90px;
    top: 50px;

    h3 {
      font-size: 8.5rem;
      font-family: ${fonts.serif};
      line-height: 130px;
    }

    h3:nth-of-type(1) {
      text-align: left;
    }
    h3:nth-of-type(2) {
      text-align: right;
    }
  `;

  const coreValuesSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sectionMain = css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 800px;
  `;

  const sectionRight = css`
    width: 700px;
    height: 500px;
`;

  const sectionRightLogos = css`
    position: absolute;
    width: 70%;
    top: 100px;
    right: 10px;
    > div {
      flex-wrap: nowrap;
    }

    .slick-list {
      max-width: 500px !important;
    }
    .corevalue-body {

      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      align-items: flex-end;

      p {
        text-align: left;
        /* Body */
        width: 100%;
        font-style: normal;
        font-weight: 300;
        font-size: 22px;
        //line-height: 1.5;
        /* or 38px */
        /* or 38px */
        letter-spacing: 0.025em;
        color: #282829;
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
      }
    }
`;

  const sectionLeft = css`
    position: relative;
    bottom: 70px;
    
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 76px;
      /* identical to box height, or 317% */
      display: flex;
      align-items: center;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      color: #7e7e7f;
      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0;
      padding: 0;
    }

    strong {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 76px;
      /* identical to box height, or 317% */
      display: flex;
      align-items: center;
      letter-spacing: 0.4px;
      text-decoration-line: underline;
      text-transform: uppercase;
      color: #282829;
      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;
    }
  `;

  const animateValue = (id, start, end, duration, symbol) => {
    const obj = document.getElementById(id);
    if (obj) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const newValue = Math.floor(progress * (end - start) + start);
        obj.innerHTML = `${newValue} ${symbol}`;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    } else {
      setTimeout(() => {
        animateValue(id, start, end, duration, symbol);
      }, 5000);
    }
  }



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
      <FullWidthSection css={statsSection}>
        <GatsbyImage
          image={partyPhoto.childImageSharp.gatsbyImageData}
          alt='Get together party'
        />
        <div css={gradientStyle} />
        <div css={statWrapper}>
          {stats.map(stat => {
            const id = stat.title.replace(/\s+/g, '-').toLowerCase();
            const numberData = stat.title.replace(/\D/g, '');
            const symbol = stat.title.replace(/\d/g, '');
            animateValue(
              id,
              0,
              numberData,
              2000,
              symbol
            );
            return (
              <div css={statItem}>
                <h4 id={id}>{stat.title}</h4>
                <p>{stat.subtitle}</p>
              </div>
            );
          })}
        </div>
      </FullWidthSection>

      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-content: center;
          justify-content: center;
          align-items: flex-end;
        `}
      >
        <img
          src={AppleImage}
          alt='Core Values'
          css={css`
            max-width: 400px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
        />
        <div css={coreValuesTitle}>
          <h3>Core</h3>
          <h3>Values</h3>
        </div>
      </div>

      <FullWidthSection css={coreValuesStyle}>
        <div css={sectionMain}>
          <div css={sectionLeft}>
            <p>Start with Heart</p>
            <strong>Own it</strong>
            <p>Stay Curious</p>
            <p>Do the Right Thing</p>
            <p>Defy Mediocrity</p>
          </div>
          <div css={sectionRight}>
            <LogoGridSlider
              minHeight='100'
              styles={sectionRightLogos}
              logoset='corevalues'
              backgroundColor='none'
              sliderSettings={coreValuesSliderSettings}
            />
          </div>
        </div>
      </FullWidthSection>
      <h3
        css={css`
          font-size: 95px;
          font-family: ${fonts.serif};
          text-align: center;
          line-height: 130px;
        `}
      >
        We are sort of a big deal.
      </h3>
      <FullWidthSection css={awardStyle}>
        <GatsbyImage
          image={grandma.childImageSharp.gatsbyImageData}
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

      <FullWidthSection>
        <ImageGallery data={imageGallery} images={galleryImages.nodes} />
      </FullWidthSection>

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
        <Button>Contact Us</Button>
      </FullWidthSection>
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
          layout: CONSTRAINED
        )
      }
    }
    partyPhoto: file(relativePath: { eq: "about/party-image.png" }) {
      childImageSharp {
        gatsbyImageData(
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
        }
      }
    }
  }
`;
