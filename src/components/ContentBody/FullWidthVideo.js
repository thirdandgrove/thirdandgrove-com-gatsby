import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import VideoSection from '../VideoSection/VideoSection';
import { useHasBeenVisible } from '../../hooks/useVisibility';

const FullWidthVideo = ({ data }) => {
  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);
  const mainVideo = data.relationships.field_main_video.localFile.publicURL;
  const autoPlayVideo =
    data.relationships.field_autoplay_video.localFile.publicURL;

  return hasScrolled || isScrolling ? (
    <VideoSection url={mainVideo} mp4={autoPlayVideo} isFile isContent />
  ) : (
    <div ref={halfPage}></div>
  );
};

FullWidthVideo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FullWidthVideo;
