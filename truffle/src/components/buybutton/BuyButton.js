import { connect } from "react-redux";
import { buyToken } from "./BuyButtonActions";

import React from "react";

const BuyButton = ({ buyToken }) => {
  return (
    <div >
      <a href="#" onClick={event => buyToken()}>
        Buy Button
      </a>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, { buyToken })(BuyButton);
