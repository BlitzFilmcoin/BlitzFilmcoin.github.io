import React, { Component } from "react";

import lightning from "../img/lightning.jpg";

export default class Header extends Component {
  render() {
    return (
      <header
        className="blitz-display-container blitz-grayscale-min"
        id="home"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: lightning,
          minHeight: "100%"
      }}
      >
        <div
          className="blitz-display-left blitz-text-white"
          style={{padding:"48px"}}
        >
          <span className="blitz-jumbo blitz-hide-small blitz-animate-top2">
            Blitz FilmCoin
          </span>
          <br />

          <p className="ml6">
            <span className="text-wrapper" style={{marginLeft: "2px"}}>
              <span className="letters blitz-animate-top">
                A coin to fund the post-production and <br /> distribution of
                the Blitz Project
              </span>
            </span>
          </p>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" />

          <p>
            <a
              href="#pricing"
              className="blitz-button blitz-white blitz-padding-large blitz-large blitz-margin-top blitz-opacity blitz-hover-opacity-off"
            >
              Purchase coins
            </a>
          </p>
        </div>
      </header>
    );
  }
}
