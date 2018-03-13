import React from "react";

const listStyle = {};

const VideoListItem = props => {
  return (
    <div>
      <h3> VideoListItem </h3>
      <ul>{props.videos.length}</ul>
    </div>
  );
};

export default VideoListItem;
