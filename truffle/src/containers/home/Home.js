import React, { Component } from "react";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";

import BuyButton from "../../components/buybutton/BuyButton";
import Stats from "../../components/stats/Stats";
import Countdown from "react-countdown-now";
import { getCrowdsaleStats } from "../../core/action";

import AppBar from "material-ui/AppBar";

class Home extends Component {
  render() {
    let webBool = !!this.props.web3;
    let hasStats = !!this.props.stats;
    const data = {
      labels: ["Raised", "Goal", "Cap"],
      datasets: [
        {
          data: [
            this.props.stats.weiRaised,
            this.props.stats.cap - this.props.stats.goal,
            this.props.stats.goal - this.props.stats.weiRaised
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };

    return (
      <main className="container">
        <AppBar title="My AppBar" />

        <h1>Good to Go!</h1>

        <Doughnut data={data} />

        <BuyButton />
        {webBool ? (
          <div>
            <Stats web3={this.props.web3} stats={this.props.stats} />
            {hasStats ? (
              <Countdown date={this.props.stats.closingTime * 1000} />
            ) : (
              "Stats not loaded yet."
            )}
          </div>
        ) : (
          "NOT"
        )}
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

export default connect(mapStateToProps, { getCrowdsaleStats })(Home);
