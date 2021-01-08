import React from "react";
import "./PlaylistPage.css";

export default ({ link, title }) => (
  <div>
    <p className="headline" style={{ color: "Black" }}>
      {title}
    </p>
    <div className="video-container">
      <iframe src={link} frameBorder="0" allowFullScreen title={title} className="video">
      </iframe>
    </div>
  </div>
);
