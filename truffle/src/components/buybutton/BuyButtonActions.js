import BlitzCrowdsaleContract from "../../../build/contracts/BlitzCrowdsale.json";
import { browserHistory } from "react-router";
import store from "../../store";

const contract = require("truffle-contract");

export const BUY_TOKKEN_PENDING = "BUY_TOKKEN_PENDING";
export const BUY_TOKKEN_FULFILLED = "BUY_TOKKEN_FULFILLED";
export const BUY_TOKKEN_REJECTED = "BUY_TOKKEN_REJECTED";

export function buyToken(amount=1) {
  // Double-check web3's status.

  return function(dispatch) {
    dispatch({ type: BUY_TOKKEN_PENDING });
    let web3 = store.getState().web3.web3Instance;

    if (typeof web3 !== "undefined") {
      // Using truffle-contract we create the blitz object.
      const blitz = contract(BlitzCrowdsaleContract);
      blitz.setProvider(web3.currentProvider);

      // Declaring this for later so we can chain functions on Authentication.
      var blitzInstance;

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.

        if (error) {
          dispatch({ type: BUY_TOKKEN_REJECTED, payload: error });
          console.error(error);
        }

        blitz.deployed().then(async function(instance) {
          blitzInstance = instance;
          // Attempt to buy token.
          try {
            let result = await blitzInstance.buyTokens(coinbase, {
              value: web3.toWei(amount, "ether"),
              from: coinbase
            });
            console.log("Bought token " + result);
            dispatch({
              type: BUY_TOKKEN_FULFILLED,
              payload: result
            });
          } catch (error) {
            dispatch({
              type: BUY_TOKKEN_REJECTED,
              payload: {
                error: "Wallet " + coinbase + " does not have an account!"
              }
            });
          }
        });
      });
    } else {
      dispatch({
        type: BUY_TOKKEN_REJECTED,
        payload: { error: "Web3 is not initialized." }
      });
      console.error("Web3 is not initialized.");
    }
  };
}
