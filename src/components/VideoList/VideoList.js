import React from "react";
import VideoListItem from "../VideoListItem/VideoListItem";

const VideoList = props => {
  return (
    <div>
      <h1> VideoList </h1>
      <VideoListItem list={props.list} />
    </div>
  );
};

export default VideoList;
