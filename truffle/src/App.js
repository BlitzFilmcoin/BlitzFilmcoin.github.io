import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { getCrowdsaleStats, instantiateCrowdsaleContract } from "./action";
import getWeb3 from "./util/web3/getWeb3";

class App extends Component {
  componentDidMount() {
    // Initialize web3 and set in Redux.
    getWeb3
      .then(async results => {
        console.log("Web3 initialized!");
        await this.props.instantiateCrowdsaleContract()
        await this.props.getCrowdsaleStats()
      })
      .catch(err => {
        console.log("Error in web3 initialization.");
        console.log(err);        
      });
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list navbar-right" />
          <Link to="/" className="pure-menu-heading pure-menu-link">
            Truffle Box
          </Link>
        </nav>

        {this.props.children}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, { getCrowdsaleStats, instantiateCrowdsaleContract })(App);
