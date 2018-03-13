import React from "react";
import VideoListItem from "../VideoListItem/VideoListItem";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem video={video} />;
  });

  return <ul>{videoItems}</ul>;
};

export default VideoList;
