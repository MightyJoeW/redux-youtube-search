// External Dependencies
import React from 'react';
import {ListItem} from 'material-ui/List';

// Local Variables
const listGroupItem = {};
const videoList = {};
const mediaLeft = {};
const mediaObject = {};
const mediaBody = {};
const mediaHeading = {};

// Component Definition
const VideoListItem = ({video}) => {
  // ES6 shorthand for taking in props and doing const video = props.video
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
      <ListItem style={listGroupItem}>
        <div style={videoList}>
          <div style={mediaLeft}>
            <img style={mediaObject} src={imageUrl}/>
          </div>
          <div style={mediaBody}>
            <div style={mediaHeading}></div>
          </div>
        </div>
      </ListItem>
  );
};

export default VideoListItem;