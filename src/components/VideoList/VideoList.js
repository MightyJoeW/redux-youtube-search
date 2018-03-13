// External Dependencies
import React from "react";

// Internal Dependencies
import VideoListItem from "../VideoListItem/VideoListItem";

// Component Definition
const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem video={video} />;
  });

  return <ul>{videoItems}</ul>;
};

export default VideoList;
