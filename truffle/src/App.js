import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { getCrowdsaleStats } from "./action";
class App extends Component {
  componentDidMount() {
    // Initialize web3 and set in Redux.
    this.props.getCrowdsaleStats();

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

export default connect(mapStateToProps, { getCrowdsaleStats })(App);
