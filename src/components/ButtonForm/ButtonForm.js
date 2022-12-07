import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import { OverlayForm } from '../NewsletterForm';
import Button from '../Button';
import { mediaQueries } from '../../styles';

const ButtonForm = ({
  header,
  text,
  confirmMessage,
  subheader,
  formName,
  styles,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const onKeypress = e => {
    if (e.keyCode === 13) {
      setIsActive(!isActive);
    }
  };

  return (
    <>
      <Button
        css={css`
          display: none;

          ${mediaQueries.phoneLarge} {
            display: inline-block;
          }

          ${styles}
        `}
        onClick={e => handleClick(e)}
        onKeyDown={onKeypress}
      >
        {text}
      </Button>
      <OverlayForm
        setIsActive={setIsActive}
        isActive={isActive}
        header={header}
        confirmMessage={confirmMessage}
        subheader={subheader}
        formName={formName}
        css={css`
          display: ${isActive ? `flex` : `none`};
        `}
      />
    </>
  );
};

ButtonForm.propTypes = {
  header: PropTypes.string.isRequired,
  confirmMessage: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

ButtonForm.defaultProps = { styles: `` };

export default ButtonForm;
