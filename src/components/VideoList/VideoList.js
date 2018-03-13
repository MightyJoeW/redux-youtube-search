import React from "react";
import VideoListItem from "../VideoListItem/VideoListItem";

const VideoList = props => {
  return (
    <div>
      <h1> VideoList </h1>
      <VideoListItem videos={props.videos} />
    </div>
  );
};

export default VideoList;
