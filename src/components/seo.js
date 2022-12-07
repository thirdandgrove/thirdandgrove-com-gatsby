import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, keywords, title, image, noIndex }) => {
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

  const imageWithFullpath = `https://www.thirdandgrove.com${metaImage}`;

  const balanceTextURL =
    'https://cdnjs.cloudflare.com/ajax/libs/balance-text/3.3.0/balancetext.min.js';

  const handleChangeClientState = (newState, addedTags) => {
    if (addedTags && addedTags.scriptTags) {
      const script = addedTags.scriptTags.find(
        ({ src }) => src === balanceTextURL
      );
      if (script) {
        script.addEventListener('load', () => window.balanceText(), {
          once: true,
        });
      }
    }
  };

  const metaRobots = noIndex ? 'noindex,nofollow' : 'index,follow';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `googlebot`,
          content: metaRobots,
        },
        {
          name: `robots`,
          content: metaRobots,
        },
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
      onChangeClientState={handleChangeClientState}
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
      <style type='text/css'>
        {`
        .async-hide { opacity: 0 !important}
    `}
      </style>

      <script type='text/javascript'>
        {`
        (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
        h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
        (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
        })(window,document.documentElement,'async-hide','dataLayer',4000,
        {'GTM-MKBKRBC':true});
    `}
      </script>
      <script src={balanceTextURL} />
      <style type='text/css'>
        {`/* Apply (proposed) CSS style. Plugin looks for elements with class named "balance-text" */
          .balance-text {
            text-wrap: balance;
          }
        `}
      </style>
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
  noIndex: false,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  image: PropTypes.string,
  noIndex: PropTypes.bool,
};

export default SEO;
