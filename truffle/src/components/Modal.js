import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div
        id="modal01"
        className="blitz-modal blitz-black"
    
      >
        <span
          className="blitz-button blitz-xxlarge blitz-black blitz-padding-large blitz-display-topright"
          title="Close Modal Image"
        >
          ×
        </span>
        <div className="blitz-modal-content blitz-animate-zoom blitz-center blitz-transparent blitz-padding-64">
          <img id="img01" className="blitz-image" />
          <p id="caption" className="blitz-opacity blitz-large" />
        </div>
      </div>
    );
  }
}
