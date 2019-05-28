import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { colors } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';

const PostTemplate = ({ pageContext }) => {
  const { post } = pageContext;
  return (
    <Layout
      headerData={{
        backgroundImage: post.relationships.field_image
          ? post.relationships.field_image.localFile.publicURL
          : null,
        title: post.relationships.field_image ? null : post.relationships.title,
        invert: post.field_inverse_header,
      }}
    >
      <header
        css={css`
          padding-left: 3rem;
          padding-top: 3rem;
        `}
      >
        <h1
          css={css`
            font-family: Canela-Black;
            font-size: 100px;
            color: ${colors.darkgray};
            letter-spacing: 1.33px;
            line-height: 76px;
            padding-top: 3rem;
          `}
        >
          {post.title}
        </h1>
        <h4
          css={css`
            font-family: NBInternationalPro-Reg;
            font-size: 12px;
            color: ${colors.darkgray};
            letter-spacing: 3px;
            line-height: 16px;
          `}
        >
          {post.relationships.field_tags
            ? post.relationships.field_tags.map(tag => tag.name).join(', ')
            : null}
        </h4>
      </header>
      <p
        css={css`
          font-family: Canela-Thin;
          font-size: 39px;
          color: #282829;
          letter-spacing: -0.45px;
          line-height: 84px;
          padding-top: 3rem;
          padding-left: 3rem;
        `}
      >
        {post.field_subtitle}
      </p>
      {post.relationships.field_components.map(comp => {
        // Dynamically select a component based on field name
        const componentName = comp.relationships.component_type.name
          .split(' ')
          .join('');
        const Component = ContentBody[componentName];
        return <Component key={JSON.stringify(comp)} data={comp} />;
      })}
    </Layout>
  );
};

PostTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default PostTemplate;
