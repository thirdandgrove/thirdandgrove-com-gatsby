/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { mediaQueries, container, fonts, weights } from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import Button from '../components/Button';

const Job = ({ pageContext: { title, boardCode, description } }) => {
  const wrapperStyles = css`
    padding-top: 30px;
    padding-bottom: 30px;
    font-family: ${fonts.sans};
    font-weight: ${weights.light};
    letter-spacing: 0.2px;

    strong:only-child {
      margin-top: 60px;
      margin-bottom: -7px;
      font-family: inherit;
      font-size: 21px;
      line-height: 1.4px;
      font-weight: ${weights.bold};
    }

    ${mediaQueries.phoneLarge} {
      padding-top: 100px;
      padding-bottom: 100px;

      strong:only-child {
        font-size: 18px;
        line-height: 1.39;
        margin-bottom: -27px;
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
        title,
        mobileMinHeight: '93vh',
        children: (
          <>
            <Button
              css={css`
                margin-top: 64px;

                ${mediaQueries.xs} {
                  margin-top: 72px;
                }
              `}
              onClick={() =>
                window.open(
                  `https://thirdandgrove.applytojob.com/apply/${boardCode}`,
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
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </FullWidthSection>
    </Layout>
  );
};

Job.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Job;
