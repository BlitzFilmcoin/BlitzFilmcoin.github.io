import React, { Component } from "react";

export default class Statistics extends Component {
  render() {
    return (
      <div className="blitz-container blitz-row blitz-center blitz-dark-grey blitz-padding-64">
        <div className="blitz-quarter">
          <span className="blitz-xxlarge blitz-animate-opacity">600,000 €</span>
          <br />Production and Distribution Budget
        </div>
        <div className="blitz-quarter">
          <span className="blitz-xxlarge blitz-animate-opacity">1,000,000</span>
          <br />Estimated Audience Target
        </div>
        <div className="blitz-quarter">
          <span className="blitz-xxlarge blitz-animate-opacity">Jan. 2019</span>
          <br />Date of Completion
        </div>
        <div className="blitz-quarter">
          <span className="blitz-xxlarge blitz-animate-opacity">
            20,000,000 €
          </span>
          <br />Median 2017 Top 20 Independent Film Revenue
        </div>
      </div>
    );
  }
}
