import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

const Layout = loadable(() => import('../components/layout'));
const CTA = loadable(() => import('../components/CTA'));
const Capability = loadable(() => import('../components/Capability'));

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
        imageSrc={data.technologyImageDesktop.childImageSharp.fluid}
        imageAlt='Laptop on desk with drink'
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
        imageSrc={data.strategyImageDesktop.childImageSharp.fluid}
        imageAlt='Two office workers looking at a chart on a laptop'
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
        imageSrc={data.creativeImageDesktop.childImageSharp.fluid}
        imageAlt='Man drawing logos in a notebook'
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
        imageSrc={data.dataImageDesktop.childImageSharp.fluid}
        imageAlt='Black and Red'
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
      <CTA />
    </Layout>
  );
};

export const query = graphql`
  query CapabilitiesQuery {
    technologyImageDesktop: file(relativePath: { eq: "technology.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    strategyImageDesktop: file(relativePath: { eq: "strategy.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    creativeImageDesktop: file(relativePath: { eq: "creative.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    dataImageDesktop: file(relativePath: { eq: "data.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default CapabilitiesPage;

CapabilitiesPage.propTypes = {
  data: PropTypes.object.isRequired,
};
