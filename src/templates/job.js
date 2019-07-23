/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { mediaQueries, container, fonts, weights } from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import Button from '../components/Button';

const Job = ({ pageContext }) => {
  const { job } = pageContext;

  const wrapperStyles = css`
    padding-top: 30px;
    padding-bottom: 30px;
    font-family: ${fonts.sans};
    font-weight: ${weights.light};
    letter-spacing: 0.2px;

    h2 {
      margin-top: 60px;
      font-family: inherit;
      font-size: 21px;
      line-height: 1.4px;
      font-weight: ${weights.bold};

      &:first-child {
        margin-top: 0;
      }
    }

    ${mediaQueries.phoneLarge} {
      padding-top: 100px;
      padding-bottom: 100px;

      h2 {
        font-size: 18px;
        line-height: 1.39;
      }

      ul {
        font-size: 16px;
        line-height: 1.6875;
      }
    }
  `;

  return (
    <Layout
      headerData={{
        title: job.title,
        mobileHeight: '93vh',
        children: (
          <>
            <Button
              css={css`
                margin-top: 4rem;
              `}
              onClick={() =>
                window.open(
                  `https://thirdandgrove.applytojob.com/apply/${
                    job.board_code
                  }`,
                  '_blank'
                )
              }
            >
              Apply Now
            </Button>
          </>
        ),
      }}
    >
      <FullWidthSection height='100%' padding='0'>
        <div css={[container.min, wrapperStyles]}>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
      </FullWidthSection>
    </Layout>
  );
};

Job.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Job;
