// External Dependencies
import React from 'react';
import List from 'material-ui/List';

// Internal Dependencies
import VideoListItem from '../VideoListItem/VideoListItem';

// Component Definition
const VideoList = props => {
  //Destructured props
  const { onVideoSelect, videos } = props;

  const videoItems = videos.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        onVideoSelect={onVideoSelect}
        video={video}
      /> //got etag from console. Network, then clicked on the youtube search then items
    )
  });

  return <List>{videoItems}</List>;
};

export default VideoList;