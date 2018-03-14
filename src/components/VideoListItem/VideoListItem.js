// External Dependencies
import React from 'react';
import {ListItem} from 'material-ui/List';

// Local Variables
const listGroupItem = {};
const videoList = {}
const mediaLeft = {}
const mediaObject = {}

// Component Definition
const VideoListItem = ({video}) => {
  // ES6 shorthand for taking in props and doing const video = props.video
  return (
      <ListItem style={listGroupItem}>
        <div style={videoList}>
          <div style={mediaLeft}>
            <img style={mediaObject}/>
          </div>
        </div>
      </ListItem>
  );
};

export default VideoListItem;