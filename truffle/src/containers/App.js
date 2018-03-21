import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import {
  getCrowdsaleStats,
  instantiateCrowdsaleContract,
  getNewStats
} from "../core/action";
import getWeb3 from "../core/util/web3/getWeb3";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class App extends Component {
  componentDidMount() {
    // Initialize web3 and set in Redux.
    getWeb3
      .then(async results => {
        console.log("Web3 initialized!");
        await this.props.instantiateCrowdsaleContract();
        await this.props.getCrowdsaleStats();
        await this.props.getNewStats();
      })
      .catch(err => {
        console.log("Error in web3 initialization.");
        console.log(err);
      });
  }
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                {this.props.children}

      </MuiThemeProvider>
       );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, {
  getCrowdsaleStats,
  instantiateCrowdsaleContract,
  getNewStats
})(App);
