import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import Container from "./components/Container";
import YouTube from "react-youtube";
import { Lumiflex } from "uvcanvas";
import "./App.css";

const videosData = [
  {
    id: 1,
    title:
      "La IA lo cambia TODO | Lo que deberías saber sobre la Inteligencia Artificial",
    description: "Nate Gentile.",
    videoId: "bOQjgy1PhUg",
    thumbnail: "thumbnail1.jpg",
  },
  {
    id: 2,
    title: "Cómo Steve Jobs ARRUINÓ su vida (Y suplicó para volver a Apple)",
    description: "Nate Gentile.",
    videoId: "cYoF-NuKanQ",
    thumbnail: "thumbnail2.jpg",
  },
  {
    id: 3,
    title: "Elon Musk, Twitter y el problema REAL de las redes sociales",
    description: "Nate Gentile.",
    videoId: "rGzMHuF3_LI",
    thumbnail: "thumbnail1.jpg",
  },
  {
    id: 4,
    title:
      "¿Cómo funciona Counter Strike 2 por dentro? (Y porque tardaron tanto en hacerlo...)",
    description: "Nate Gentile.",
    videoId: "ryRa61jNiso",
    thumbnail: "thumbnail2.jpg",
  },
];

function App() {
  const [videos, setVideos] = useState(videosData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredVideos = videosData.filter((video) =>
      video.title.toLowerCase().includes(term.toLowerCase())
    );
    setVideos(filteredVideos);
  };

  return (
    <div className="App">
      <Lumiflex className="Lumiflex" />
      <div className="content">
        <Container>
          <Header />
          <SearchBar onSearch={handleSearch} />
          {selectedVideo && (
            <div className="selected-video">
              <h2>{selectedVideo.title}</h2>
              <YouTube
                videoId={selectedVideo.videoId}
                opts={{ width: "100%", height: "390" }}
              />
              <p>{selectedVideo.description}</p>
            </div>
          )}
          <VideoList
            videos={videos}
            emptyHeading="No videos available"
            onSelectVideo={setSelectedVideo}
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
