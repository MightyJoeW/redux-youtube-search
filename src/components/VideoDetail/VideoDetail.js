// External Dependencies
import React from 'react';
import Divider from 'material-ui/Divider';

// Local Variables
const details = {
  margin: '5px auto',
  padding: 20,
  width: 640
}
const description = {
  padding: '12px 0'
}
const title = {
  fontSize: '1.2em',
  fontWeight: 700,
  marginBottom: 10
}

// Component Definition
const VideoDetail = ({ video }) => {
  console.log(video);
  return (
    <div style={details}>
      <div style={title}>{video.snippet.title}</div>
      <Divider />
      <div style={description}>{video.snippet.description}</div>
      <Divider />
    </div>
  );
};

export default VideoDetail;
