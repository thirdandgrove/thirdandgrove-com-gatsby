import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import CTA from '../components/CTA';
import Capability from '../components/Capability';
import adaGif from '../images/capabilities/ADA.gif';
import createGif from '../images/capabilities/create.gif';
import dataGif from '../images/capabilities/data.gif';
import marketingGif from '../images/capabilities/marketing.gif';
import strategyGif from '../images/capabilities/strategy.gif';
import techGif from '../images/capabilities/tech.gif';

const CapabilitiesPage = ({ data }) => {
  return (
    <Layout
      headerData={{
        title: `All the stuff we’re good at.`,
        mobileMinHeight: '93vh',
        height: '400px',
      }}
    >
      <Capability
        id='technology'
        imageSrc={data.technologyImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='Laptop on desk with drink'
        imageGif={techGif}
        imageGifAlt='Dog typing on computer'
        content={
          <>
            <h2>Technology</h2>
            <p>
              Work with the best engineers in the room—no matter what room
              you’re in. Our engineers are writing and discovering the future of
              digital excellence.
            </p>
            <ul>
              <li>Front-End Development</li>
              <li>Back-End Development</li>
              <li>Content Management</li>
              <li>
                <Link to='/partners/drupal/'>Drupal</Link>
              </li>
              <li>
                <Link to='/partners/acquia/'>Acquia</Link>
              </li>
              <li>
                <Link to='/partners/shopify/'>Shopify</Link>
              </li>
              <li>
                <Link to='/partners/gatsby/'>Gatsby</Link>
              </li>
            </ul>
          </>
        }
        index={0}
      />
      <Capability
        id='strategy'
        imageSrc={data.strategyImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='Person painting red room backed into a corner'
        imageGif={strategyGif}
        imageGifAlt='Dog cutting food like a chef'
        content={
          <>
            <h2>Strategy</h2>
            <p>
              The foundation for great work. Know your customer, your goals, and
              how to reach them.
            </p>
            <ul>
              <li>Digital Strategy</li>
              <li>Trends &amp; Insights</li>
              <li>Customer Research</li>
              <li>Industry Research</li>
              <li>Analytics / Data / SEO</li>
              <li>Omnichannel Strategy</li>
            </ul>
          </>
        }
        index={1}
      />
      <Capability
        id='creative'
        imageSrc={data.creativeImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='Person holding a balloon against a wall to make it look like an egg'
        imageGif={createGif}
        imageGifAlt='Dog dancing on two legs'
        content={
          <>
            <h2>Creative</h2>
            <p>
              Where data, culture, and good looks come together. Create the
              strongest connection to the brand experience, and look good doing
              it.
            </p>
            <ul>
              <li>Campaign Creation</li>
              <li>Art Direction</li>
              <li>UI/UX Design</li>
              <li>Social Content</li>
              <li>Content Development</li>
              <li>Interaction / Motion</li>
            </ul>
          </>
        }
        index={2}
      />
      <Capability
        id='data'
        imageSrc={data.dataImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='Hand with tiny multi-colored dots all over'
        imageGif={dataGif}
        imageGifAlt='Dog helping man measure a piece of wood'
        content={
          <>
            <h2>Data</h2>
            <p>
              More than points on a graph. Data tells us how connect, and how we
              can make those connections more meaningful.
            </p>
            <ul>
              <li>Insights audit</li>
              <li>KPI definition</li>
              <li>Account configuration</li>
              <li>Monthly reports</li>
              <li>User testing</li>
            </ul>
          </>
        }
        index={3}
      />
      <Capability
        id='marketing'
        imageSrc={data.marketingImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='Rotary Telephone'
        imageGif={marketingGif}
        imageGifAlt='Dog getting head scratched and smiling'
        content={
          <>
            <h2>Marketing</h2>
            <p>
              Like every therapist always says, communication is key. The same
              applies to your brand.
            </p>
            <ul>
              <li>Marketing Strategy</li>
              <li>Social Media Marketing</li>
              <li>Advertising</li>
              <li>Creative Concepts and Content</li>
              <li>Analytics and Reporting</li>
            </ul>
          </>
        }
        index={4}
      />
      <Capability
        id='ada'
        imageSrc={data.adaImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='Child hugging elephant'
        imageGif={adaGif}
        imageGifAlt='Dog with hotdog in mouth wagging tail'
        content={
          <>
            <h2>ADA</h2>
            <p>
              From{' '}
              <Link to='/insights/accessibility-for-everyone/'>
                writing about it
              </Link>{' '}
              to working with clients, we ensure every brand we work with
              empowers all users to experience their brand to the fullest.
            </p>
            <ul>
              <li>ADA Audits & Testing</li>
              <li>ADA Remediation</li>
              <li>ADA Compliant Design</li>
              <li>Compliance Implementation</li>
            </ul>
          </>
        }
        index={5}
      />
      <CTA />
    </Layout>
  );
};

export const query = graphql`
  query CapabilitiesQuery {
    technologyImageDesktop: file(relativePath: { eq: "technology.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 800, height: 800)
      }
    }
    strategyImageDesktop: file(relativePath: { eq: "strategy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 800, height: 800)
      }
    }
    creativeImageDesktop: file(relativePath: { eq: "creative.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 800, height: 800)
      }
    }
    dataImageDesktop: file(relativePath: { eq: "data.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 800, height: 800)
      }
    }
    marketingImageDesktop: file(relativePath: { eq: "marketing.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 800, height: 800)
      }
    }
    adaImageDesktop: file(relativePath: { eq: "ada.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 800, height: 800)
      }
    }
  }
`;

export default CapabilitiesPage;

CapabilitiesPage.propTypes = {
  data: PropTypes.object.isRequired,
};
