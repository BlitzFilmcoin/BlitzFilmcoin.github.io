import { connect } from "react-redux";
import { buyToken } from "./BuyButtonActions";

import React from "react";

const BuyButton = ({ buyToken }) => {
  return (
    <li className="pure-menu-item">
      <a href="#" className="pure-menu-link" onClick={event => buyToken()}>
        Buy
      </a>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, { buyToken })(BuyButton);
