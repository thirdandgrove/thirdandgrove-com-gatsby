import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title,
  image,
  doNotIndex,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const defaultImage = `/images/icon.png`;

  const metaImage = image || defaultImage;

  const imageWithFullpath =
    typeof window !== 'undefined'
      ? `${window.location.origin}${metaImage}`
      : '';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: imageWithFullpath,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:image`,
          content: imageWithFullpath,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-Medium.woff2'
        as='font'
        crossOrigin='anonymous'
        type='font/woff2'
      />
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-Thin.woff2'
        as='font'
        crossOrigin='anonymous'
        type='font/woff2'
      />
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-Bold.woff2'
        as='font'
        crossOrigin='anonymous'
        type='font/woff2'
      />
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-Black.woff2'
        as='font'
        crossOrigin='anonymous'
        type='font/woff2'
      />
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-BlackItalic.woff2'
        as='font'
        crossOrigin='anonymous'
        type='font/woff2'
      />
      <link
        rel='preload'
        href='/Fonts/NBInternationalPro/NBInternationalProRegular.woff2'
        as='font'
        crossOrigin='anonymous'
        type='font/woff2'
      />
      <link
        rel='preload'
        href='/Fonts/NBInternationalPro/NBInternationalProLight.woff2'
        as='font'
        crossOrigin='anonymous'
        type='font/woff2'
      />
      <link
        rel='preload'
        href='/Fonts/NBInternationalPro/NBInternationalProBold.woff2'
        as='font'
        crossOrigin='anonymous'
        type='font/woff2'
      />
      {doNotIndex ? <meta name='robots' content='noindex,nofollow' /> : ''}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
  title: null,
  image: null,
  doNotIndex: false,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  image: PropTypes.string,
  doNotIndex: PropTypes.bool,
};

export default SEO;
