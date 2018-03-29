// External Dependencies
import React from 'react';

// Local Variables
const details = {
  margin: '5px auto',
  padding: 20,
  width: 640
}
const description = {
  padding: '10px 0'
}
const title = {
  fontSize: '1.2em',
  fontWeight: 700,
}

// Component Definition
const VideoDetail = ({ video }) => {
  return (
    <div style={details}>
      <div style={title}>{video.snippet.title}</div>
      <hr />
      <div style={description}>{video.snippet.description}</div>
      <hr />
    </div>
  );
};

export default VideoDetail;
