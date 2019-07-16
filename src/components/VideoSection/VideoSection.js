import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import useWindow from '../../hooks/useWindow';
import FullWidthSection from '../FullWidthSection';

const VideoSection = ({ url }) => {
  const { width } = useWindow();
  return (
    <FullWidthSection>
      <ReactPlayer
        width={width}
        height='700px' // FullWidthSection Height
        url={url}
        playing
        config={{
          vimeo: {
            playerOptions: {
              controls: false,
            },
          },
        }}
      />
    </FullWidthSection>
  );
};

VideoSection.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoSection;
