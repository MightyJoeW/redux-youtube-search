// External Dependencies
import React from 'react';

// Internal Dependencies
import VideoDetail from '../VideoDetail/VideoDetail';

// Component Definition
const VideoPlayer = props => {
  return (
    <div>
      <h1> VideoPlayer </h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/WdTL6eKy3rY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <VideoDetail />
    </div>
  );
};

export default VideoPlayer;
