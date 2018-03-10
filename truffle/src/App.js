import React, { Component } from "react";
import { Link } from "react-router";
import { HiddenOnlyAuth, VisibleOnlyAuth } from "./util/wrappers.js";

// UI Components
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Video from "./components/Video";
import Team from "./components/Team";
import Problem from "./components/Problem";
import Statistics from "./components/Statistics";
import Work from "./components/Work";
import Modal from "./components/Modal";
import Methodology from "./components/Methodology";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

// Styles
import "./css/oswald.css";
import "./css/open-sans.css";
import "./css/pure-min.css";
import "./App.css";

class App extends Component {
  render() {
    

    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Video />
        <Team />
        <Problem />
        <Statistics />
        <Work />
        <Modal />
        <Methodology />
        <Pricing />
        <Footer />

        {this.props.children}
      </div>
    );
  }
}

export default App;
