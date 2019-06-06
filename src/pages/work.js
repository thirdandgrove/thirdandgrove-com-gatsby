import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import { colors } from '../styles';
import FullWidthSection from '../components/FullWidthSection';

export default () => {
  const StudyPreview = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    padding-bottom: 5rem;
    :first-of-type {
      padding-top: 5rem;
    }
    a {
      text-decoration: none;
      color: ${colors.darkgray};
      padding-top: 2rem;
      h1 {
        font-size: 48px;
        display: inline;
      }
      h3 {
        font-size: 48px;
        font-family: Canela-Thin;
        display: inline;
        font-weight: 100;
      }
    }
    ul {
      list-style: none;
      display: flex;
      margin: 0;
      flex-direction: row;
      li {
        padding-right: 0.5rem;
        font-family: NBInternationalPro-Bol;
        font-variant: small-caps;
        font-size: 15px;
        color: ${colors.darkgray};
        letter-spacing: 2px;
        line-height: 36px;
      }
    }
  `;
  const BrandList = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-around;
    padding-top: 2rem;
  `;
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
              relationships {
                field_tags {
                  name
                }
                field_image {
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
          allTaxonomyTermCaseStudyTags {
            nodes {
              id
              name
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
                <BrandList>
                  <p>google</p>
                  <p>google</p>
                  <p>google</p>
                </BrandList>
              ),
              title: 'We work with brands we love.',
            }}
          >
            {studies.map(study => (
              <FullWidthSection height='100%' id={study.id}>
                <StudyPreview>
                  <img
                    src={study.relationships.field_image.localFile.publicURL}
                    alt={study.title}
                  />
                  <Link
                    to={`/studies/${study.title
                      .toLowerCase()
                      .replace(/ /g, '-')}`}
                  >
                    <h1>{study.title}</h1>
                    <h3>
                      {' – '}
                      {study.field_subtitle}
                    </h3>
                  </Link>
                  <ul>
                    {study.relationships.field_tags.map((tag, i, arr) => (
                      <li>
                        {tag.name.toLowerCase()}
                        {i !== arr.length - 1 && ','}
                      </li>
                    ))}
                  </ul>
                </StudyPreview>
              </FullWidthSection>
            ))}
          </Layout>
        );
      }}
    />
  );
};
