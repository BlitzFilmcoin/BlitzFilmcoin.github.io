import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div
        className="blitz-container blitz-light-grey"
        style={{padding:"60px 16px", border:"none!important"}}
        id="about"
      >
        <div className="blitz-row-padding" style={{marginLeft: "20px"}}>
          <h1 style={{fontColor:"#1D2B6A"}} className="blitz-animate-top">
            The Blitz Project
          </h1>
          <div className="blitz-col m6">
            <p>
              The Blitz Project is a documentary that accompanies artist Julius
              von Bismarck and his team to the remote region of Lake Maracaibo,
              Venezuela. This region is known for the world's highest frequency
              of thunderstorms. <br />
              <br />Here, Julius wants to create lightning sculptures and
              immortalize them via large scale photographs. The artist has
              developed rockets to shoot into the storm clouds. These rockets
              can reach a height of up to 800 meters, have an aluminum tip and
              are connected to the ground through a fine silver-coated kevlar
              thread. Bismarck’s goal is to attract lightning bolts and direct
              them straight down the line into a predetermined entry point on a
              floating platform in the middle of the lake. Julius’ goal is to
              defeat one of the greatest forces of nature is. <br />
              <br />Can this work out? The films follows this expedition with a
              scientific, philosophical and artistic mission.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
