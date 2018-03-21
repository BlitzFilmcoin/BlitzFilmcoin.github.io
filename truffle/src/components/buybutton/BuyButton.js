import { connect } from "react-redux";
import { buyToken } from "./BuyButtonActions";
import { Button } from "semantic-ui-react";

import React from "react";

const BuyButton = ({ buyToken }) => {
  return (
    <Button
      size="huge"
      style={{ backgroundColor: "#d45c54", color: "white" }}
      onClick={event => buyToken()}
    >
      Buy Blitz Token!
    </Button>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, { buyToken })(BuyButton);
