import BlitzCrowdsaleContract from "../build/contracts/BlitzCrowdsale.json";
import { browserHistory } from "react-router";
import store from "./store";

const contract = require("truffle-contract");

export const CROWDSALE_STATS_PENDING = "CROWDSALE_STATS_PENDING";
export const CROWDSALE_STATS_FULFILLED = "CROWDSALE_STATS_FULFILLED";
export const CROWDSALE_STATS_REJECTED = "CROWDSALE_STATS_REJECTED";

export function getCrowdsaleStats(web3) {
  // Double-check web3's status.
  console.log( web3);

  return function(dispatch) {
    dispatch({ type: CROWDSALE_STATS_PENDING });
    console.log( web3);

    if (typeof web3 !== "undefined") {
console.log('====================================');
console.log( web3);
console.log('====================================');      // Using truffle-contract we create the blitz object.
      const blitz = contract(BlitzCrowdsaleContract);

      blitz.setProvider(web3.currentProvider);

      // Declaring this for later so we can chain functions on Authentication.
      var blitzInstance;

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.

        if (error) {
          dispatch({ type: CROWDSALE_STATS_REJECTED, payload: error });
          console.error(error);
        }
console.log('====================================');
console.log(process.env.CROWDSALE_CONTRACT_ADDRESS);
console.log('====================================');
        blitz
          .at("0x79bb8c52dcbd88f1565899f9ebc63fe5a0ffddc1")
          .then(async function(instance) {
            blitzInstance = instance;
            console.log("====================================");
            console.log("Getting crowdsale stats.");
            console.log("====================================");
            // Attempt to buy token.
            try {
              const openingTime = await blitzInstance.openingTime();
              const closingTime = await blitzInstance.closingTime();
              const rate = await blitzInstance.rate();
              const walletAddress = await blitzInstance.wallet();
              const goal = await blitzInstance.goal();
              const cap = await blitzInstance.cap();
              const weiRaised = await blitzInstance.weiRaised();

              console.log("cap " + cap);
              console.log("goal " + goal);
              console.log("walletAddress " + walletAddress);
              console.log("rate " + rate);
              console.log("closingTime " + closingTime);
              console.log("openingTime " + openingTime);
              console.log("Wei Raised  " + weiRaised);

              dispatch({
                type: CROWDSALE_STATS_FULFILLED,
                payload: {
                  openingTime: openingTime,
                  closingTime: closingTime,
                  rate: rate,
                  walletAddress: walletAddress,
                  goal: goal,
                  cap: cap,
                  weiRaised: weiRaised
                }
              });
            } catch (error) {
              console.error(error);
              dispatch({
                type: CROWDSALE_STATS_REJECTED,
                payload: {
                  error: "Wallet " + coinbase + " does not have an account!"
                }
              });
            }
          });
      });
    } else {
      console.error("did not work");
      dispatch({
        type: CROWDSALE_STATS_REJECTED,
        payload: { error: "Web3 is not initialized." }
      });
      console.error("Web3 is not initialized.");
    }
  };
}
