/* eslint-disable react/no-array-index-key */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import FadeInDirection from '../FadeInDirection';

import { useHasBeenVisible } from '../../hooks/useVisibility';
import { mediaQueries, weights, fonts, colors } from '../../styles';

const CTAGridItem = ({
  icon,
  title,
  description,
  altStyle,
  noPaddingImg,
  extraCssItem,
  textColor,
}) => {
  const nodeRef = useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  const fontColor = textColor === 'dark' ? colors.darkgray : colors.lightgray;

  const ctaContainer = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .cta-grid-item--image-wrapper {
      display: flex;
      height: 85px;
      justify-content: center;
      align-items: center;
      margin-bottom: ${noPaddingImg ? '0' : '30px'};
    }

    img {
      text-align: center;
    }

    h4 {
      font-size: 27px;
      line-height: 39px;

      ${mediaQueries.phoneLarge} {
        margin-bottom: 36px;
        font-size: 39px;
        line-height: 48px;
      }
    }

    p {
      font-weight: ${weights.thin};
    }

    ${extraCssItem}
  `;

  const ctaContainerAlt = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 24px;
    border-bottom: none;

    .cta-grid-item--inner-wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }

    ${mediaQueries.phoneLarge} {
      border-bottom: 0.25px solid rgba(41, 41, 42, 0.2);
      padding: 24px 0;
    }

    img {
      margin-right: 12px;
      margin-bottom: 0;
    }

    h4 {
      font-family: ${fonts.sans};
      font-size: 16px;
      font-weight: ${weights.bold};
      margin: 0;
      line-height: 27px;
    }

    p {
      line-height: 27px;
    }

    &:nth-last-of-type(2),
    &:last-of-type {
      border-bottom: none;
    }

    ${extraCssItem}
  `;

  const textCStyle = css`
    color: ${fontColor};
  `;
  return (
    <>
      {!altStyle ? (
        <div css={ctaContainer} ref={nodeRef}>
          <FadeInDirection overflow={false}>
            <div className='cta-grid-item--image-wrapper'>
              {icon[0] && icon[0].node && icon[0].node.publicURL && (
                <img src={icon[0].node.publicURL} alt={title} />
              )}
            </div>
          </FadeInDirection>

          <h4 css={textCStyle}>{title}</h4>
          {Array.isArray(description) ? (
            <ul>
              {description.map((descriptionItem, index) => (
                <li key={index} css={textCStyle}>
                  {descriptionItem}
                </li>
              ))}
            </ul>
          ) : (
            <p css={textCStyle}>{description}</p>
          )}
        </div>
      ) : (
        <FadeInDirection overflow={false} css={ctaContainerAlt}>
          <div css={ctaContainerAlt} ref={nodeRef}>
            <div className='cta-grid-item--inner-wrapper'>
              {icon[0] && icon[0].node && icon[0].node.publicURL && (
                <img src={icon[0].node.publicURL} alt={title} />
              )}

              {title && <h4 css={textCStyle}>{title}</h4>}
              {Array.isArray(description) ? (
                <ul>
                  {description.map(descriptionItem => (
                    <li css={textCStyle}>{descriptionItem}</li>
                  ))}
                </ul>
              ) : (
                <p css={textCStyle}>{description}</p>
              )}
            </div>
          </div>
        </FadeInDirection>
      )}
    </>
  );
};

CTAGridItem.propTypes = {
  icon: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  altStyle: PropTypes.bool,
  noPaddingImg: PropTypes.bool,
  extraCssItem: PropTypes.object,
  textColor: PropTypes.string,
};

CTAGridItem.defaultProps = {
  icon: [],
  title: '',
  description: '',
  altStyle: false,
  noPaddingImg: false,
  extraCssItem: null,
  textColor: 'dark',
};

export default CTAGridItem;
