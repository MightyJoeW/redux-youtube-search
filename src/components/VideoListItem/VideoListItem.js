// External Dependencies
import React from 'react';

// Local Variables
const listGroupItem = {};
const videoList = {}
const mediaLeft = {}
const mediaObject = {}

// Component Definition
const VideoListItem = ({video}) => {
  // ES6 shorthand for taking in props and doing const video = props.video
  return (
      <li style={listGroupItem}>
        <div style={videoList}>
          <div style={mediaLeft}>
            <img style={mediaObject}/>
          </div>
        </div>
      </li>
  );
};

export default VideoListItem;