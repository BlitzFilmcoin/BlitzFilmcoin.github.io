import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <div
        className="blitz-container blitz-white"
        style={{padding:"60px 16px"}}
        id="work"
      >
        <h3 className="blitz-center">How Does It Work?</h3>
        <p className="blitz-center blitz-large">
          The Blitz FilmCoin allows you to participate in the funding of and
          entitles you to the future revenues of the Blitz film
        </p>

        <div className="blitz-row-padding" style={{marginTop:"40px"}}>
          <div className="blitz-col l3 m6 blitz-center">
            <i className="fa fa-money" style={{fontSize:"40px"}} />
          </div>
          <div className="blitz-col l3 m6 blitz-center">
            <i
              className="fa fa-circle-o-notch fa-spin"
              style={{fontSize:"40px"}}
            />
          </div>
          <div className="blitz-col l3 m6 blitz-center">
            <i className="fa fa-play" style={{fontSize:"40px"}} />
          </div>
          <div className="blitz-col l3 m6 blitz-center">
            <i className="fa fa-line-chart" style={{fontSize:"40px"}} />
          </div>
        </div>
      </div>
    );
  }
}
