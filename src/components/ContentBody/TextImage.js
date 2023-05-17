import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/react';
import { navigate } from 'gatsby';

import {
  weights,
  container,
  mediaQueries,
  contentH2,
  contentHeadings,
  dropCap,
} from '../../styles';
import SplitSection from '../SplitSection';
import Button from '../Button/Button';
import { ensureTrailingSlash } from '../../util';

const TextImage = ({ data }) => {
  console.log('shego');
  const { field_primary_cta: cta } = data;
  const renderDropCap = data.type === 'insight' && data.isFirstText;
  const sectionStyle = css`
    ${container.min}
    font-weight: ${weights.thin};
    grid-column-gap: 20px;
    padding: 0 20px;

    ${mediaQueries.phoneLarge} {
      padding: 0;
    }

    ${renderDropCap && dropCap}

    a {
      text-decoration: underline;
    }

    h2 {
      ${contentH2}
    }

    h3 {
      ${contentHeadings}
    }
  `;

  return data.field_reversed ? (
    <SplitSection css={sectionStyle} gridTemplateColumns='45% 49%'>
      <section>
        {data.relationships.field_image.localFile.childImageSharp ? (
          <Img
            fluid={
              data.relationships.field_image.localFile.childImageSharp.fluid
            }
            alt={data.field_image.alt}
            css={css`
              margin-bottom: 40px;
              padding: 0;
            `}
          />
        ) : (
          <div
            css={css`
              width: 680px;
              max-width: 100%;
              margin: 0 auto 40px;
              padding: 0;
            `}
          >
            <img
              src={data.relationships.field_image.localFile.publicURL}
              alt={data.field_image.alt}
              css={css`
                margin: 0 20px 70px;

                ${mediaQueries.phoneLarge} {
                  ${container.min};
                  padding-left: 0;
                  padding-right: 0;
                  margin: 0 auto 70px;
                }
              `}
            />
          </div>
        )}
      </section>
      <section>
        <section
          dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
        />
        {cta && (
          <Button
            onClick={() =>
              navigate(ensureTrailingSlash(cta.uri.replace('internal:', '')))
            }
          >
            {cta.title}
          </Button>
        )}
      </section>
    </SplitSection>
  ) : (
    <SplitSection css={sectionStyle} gridTemplateColumns='54% 40%'>
      <section>
        <section
          dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
        />
        {cta && (
          <Button
            onClick={() =>
              navigate(ensureTrailingSlash(cta.uri.replace('internal:', '')))
            }
          >
            {cta.title}
          </Button>
        )}
      </section>
      <section>
        {data.relationships.field_image.localFile.childImageSharp ? (
          <Img
            fluid={
              data.relationships.field_image.localFile.childImageSharp.fluid
            }
            alt={data.field_image.alt}
            css={css`
              margin-bottom: 40px;
              padding: 0;
            `}
          />
        ) : (
          <div
            css={css`
              width: 680px;
              max-width: 100%;
              margin: 0 auto 40px;
              padding: 0;
            `}
          >
            <img
              src={data.relationships.field_image.localFile.publicURL}
              alt={data.field_image.alt}
              css={css`
                margin: 0 20px 70px;

                ${mediaQueries.phoneLarge} {
                  ${container.min};
                  padding-left: 0;
                  padding-right: 0;
                  margin: 0 auto 70px;
                }
              `}
            />
          </div>
        )}
      </section>
    </SplitSection>
  );
};

TextImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TextImage;
