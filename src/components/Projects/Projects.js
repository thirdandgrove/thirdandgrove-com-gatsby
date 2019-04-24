import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Projects = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allNodeProject(sort: { fields: created, order: DESC }, limit: 10) {
            nodes {
              title
              field_external_link {
                uri
                title
              }
              relationships {
                field_logo {
                  localFile {
                    publicURL
                  }
                }
                field_case_study {
                  title
                  body {
                    processed
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <section>
          {data.allNodeProject.nodes.map(node => {
            console.log(node);
            return (
              <div key={node.title}>
                <h3>{node.title}</h3>
                <img
                  alt='project logo'
                  src={node.relationships.field_logo.localFile.publicURL}
                />
              </div>
            );
          })}
        </section>
      )}
    />
  );
};

export default Projects;
