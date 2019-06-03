import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import { colors } from '../styles';
import FullWidthSection from '../components/FullWidthSection';

export default () => {
  const Categories = styled.nav`
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 50%;
      margin: 5rem auto;
    }
    li {
      text-decoration: none;
      font-variant: small-caps;
      list-style: none;
      font-family: NBInternationalPro-Bol;
      font-size: 15px;
      color: #757575;
      letter-spacing: 2px;
      text-align: right;
      line-height: 36px;
      padding-right: 15px;
      cursor: pointer;
      &.active {
        color: ${colors.darkgray};
      }
    }
  `;
  const StudyPreview = styled.div``;
  return (
    <StaticQuery
      query={graphql`
        {
          allCaseStudy {
            nodes {
              id
              title
              field_subtitle
              field_inverse_header
              field_primary_image_scale
              field_tertiary_image_scale
              field_secondary_image_scale
              relationships {
                field_tags {
                  name
                }
                field_image {
                  id
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const studies = data.allCaseStudy.nodes;
        return (
          <Layout
            headerData={{
              children: (
                <>
                  <p>google</p>
                  <p>google</p>
                  <p>google</p>
                </>
              ),
              title: 'We work with brands we love.',
            }}
          >
            <Categories>
              {/* query generated from tags? */}
              <ul>
                <li className='active'>all</li>
                <li>design</li>
                <li>strategy</li>
                <li>engineering</li>
                <li>shopify</li>
                <li>acquia</li>
                <li>drupal</li>
              </ul>
            </Categories>
            <FullWidthSection>
              {studies.map(study => (
                <StudyPreview>
                  <pre>{JSON.stringify(study)}</pre>
                </StudyPreview>
              ))}
            </FullWidthSection>
          </Layout>
        );
      }}
    />
  );
};
