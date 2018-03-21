import React, { Component } from "react";
import { connect } from "react-redux";
import {Doughnut} from 'react-chartjs-2';

import BuyButton from "../../components/buybutton/BuyButton";
import Stats from "../../components/stats/Stats";
import Countdown from "react-countdown-now";
import { getCrowdsaleStats } from '../../core/action'
class Home extends Component {
  render() {
    let webBool = !!this.props.web3;
    let hasStats = !!this.props.stats;
    const data = {
        labels: [
          'You',
            'Raised',
            'Goal',
            'Cap'
        ],
        datasets: [{
            data: [this.props.tokenStats,this.props.stats.weiRaised-this.props.tokenStats, (this.props.stats.cap-this.props.stats.goal), (this.props.stats.goal-this.props.stats.weiRaised)],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4842f4',

            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4842f4',

            ]
        }]
    };
    
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
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
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    web3: state.web3.web3Instance,
    stats: state.crowdsale.stats,
    tokenStats: state.crowdsale.token
  };
};

export default connect(mapStateToProps, { getCrowdsaleStats })(Home);
