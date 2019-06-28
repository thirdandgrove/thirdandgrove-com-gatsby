import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors, fonts, weights, container, mediaQueries } from '../styles';
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

  const JobList = styled.ul`
    margin-left: 0;
    li {
      list-style: none;
      margin: 50px 0;
      text-align: center;
      ${mediaQueries.phoneLarge} {
        margin: 60px 0;
      }

      a {
        font-weight: ${weights.bold};
        font-size: 30px;
        text-align: center;
        line-height: 1.1;
        ${mediaQueries.phoneLarge} {
          font-size: 57px;
          line-height: 1.26;
        }
      }
    }
  `;
  const jobs = data.allResumatorJob.nodes;

  // eliminate duplicate and closed job listings
  const uniqueJobs = jobs
    .filter(j => j.status === 'Open')
    .map(e => e.title)
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => jobs[e])
    .map(e => jobs[e]);

  return (
    <Layout
      headerData={{
        title: 'Careers',
        height: '400px',
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
              font-weight: ${weights.bold};
              text-transform: uppercase;
              letter-spacing: 2px;
              color: ${colors.mediumgray};
            `}
          >
            All positions are fully remote.
          </p>
          <JobList>
            {uniqueJobs.map(job => (
              <li key={JSON.stringify(job)}>
                <Link
                  to={`/careers/${job.title.toLowerCase().replace(/ /g, '-')}`}
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
