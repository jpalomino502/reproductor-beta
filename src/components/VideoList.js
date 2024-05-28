import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = ({ videos, emptyHeading, onSelectVideo }) => {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "Videos" : "Video";
    heading = count + " " + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onSelectVideo={onSelectVideo} />
      ))}
    </section>
  );
};

export default VideoList;
