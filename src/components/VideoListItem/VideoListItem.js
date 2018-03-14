// External Dependencies
import React from "react";

// Local Variables
const listGroupItem = {};
const videoList = {

}

// Component Definition
const VideoListItem = ({video}) => {
  // ES6 shorthand for taking in props and doing const video = props.video
  return (
      <li style={listGroupItem}>
        <div style={videoList}>
          <div style={media-Left}>
            <img style={mediObject}/>
          </div>
        </div>
      </li>
  );
};

export default VideoListItem;