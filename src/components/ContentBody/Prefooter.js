/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { navigate } from 'gatsby';

import Button from '../Button';
import { TextWrapper } from '../Prefooter';
import SplitSection from '../SplitSection';
import { colors, fonts, weights, mediaQueries } from '../../styles';
import { ensureTrailingSlash } from '../../util';

const pStyles = css`
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 1.46;
  font-family: ${fonts.serif};
  font-weight: ${weights.thin};

  ${mediaQueries.phoneLarge} {
    margin-bottom: 60px;
  }
`;

const h2Styles = css`
  margin-bottom: 25px;
  font-size: 39px;
  line-height: 1.5;
  letter-spacing: -0.45px;
  font-weight: ${weights.bold};
  ${mediaQueries.phoneLarge} {
    margin-bottom: 60px;
    font-size: 72px;
    line-height: 1;
    letter-spacing: 0.96px;
    font-weight: ${weights.medium};
  }
`;

const preFooterStyles = css`
  min-height: 300px;

  ${mediaQueries.phoneLarge} {
    min-height: 600px;
    justify-content: center;
  }
`;

const Prefooter = ({ data }) => (
  <SplitSection
    css={css`
      margin-top: 40px;

      ${mediaQueries.phoneLarge} {
        margin-top: 100px;
      }
    `}
  >
    <div>
      <TextWrapper
        css={preFooterStyles}
        backgroundImage={data.relationships.field_image}
        backgroundColor={
          data.field_primary_color
            ? data.field_primary_color.color
            : colors.yellow
        }
      >
        <p css={pStyles}>{data.field_primary_lead_in_text}</p>
        <h2 css={h2Styles}>{data.field_primary_body}</h2>
        {data.field_primary_cta && (
          <Button
            onClick={() =>
              navigate(
                ensureTrailingSlash(
                  data.field_primary_cta.uri.replace('internal:', '')
                )
              )
            }
          >
            {data.field_primary_cta.title}
          </Button>
        )}
      </TextWrapper>
    </div>
    <div>
      <TextWrapper
        css={preFooterStyles}
        backgroundColor={
          data.field_secondary_color
            ? data.field_secondary_color.color
            : colors.yellow
        }
      >
        <p css={pStyles}>{data.field_secondary_lead_in_text}</p>
        <h2 css={h2Styles}>{data.field_secondary_body}</h2>
        {data.field_secondary_cta && (
          <Button
            onClick={() =>
              navigate(
                ensureTrailingSlash(
                  data.field_secondary_cta.uri.replace('internal:', '')
                )
              )
            }
          >
            {data.field_secondary_cta.title}
          </Button>
        )}
      </TextWrapper>
    </div>
  </SplitSection>
);

Prefooter.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Prefooter;
