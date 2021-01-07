import React from "react";
import "./PlaylistPage.css";

export default ({ playlist }) => (
  <div>
    <p className="headline" style={{ color: "Black" }}>
      Tech Talks (RU)
    </p>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/videoseries?list=PLW-NZsw8bcdJQEcYyTEQNTTnY775l_yW0" frameBorder="0" allowFullScreen title="Tech talks" className="video">
      </iframe>
    </div>
  </div>
);
