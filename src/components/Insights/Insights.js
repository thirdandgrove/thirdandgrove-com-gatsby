import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Insights = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allNodeArticle(sort: { fields: created, order: DESC }, limit: 10) {
            totalCount
            nodes {
              title
              status
              created
              body {
                processed
              }
              relationships {
                field_category {
                  name
                }
                field_case_study {
                  field_homepage_display_title
                  field_teaser_background_color
                }
                field_banner_image {
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <section>
          {data.allNodeArticle.nodes.map(node => {
            return <h3>{node.title}</h3>;
          })}
        </section>
      )}
    />
  );
};

export default Insights;
