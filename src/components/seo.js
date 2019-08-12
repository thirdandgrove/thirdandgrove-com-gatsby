/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, keywords, title, image }) => {
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

  const defaultImage =
    typeof window !== 'undefined'
      ? `${window.location.origin}/images/icon.png`
      : '';
  const metaImage = image || defaultImage;

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
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
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
      <link rel='preload' href='/Fonts/Canela/Canela-Medium.woff2' as='font' />
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-MediumItalic.woff2'
        as='font'
      />
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-ThinItalic.woff2'
        as='font'
      />
      <link rel='preload' href='/Fonts/Canela/Canela-Light.woff2' as='font' />
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-LightItalic.woff2'
        as='font'
      />
      <link rel='preload' href='/Fonts/Canela/Canela-Regular.woff2' as='font' />
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-RegularItalic.woff2'
        as='font'
      />

      <link rel='preload' href='/Fonts/Canela/Canela-Thin.woff2' as='font' />
      <link rel='preload' href='/Fonts/Canela/Canela-Bold.woff2' as='font' />
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-BoldItalic.woff2'
        as='font'
      />
      <link rel='preload' href='/Fonts/Canela/Canela-Black.woff2' as='font' />
      <link
        rel='preload'
        href='/Fonts/Canela/Canela-BlackItalic.woff2'
        as='font'
      />
      <link
        rel='preload'
        href='/Fonts/NBInternationalPro/NBInternationalProRegular.woff2'
        as='font'
      />
      <link
        rel='preload'
        href='/Fonts/NBInternationalPro/NBInternationalProItalic.woff2'
        as='font'
      />
      <link
        rel='preload'
        href='/Fonts/NBInternationalPro/NBInternationalProBold.woff2'
        as='font'
      />
      <link
        rel='preload'
        href='/Fonts/NBInternationalPro/NBInternationalProBoldItalic.woff2'
        as='font'
      />
      <link
        rel='preload'
        href='/Fonts/NBInternationalPro/NBInternationalProMono.woff2'
        as='font'
      />
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
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
