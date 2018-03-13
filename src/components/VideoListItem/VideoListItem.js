import React from "react";

const VideoListItem = props => {
  return (
    <div>
      <h3> VideoListItem </h3>
      <p> {props.list[0]} </p>
      <p> {props.list[1]} </p>
      <p> {props.list[2]} </p>
    </div>
  );
};

export default VideoListItem;
