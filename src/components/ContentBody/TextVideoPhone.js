import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import {
  weights,
  container,
  mediaQueries,
  contentH2,
  contentHeadings,
  dropCap,
} from '../../styles';
import { modifyExternalLinks } from '../../util';
import SplitSection from '../SplitSection';
import PhoneVideo from '../PhoneVideo';

const TextVideoPhone = ({ data, url }) => {
  const renderDropCap = data.type === 'insight' && data.isFirstText;
  const [body, setBody] = useState(data.field_body.processed);

  useEffect(() => {
    setBody(modifyExternalLinks(data.field_body.processed, url));
  }, []);

  const sectionStyle = css`
    ${container.min}
    font-weight: ${weights.thin};
    grid-column-gap: 20px;
    padding: 0 20px;

    ${mediaQueries.phoneLarge} {
      padding: 0;
    }

    ${renderDropCap && dropCap}

    a {
      text-decoration: underline;
    }

    h2 {
      ${contentH2}
    }

    h3 {
      ${contentHeadings}
    }
  `;

  const sectionVerticalAlignment = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return data.field_reversed ? (
    <SplitSection css={sectionStyle} gridTemplateColumns='45% 49%'>
      <section>
        <PhoneVideo
          // eslint-disable-next-line
          src={require(`../../../static/${data.field_video_file_name}`)}
          title='CloudHealth'
        />
      </section>
      <section
        css={sectionVerticalAlignment}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </SplitSection>
  ) : (
    <SplitSection css={sectionStyle} gridTemplateColumns='54% 40%'>
      <section
        css={sectionVerticalAlignment}
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <section>
        <PhoneVideo
          // eslint-disable-next-line
          src={require(`../../../static/${data.field_video_file_name}`)}
          title='CloudHealth'
        />
      </section>
    </SplitSection>
  );
};

TextVideoPhone.propTypes = {
  data: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default TextVideoPhone;
