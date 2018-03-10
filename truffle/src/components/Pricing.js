import React, { Component } from "react";

export default class Pricing extends Component {
  render() {
    return (
      <div
        className="blitz-container blitz-center blitz-dark-grey"
        style={{padding:"60px 16px", height: "500px"}}
        id="pricing"
      >
        <h3 id="coinsLeft"> .</h3>
        <p id="price"> .</p>
        <div className="blitz-col m6" style={{marginTop:"10%", marginBottom:"5%"}}>
          <input
            type="text"
            value="0x8399d31135d5d6ea3723207fd6e66a7aee664bf4"
            id="blitz-copy"
            style={{width: "62.5%"}}
            readonly
          />
          <button
   
            style={{width: "20%", backgroundColor:"white"}}
            value="Address"
          >
            Copy Address
          </button>
        </div>
        <div className="blitz-col m6" style={{marginTop:"10%", marginBottom:"5%"}}>
          <img
            style={{height:"30%",width:"30%",position:"relative",top:"-80px"}}
            src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=0x8399d31135d5d6ea3723207fd6e66a7aee664bf4&choe=UTF-8"
          />
        </div>

        <span style={{color: "black!important", fontSize:"12px"}}>
          *Disclaimer: Please do not send any ETH to this address*<br />
        </span>
        <span style={{color: "black!important", fontSize:"12px"}}>
          *Created for the Blockstack Berlin Hackathon*
        </span>
      </div>
    );
  }
}
