import React from 'react';
import PropTypes from 'prop-types';

import VideoSection from '../VideoSection/VideoSection';

const FullWidthVideo = ({ data }) => {
  const mainVideo = data.relationships.field_main_video.localFile.publicURL;
  const autoPlayVideo =
    data.relationships.field_autoplay_video.localFile.publicURL;

  return <VideoSection url={mainVideo} mp4={autoPlayVideo} isFile isContent />;
};

FullWidthVideo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FullWidthVideo;
