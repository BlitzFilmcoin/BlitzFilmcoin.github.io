import React, { Component } from "react";

class Stats extends Component {
  render() {
    return (
      <div>
        ############
        <p>
          {!!this.props.stats
            ? JSON.stringify(this.props.stats)
            : "Stats not loaded yet."}
        </p>
        ############
      </div>
    );
  }
}

export default Stats;
