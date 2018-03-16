import React, { Component } from 'react'
import { Link } from 'react-router'


class App extends Component {
  render() {


    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list navbar-right">

          </ul>
          <Link to="/" className="pure-menu-heading pure-menu-link">Truffle Box</Link>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

export default App
