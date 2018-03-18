import React, { Component } from "react";
import { connect } from "react-redux";

import BuyButton from "../../components/buybutton/BuyButton";
import Stats from "../../components/stats/Stats";
import Countdown from "react-countdown-now";

class Home extends Component {
  componentDidMount() {
    //get data
  }
  render() {
    let webBool = !!this.props.web3;

    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Good to Go!</h1>
            <p>
              Check out if we can interact with our contract. Install with:{" "}
              <br />
              npm install <br />
              npm install truffle -g <br />
              truffle compile <br />
              truffle migrate<br />
              npm start<br />
            </p>

            <BuyButton />
            {webBool ? (
              <div>
                <Stats web3={this.props.web3} stats={this.props.stats} />
                {this.props.stats ? (
                  <Countdown date={this.props.stats.closingTime * 1000} />
                ) : (
                  "Stats not loaded yet."
                )}
              </div>
            ) : (
              "NOT"
            )}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    web3: state.web3.web3Instance,
    stats: state.crowdsale.stats
  };
};

export default connect(mapStateToProps, {})(Home);
