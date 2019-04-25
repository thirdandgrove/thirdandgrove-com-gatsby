import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ArticlePreview from '../ArticlePreview';

const Insights = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allNodeArticle(sort: { fields: created, order: DESC }, limit: 10) {
            nodes {
              title
              body {
                processed
                summary
              }
              path {
                alias
              }
              created(formatString: "MMMM DD YYYY")
              relationships {
                uid {
                  name
                  field_last_name
                  field_first_name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <section>
          {data.allNodeArticle.nodes.map(node => {
            return <ArticlePreview article={node} />;
          })}
        </section>
      )}
    />
  );
};

export default Insights;
