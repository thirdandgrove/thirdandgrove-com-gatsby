import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import Button from '../Button';
import { mediaQueries, colors } from '../../styles';

import OverlayForm from './OverlayForm';

const ButtonFormDownload = ({
  header,
  text,
  confirmMessage,
  subheader,
  formName,
  styles,
  filepath,
  setFormSubmitted,
  formSubmitted,
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

  const solidButtonStyles = css`
    display: none;

    ${mediaQueries.phoneLarge} {
      display: inline-block;
    }

    span {
      background-image: linear-gradient(
        to bottom,
        ${colors.white},
        ${colors.white} 50%,
        ${colors.white} 50%
      );
    }

    &::before {
      background: ${colors.tagGray};
      height: 100%;
    }

    ${styles}
  `;

  return (
    <>
      {formSubmitted ? (
        <a href={filepath} target='_blank' rel='noreferrer'>
          <Button
            css={solidButtonStyles}
            onClick={() => {}}
            onKeyDown={onKeypress}
          >
            Download Now
          </Button>
        </a>
      ) : (
        <Button
          css={solidButtonStyles}
          onClick={e => handleClick(e)}
          onKeyDown={onKeypress}
        >
          {text}
        </Button>
      )}
      <OverlayForm
        setIsActive={setIsActive}
        isActive={isActive}
        header={header}
        confirmMessage={confirmMessage}
        subheader={subheader}
        formName={formName}
        setFormSubmitted={setFormSubmitted}
        buttonText='Download Now'
        css={css`
          display: ${isActive ? `flex` : `none`};
        `}
      />
    </>
  );
};

ButtonFormDownload.propTypes = {
  header: PropTypes.string.isRequired,
  confirmMessage: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  styles: PropTypes.object,
  filepath: PropTypes.string,
  formSubmitted: PropTypes.bool,
  setFormSubmitted: PropTypes.func,
};

ButtonFormDownload.defaultProps = {
  styles: {},
  filepath: ``,
  formSubmitted: false,
  setFormSubmitted: () => {},
};

export default ButtonFormDownload;
