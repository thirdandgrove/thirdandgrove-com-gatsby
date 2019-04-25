import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const ArticlePreview = ({ article }) => {
  const Card = styled.div`
    width: 25%;
    height: 500px;
    overflow: hidden;
    padding: 1rem;
    div {
      height: 300px;
      width: 300px;
      background-color: #e0e0e0;
    }
    footer {
      font-family: 'NB International Pro';
      font-size: 15px;
      padding: 2rem;
    }
  `;
  return (
    <Card>
      <div />
      <Link to={`/articles${article.path.alias}`}>{article.title}</Link>
      <footer>
        {`${article.created} -
        ${article.relationships.uid.field_first_name} ${
          article.relationships.uid.field_last_name
        }`}
      </footer>
    </Card>
  );
};

export default ArticlePreview;
