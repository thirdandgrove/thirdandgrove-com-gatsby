import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import Button from '../Button';
import { mediaQueries } from '../../styles';

import OverlayForm from './OverlayForm';

const ButtonFormDownload = ({
  header,
  text,
  confirmMessage,
  subheader,
  formName,
  styles,
  filepath,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [formFubmitted, setFormSubmitted] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const onKeypress = e => {
    if (e.keyCode === 13) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    console.log(formFubmitted);
  }, [formFubmitted]);

  return (
    <>
      {formFubmitted ? (
        <a href={filepath} target='_blank' rel='noreferrer'>
          <Button
            css={css`
              display: none;

              ${mediaQueries.phoneLarge} {
                display: inline-block;
              }

              ${styles}
            `}
            onClick={() => {}}
            onKeyDown={onKeypress}
          >
            Download E-book
          </Button>
        </a>
      ) : (
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
      )}
      <OverlayForm
        setIsActive={setIsActive}
        isActive={isActive}
        header={header}
        confirmMessage={confirmMessage}
        subheader={subheader}
        formName={formName}
        setFormSubmitted={setFormSubmitted}
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
};

ButtonFormDownload.defaultProps = { styles: {}, filepath: `` };

export default ButtonFormDownload;
