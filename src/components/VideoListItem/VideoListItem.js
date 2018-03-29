// External Dependencies
import React from 'react';
import { ListItem } from 'material-ui/List';

// Local Variables
const listGroupItem = {
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
const VideoListItem = props => {
  const { onVideoSelect, video } = props;

  // Variables
  const channelTitle = video.snippet.channelTitle;
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <ListItem style={listGroupItem} onClick={() => onVideoSelect(video)}>
      <div style={videoList}>
        <div style={mediaLeft}>
          <img style={mediaObject} src={imageUrl} />
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