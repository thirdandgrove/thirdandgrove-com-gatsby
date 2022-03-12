import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import { colors, weights, mediaQueries } from '../../styles';
import FullWidthSection from '../FullWidthSection';
import Button from '../Button';

import Block from './Block';

const ColoredBlocks = ({ blocks }) => {
  const wrapperStyle = css`
    padding: 0;
    flex-direction: column;
    ${mediaQueries.phoneLarge} {
      flex-direction: row;
    }

    section {
      padding: 75px 0;

      ${mediaQueries.phoneLarge} {
        padding: 100px 0;
      }
    }

    h2 {
      color: ${colors.reallydarkgray};
      font-weight: ${weights.bold};
      text-align: center;
      padding: 0 40px;
    }

    img {
      max-width: 73px;
    }
  `;

  const blockStyle = css`
    width: 100%;
    ${mediaQueries.phoneLarge} {
      width: inherit;
    }
  `;

  return (
    <FullWidthSection
      minHeight='300px'
      height='300px'
      align='stretch'
      flexDirection='row'
      css={wrapperStyle}
    >
      {blocks.map((block, index) => (
        <Block
          backgroundColor={block.backgroundColor}
          width={index === 1 ? '34%' : '33%'}
          key={block.path}
          css={blockStyle}
        >
          <h2>{block.headline}</h2>
          <Button>
            <a href={block.path} target='_blank' rel='noreferrer'>
              {block.linkTitle}
            </a>
          </Button>
        </Block>
      ))}
    </FullWidthSection>
  );
};

ColoredBlocks.propTypes = {
  blocks: PropTypes.array,
};

ColoredBlocks.defaultProps = {
  blocks: null,
};

export default ColoredBlocks;
