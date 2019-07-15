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
    ${mediaQueries.phoneLarge} {
      margin-bottom: 120px;
    }
    li {
      list-style: none;
      margin: 57px 0;
      text-align: center;

      ${mediaQueries.phoneLarge} {
        margin: 73px 0;
      }

      a {
        font-weight: ${weights.light};
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
        title: 'We work with the best.',
        height: '400px',
        mobileHeight: '93vh',
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
              color: ${colors.mediumgray};

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
