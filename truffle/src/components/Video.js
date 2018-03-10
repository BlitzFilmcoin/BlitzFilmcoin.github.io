import React, { Component } from "react";

export default class Video extends Component {
  render() {
    return (
      <div
        className="blitz-container"
        align="middle"
        style={{padding:"80px 16px"}}
        id="film"
      >
        <div className="video-wrapper">
          <iframe
            className="embed-container"
            style={{border:"none!important"}}
            src="https://player.vimeo.com/video/203098041"
            width="80%"
            height="500"
            webkitallowfullscreen
            allowfullscreen
          />'
        </div>
      </div>
    );
  }
}
