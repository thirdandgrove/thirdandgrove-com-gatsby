import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import Image from '../components/ContentBody';
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
  const StudyPreview = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    a {
      text-decoration: none;
      color: ${colors.darkgray};
      padding: 2rem 0;
      h1 {
        display: inline;
      }
      h3 {
        display: inline;
      }
    }
    ul {
      list-style: none;
      display: flex;
      padding: 2rem 0;
      margin: 0;
      flex-direction: row;
      li {
        padding-right: 1rem;
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
                    {' - '}
                    <h3>{study.field_subtitle}</h3>
                  </Link>
                  <ul>
                    {study.relationships.field_tags.map(tag => (
                      <li>{tag.name}</li>
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
