import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import useWindow from '../../hooks/useWindow';
import FullWidthSection from '../FullWidthSection';

const VideoSection = ({ url }) => {
  const { width } = useWindow();
  const [playing, setPlaying] = useState(false);

  return (
    <FullWidthSection>
      <button type='button' onClick={() => setPlaying(!playing)}>
        play/pause
      </button>
      <ReactPlayer
        // see: https://www.npmjs.com/package/react-player for props
        width={width}
        height='800px'
        url={url}
        playing={playing}
        config={{
          vimeo: {
            // see: https://developer.vimeo.com/api/oembed/videos for options
            playerOptions: {
              controls: false,
              responsive: true,
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
