import React, { Component } from "react";

export default class Problem extends Component {
  render() {
    return (
      <div
        className="blitz-container blitz-light-grey"
        style={{padding:"60px 16px", border:"none!important"}}
        id="The Blitz Filmcoin"
      >
        <div className="blitz-row-padding" style={{marginLeft: "20px"}}>
          <h1 style={{fontColor:"#1D2B6A"}} className="blitz-animate-top">
            The Blitz Filmcoin
          </h1>
          <div className="blitz-col m6">
            <p>
              With the Blitz FilmCoin we are starting a new era in film funding
              and production. We have created the Blitz FilmCoin which enables
              us to fund the post-production and distribution of the film. The
              coin entitles its holders to participate in the revenues which the
              film will generate throughout its entire lifecycle in a fair and
              fully transparent manner. This token framework will later be used
              to fund other independent films with a strong artistic vision,
              commercial potential and audience appeal.{" "}
            </p>
            <p style={{marginTop:"40px"}}>
              <a
                href="https://www.blitzfilm.net/"
                className="blitz-button blitz-black"
              >
                <i className="fa fa-th"> </i> More About Blitz
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
