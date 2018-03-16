import React, { Component } from "react";
import BuyButton from "../../components/buybutton/BuyButton";
class Home extends Component {
  componentDidMount(){
    //get data
  }
  render() {
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
            <p>
              <BuyButton />
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
