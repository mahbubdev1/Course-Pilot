'use client'
import React, { useState } from "react";

const VideoPlayer = () => {
  // ভিডিওগুলোর লিস্ট
  const videoList = [
    "https://www.youtube.com/embed/BZeXxwAEw-0",
    "https://www.youtube.com/embed/I0xBb80JbHk",
    "https://www.youtube.com/embed/nLz7AbxtdmY",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  // Next Button Function
  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoList.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <iframe
        width="640"
        height="360"
        src={videoList[currentVideo]}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        key={videoList[currentVideo]}
      ></iframe>
      <br />
      <button onClick={nextVideo} style={{ marginTop: "10px", padding: "10px", fontSize: "16px" }}>
        Next ▶
      </button>
    </div>
  );
};

export default VideoPlayer;