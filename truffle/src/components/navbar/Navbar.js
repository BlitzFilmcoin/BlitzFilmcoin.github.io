import React from "react";

const Navbar = () => {
  return (
    <div className="blitz-top">
      <div className="blitz-bar blitz-white blitz-card" id="myNavbar">
        <a href="#home" className="blitz-bar-item blitz-button blitz-wide">
          BLITZ PROJECT
        </a>
        {/* Right-sided navbar links */}
        <div className="blitz-right blitz-hide-small">
          <a href="#about" className="blitz-bar-item blitz-button">
            <i className="fa fa-youtube-play" /> ABOUT
          </a>
          <a href="#film" className="blitz-bar-item blitz-button">
            <i className="fa fa-camera-retro" /> WATCH
          </a>
          <a href="#team" className="blitz-bar-item blitz-button">
            <i className="fa fa-user" /> TEAM
          </a>
          <a href="#problem" className="blitz-bar-item blitz-button">
            <i className="fa fa-film" /> THE BLITZ FILMCOIN
          </a>
          <a href="#work" className="blitz-bar-item blitz-button">
            <i className="fa fa-th" /> HOW DOES IT WORK
          </a>

          <a href="#pricing" className="blitz-bar-item blitz-button">
            <i className="fa fa-usd" /> SUPPORT
          </a>
        </div>
        {/* Hide right-floated links on small screens and replace them with a menu icon */}

        <a
          href="javascript:void(0)"
          className="blitz-bar-item blitz-button blitz-right blitz-hide-large blitz-hide-medium"
        
        >
          <i className="fa fa-bars" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
