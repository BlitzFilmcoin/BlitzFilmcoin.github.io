import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="blitz-center blitz-padding-64" style={{marginTop:"7%"}}>
        <a href="#home" className="blitz-button blitz-light-grey">
          Blockstack Admin Interface
        </a>
        <div className="blitz-xlarge blitz-section">
          <a href="https://www.facebook.com/leeholim">
            <i className="fa fa-facebook-official blitz-hover-opacity" />
          </a>
          <a href="https://www.instagram.com/drinkbananawave/">
            <i className="fa fa-instagram blitz-hover-opacity" />
          </a>
          <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
            <i className="fa fa-pinterest-p blitz-hover-opacity" />
          </a>
          <a href="https://github.com/BlitzFilmcoin/">
            <i className="fa fa-github blitz-hover-opacity" />
          </a>
          <a href="https://twitter.com/LimLeeho">
            <i className="fa fa-twitter blitz-hover-opacity" />
          </a>
          <a href="https://www.linkedin.com/in/leeholim/">
            <i className="fa fa-linkedin blitz-hover-opacity" />
          </a>
        </div>
      </footer>
    );
  }
}
