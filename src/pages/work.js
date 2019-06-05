import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import LazyImage from '../components/LazyImage';
import { colors } from '../styles';
import FullWidthSection from '../components/FullWidthSection';

export default () => {
  // Removed, will implement in a later version.
  // const Categories = styled.nav`
  //   width: 100%;
  //   ul {
  //     display: flex;
  //     flex-direction: row;
  //     justify-content: space-between;
  //     width: 50%;
  //     margin: 5rem auto;
  //   }
  //   li {
  //     text-decoration: none;
  //     font-variant: small-caps;
  //     list-style: none;
  //     font-family: NBInternationalPro-Bol;
  //     font-size: 15px;
  //     color: ${colors.darkgrayFaded};
  //     letter-spacing: 2px;
  //     text-align: right;
  //     line-height: 36px;
  //     padding-right: 15px;
  //     cursor: pointer;
  //     &.active {
  //       color: ${colors.darkgray};
  //       text-decoration: underline;
  //     }
  //   }
  // `;
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
                  id
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
        // const tags = data.allTaxonomyTermCaseStudyTags.nodes;
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
            {/* <Categories>
              <ul>
                <li className='active'>all</li>
                {tags.map(tag => (
                  <li>{tag.name.toLowerCase()}</li>
                ))}
              </ul>
            </Categories> */}
            {studies.map(study => (
              <FullWidthSection height='100%' id={study.id}>
                <StudyPreview>
                  <LazyImage id={study.relationships.field_image.id} />
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
