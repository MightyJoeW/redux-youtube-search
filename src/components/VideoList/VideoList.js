// External Dependencies
import React from "react";

// Internal Dependencies
import VideoListItem from "../VideoListItem/VideoListItem";

// Component Definition
const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem key={video.etag} video={video} />; //got etag from console. Network, then clicked on the youtube search then items
  });

  return <ul>{videoItems}</ul>;
};

export default VideoList;
