import React from "react";
import "./PlaylistPage.css";

export default ({ playlist }) => (
  <div>
    <p className="headline" style={{ color: "Black" }}>
      Tech talks
    </p>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/videoseries?list=PLW-NZsw8bcdJQEcYyTEQNTTnY775l_yW0" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen title="Tech talks" className="video">
      </iframe>
    </div>
  </div>
);
