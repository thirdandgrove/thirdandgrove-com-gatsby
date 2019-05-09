import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../../styles';

const WorkPreview = ({ article }) => {
  const Card = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3rem;
    div {
      height: 500px;
      width: 500px;
      background-color: ${colors.gray};
    }
    span {
      display: flex;
      flex-direction: column;
      width: 85%;
      p {
        font-family: Canela-Bold;
        font-size: 33px;
        color: ${colors.darkgray};
        letter-spacing: 0;
        line-height: 52px;
      }
      footer {
        font-family: 'NB International Pro';
        font-size: 15px;
      }
    }
    &:hover {
      div {
        transition: all 0.2s ease;
        background-color: ${colors.white};
      }
    }
  `;
  return (
    <Link
      css={css`
        text-decoration: none;
        color: black;
      `}
      to={`/articles${article.path.alias}`}
    >
      <Card>
        <div />
        <span>
          <p
            css={css`
              padding: 0.3rem;
            `}
          >
            {article.title}
          </p>
          <footer>
            {`${article.created} -
        ${article.relationships.uid.field_first_name} ${
              article.relationships.uid.field_last_name
            }`}
          </footer>
        </span>
      </Card>
    </Link>
  );
};

WorkPreview.propTypes = {
  article: PropTypes.object.isRequired,
};

export default WorkPreview;
