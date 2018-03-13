import React from "react";

const VideoListItem = props => {
  return (
    <div>
      <h3> VideoListItem </h3>
      <p> {props.videos[0]} </p>
      <p> {props.videos[1]} </p>
      <p> {props.videos[2]} </p>
    </div>
  );
};

export default VideoListItem;
