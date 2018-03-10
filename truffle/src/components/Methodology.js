import React, { Component } from "react";

export default class Methodology extends Component {
  render() {
    return (
      <div className="blitz-row-padding" style={{marginLeft:"2.5%", marginRight:"3%"}}>
        <div className="blitz-col m6" style={{marginTop:"5%"}}>
          <p>
            <b>We've made it easy for you to purchase Blitz FilmCoin</b>
          </p>
          <p>
            <u>Step 1:</u>
            <br />Pay with Ethereum and receive FilmCoin.
          </p>
          <p>
            <u>Step 2:</u>
            <br />Wait for the campaign to meet a minimum threshold while your
            Ethereum is securely held.
          </p>
          <p>
            <u>Step 3:</u>
            <br />If the threshold is met, then the film will go into
            production, and you will be rewarded Ethereum depending on the
            amount of Blitz FilmCoin you hold when the film begins to gross.
            However if the threshold is not met, rest assured! Your funds will
            be returned right back to you.
          </p>
        </div>
        <div
          className="blitz-col m6 blitz-center"
          style={{marginTop:"5%", fontFamily:"'Lato'!important"}}
        >
          <p style={{textAlign:"center"}}>Time until end of coin sale</p>
          <div
            id="daanclock"
            className="blitz-center blitz-clock-background blitz-clock"
            style={{fontFamily:"'Lato'",width:"200px", height:"25px", position:"relative", left:"157px", zIndex:5, top:"50%"}}
          />
          <div style={{position:"relative",left: "100px", top: "-5px", zIndex:0}}>
            <div
              id="piechart"
              className="blitz-center"
              style={{width: "300px", height: "300px"}}
            />
          </div>
        </div>
      </div>
    );
  }
}
