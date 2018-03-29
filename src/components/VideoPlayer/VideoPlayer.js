// External Dependencies
import React from 'react';

// Internal Dependencies
import CircularIndeterminate from '../Icons/Progress';
import VideoDetail from '../VideoDetail/VideoDetail';

// Component Definition
const VideoPlayer = ({ video }) => {
  if (!video) {
    return <CircularIndeterminate />
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <iframe width="560" height="315" src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <VideoDetail video={video}/>
    </div>
  );
};

export default VideoPlayer;
