import React from 'react';
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
import SplitSection from '../SplitSection';
import PhoneVideo from '../PhoneVideo';

const TextVideoPhone = ({ data }) => {
  const renderDropCap = data.type === 'insight' && data.isFirstText;
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

  // eslint-disable-next-line
  let videoSrc = require(`../../../static/${data.field_video_file_name}`);

  if (videoSrc.default) {
    videoSrc = videoSrc.default;
  }

  return data.field_reversed ? (
    <SplitSection css={sectionStyle} gridTemplateColumns='45% 49%'>
      <section>
        <PhoneVideo
          // eslint-disable-next-line
          src={videoSrc}
          title='CloudHealth'
        />
      </section>
      <section
        css={sectionVerticalAlignment}
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
    </SplitSection>
  ) : (
    <SplitSection css={sectionStyle} gridTemplateColumns='54% 40%'>
      <section
        css={sectionVerticalAlignment}
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
      <section>
        <PhoneVideo
          // eslint-disable-next-line
          src={videoSrc}
          title='CloudHealth'
        />
      </section>
    </SplitSection>
  );
};

TextVideoPhone.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TextVideoPhone;
