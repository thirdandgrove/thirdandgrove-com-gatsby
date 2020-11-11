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
    margin-bottom: 75px;
    font-family: ${fonts.serif};

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

  const CalltoAction = styled.div`
    padding-left: 0;
    margin-bottom: 114px;
    width: 100%;
    margin: auto;

    ${mediaQueries.xs} {
      margin-bottom: 114px;
      width: 70%;
    }

    ${mediaQueries.phoneLarge} {
      margin-bottom: 120px;
      width: 745px;
    }

    div {
      list-style: none;
      margin: 73px auto;
      text-align: center;

      span {
        font-weight: ${weights.thin};
        font-size: 32px;
        text-align: center;
        line-height: 1.3;
        font-family: ${fonts.serif};

        ${mediaQueries.phoneLarge} {
          font-size: 48px;
          line-height: 1.5;
        }
      }
    }
  `;

  const SubCalltoAction = styled.div`
    font-weight: ${weights.thin};
    font-size: 16px;
    text-align: center;
    line-height: 1.75;
    font-family: ${fonts.sans};
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    ${mediaQueries.phoneLarge} {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
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
              font-size: 16px;
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
          <CalltoAction>
            <div>
              <span>
                {`Who's got upwards of 110 thumbs and is always on the lookout for
                top talent?`}
              </span>
            </div>
            <SubCalltoAction>
              {`You know it. We are. Got the hustle? Got the Drive? Send your resume to `}
              <a
                href='mailto:careers@thirdandgrove.com'
                title='careers@thirdandgrove.com'
              >
                careers@thirdandgrove.com
              </a>
              {` and lets see what happens.`}
            </SubCalltoAction>
          </CalltoAction>
        </div>
      </FullWidthSection>
    </Layout>
  );
};
