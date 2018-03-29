// External Dependencies
import React from 'react';

// Local Variables
const title = {
  fontSize: '1.2em',
  fontWeight: 700,
  margin: '.5em 0'
}

// Component Definition
const VideoDetail = ({ video }) => {
  return (
    <div>
      <div style={title}>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  );
};

export default VideoDetail;
