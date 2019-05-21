import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import { colors } from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allResumatorJob {
        nodes {
          title
          status
        }
      }
    }
  `);
  const Filter = styled.nav`
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 50%;
      margin: 5rem auto;
      margin-top: 1rem;
    }
    li {
      text-decoration: none;
      font-variant: small-caps;
      list-style: none;
      font-family: NBInternationalPro-Bol;
      font-size: 15px;
      color: ${colors.mediumgray};
      letter-spacing: 2px;
      text-align: right;
      line-height: 36px;
      padding-right: 15px;
      &.active {
        color: ${colors.darkgray};
        text-decoration: underline;
      }
    }
  `;

  const JobList = styled.ul`
    margin: 3rem auto;
    li {
      list-style: none;
      padding: 2rem;
      text-align: center;
      a {
        font-family: Canela-Bold;
        font-size: 57px;
        color: ${colors.darkgray};
        letter-spacing: 0;
        text-align: center;
        line-height: 72px;
        text-decoration: none;
      }
    }
  `;

  return (
    <Layout
      headerData={{
        title: 'Careers',
        height: '450px',
      }}
    >
      {/* <Filter>
        <ul
          css={css`
            margin: 0 auto !important;
          `}
        >
          <li
            css={css`
              margin: 0 auto;
            `}
          >
            filter jobs
          </li>
        </ul>
        <ul>
          <li>creative</li>
          <li>delivery</li>
          <li>strategy</li>
          <li>engineering</li>
        </ul>
      </Filter> */}
      <FullWidthSection height='100%'>
        <JobList>
          {data.allResumatorJob.nodes
            .filter(j => j.status === 'Open')
            .map(job => (
              <li>
                <Link
                  to={`/careers/${job.title.toLowerCase().replace(/ /g, '-')}`}
                >
                  {job.title}
                </Link>
              </li>
            ))}
        </JobList>
      </FullWidthSection>
    </Layout>
  );
};
