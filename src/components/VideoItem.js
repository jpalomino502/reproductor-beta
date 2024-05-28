import React, { useState } from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onSelectVideo, onToggleFavorite }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    if (onToggleFavorite) {
      onToggleFavorite(video.id); // Llamar a la función de toggleFavorite con el ID del video
    }
  };

  const handleSelectVideo = () => {
    onSelectVideo(video);
  };

  return (
    <div className="video-item" onClick={handleSelectVideo}>
      <div className="thumbnail">
        <img src={video.thumbnail} alt={video.title} />
      </div>
      <div className="video-details">
        <h3>{video.title}</h3>
        <p>{video.user}</p>
      </div>
      <div className="like-button">
        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={toggleLike}
        >
          ❤
        </button>
      </div>
    </div>
  );
};

export default VideoItem;
