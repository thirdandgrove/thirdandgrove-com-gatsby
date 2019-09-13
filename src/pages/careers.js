import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { fonts, weights, container, mediaQueries } from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allResumatorJob(filter: { status: { eq: "Open" } }) {
        nodes {
          title
          status
        }
      }
    }
  `);

  const JobList = styled.ul`
    padding-left: 0;
    margin-bottom: 114px;
    font-family: ${fonts.serif};

    ${mediaQueries.phoneLarge} {
      margin-bottom: 120px;
    }

    li {
      list-style: none;
      margin: 73px 0;
      text-align: center;

      a {
        font-weight: ${weights.thin};
        font-size: 30px;
        text-align: center;
        line-height: 1.3;

        ${mediaQueries.phoneLarge} {
          font-size: 48px;
          line-height: 1.5;
        }
      }
    }
  `;
  const jobs = data.allResumatorJob.nodes;

  // eliminate duplicate job listings
  const uniqueJobs = jobs
    .map(e => e.title)
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => jobs[e])
    .map(e => jobs[e]);

  return (
    <Layout
      headerData={{
        title: 'We work with the best.',
        height: '400px',
        mobileMinHeight: '93vh',
      }}
    >
      <FullWidthSection
        css={css`
          padding-top: 30px;

          ${mediaQueries.phoneLarge} {
            padding-top: 60px;
          }
        `}
      >
        <div css={container.max}>
          <p
            css={css`
              margin-bottom: 0;
              text-align: center;
              font-size: 15px;
              font-family: ${fonts.sans};
              font-weight: ${weights.light};

              ${mediaQueries.phoneLarge} {
                margin-top: 60px;
              }
            `}
          >
            All positions are fully remote.
          </p>
          <JobList>
            {uniqueJobs.map(job => (
              <li key={JSON.stringify(job)}>
                <Link
                  to={`/careers/${job.title.toLowerCase().replace(/ /g, '-')}/`}
                >
                  {job.title}
                </Link>
              </li>
            ))}
          </JobList>
        </div>
      </FullWidthSection>
    </Layout>
  );
};
