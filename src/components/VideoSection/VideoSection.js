import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import useWindow from '../../hooks/useWindow';
import {
  colors,
  mediaQueries,
  jsBreakpoints,
  smSectionHead,
  container,
} from '../../styles';
import FullWidthSection from '../FullWidthSection';

const VideoSection = ({ url }) => {
  const { width } = useWindow();
  const isSmScreen = width < jsBreakpoints.phoneLarge;
  const [playing, setPlaying] = useState(!isSmScreen);
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <FullWidthSection>
      <button
        type='button'
        onClick={() => {
          setPlaying(!playing);
          if (!hasInteracted) {
            setHasInteracted(true);
          }
        }}
      >
        Play/Pause
      </button>
      <ReactPlayer
        // see: https://www.npmjs.com/package/react-player for props
        width={width}
        height='800px'
        url={url}
        playing={playing}
        volume={hasInteracted ? 1 : 0} // Mute on autoplay
        config={{
          vimeo: {
            // see: https://developer.vimeo.com/api/oembed/videos for options
            playerOptions: {
              controls: false,
              responsive: true,
              autoplay: !isSmScreen,
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
