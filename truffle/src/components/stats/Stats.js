import { connect } from "react-redux";
import { getCrowdsaleStats } from "../../action";

import React, { Component } from "react";

class Stats extends Component {
  componentWillMount = () => {
    //this.props.getCrowdsaleStats(this.props.web3);
  };

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

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, { getCrowdsaleStats })(Stats);
