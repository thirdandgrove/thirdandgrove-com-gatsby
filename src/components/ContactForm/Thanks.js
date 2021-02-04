import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Spring } from 'react-spring/renderprops';

import { smSectionHead } from '../../styles';

const Thanks = ({ message }) => {
  const [loaded, setloaded] = useState(false);
  const thanksStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 450px;
    text-align: center;

    h5 {
      text-align: center;
      line-height: 2;
    }
  `;

  useEffect(() => {
    setloaded(true);
    return () => {};
  }, []);

  return (
    <div css={thanksStyles}>
      <Spring
        delay={0}
        to={{
          transform: loaded ? 'translateY(0)' : 'translateY(100px)',
          opacity: loaded ? '1' : '0',
        }}
      >
        {({ transform, opacity }) => (
          <h5
            style={{ transform, opacity }}
            css={smSectionHead}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </Spring>
    </div>
  );
};

Thanks.propTypes = {
  message: PropTypes.string,
};

Thanks.defaultProps = {
  message: 'Thank you for your inquiry. We will be in touch soon.',
};

export default Thanks;
