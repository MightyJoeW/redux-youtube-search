// External Dependencies
import React from 'react';
import { ListItem } from 'material-ui/List';

// Local Variables
const listGroupItem ={
  cursor: 'pointer'
};
const videoList = {
  display: 'flex',
};
const mediaLeft = {
  marginRight: '1em'
};
const mediaObject = {};
const mediaBody = {};
const mediaHeading = {
  fontSize: '0.8em',
  fontWeight: 700
};
const mediaChannel = {
  color: '#8A8A8A',
  fontSize: '0.7em'
}

// Component Definition
const VideoListItem = ({video}) => {
  // ES6 shorthand for taking in props and doing const video = props.video
  const channelTitle = video.snippet.channelTitle;
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  console.log(video);
  return (
      <ListItem style={listGroupItem}>
        <div style={videoList}>
          <div style={mediaLeft}>
            <img style={mediaObject} src={imageUrl}/>
          </div>
          <div style={mediaBody}>
            <div style={mediaHeading}>{title}</div>
            <div style={mediaChannel}>{channelTitle}</div>
          </div>
        </div>
      </ListItem>
  );
};

export default VideoListItem;