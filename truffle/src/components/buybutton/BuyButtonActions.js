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

        blitz.at("0xd86db945de9dfbc5d7bd2e9dac3d13218d4826d2").then(async function(instance) {

          blitzInstance = instance;
          console.log('====================================');
          console.log("Attempt to buy token.");
          console.log('====================================');
          // Attempt to buy token.
          try {
            const test = await blitzInstance;
console.log('====================================');
console.log(blitzInstance);
console.log('====================================');
            const openingTime = await blitzInstance.openingTime();
            const closingTime = await blitzInstance.closingTime();
            const rate = await blitzInstance.rate();
            const walletAddress = await blitzInstance.wallet();
            const goal = await blitzInstance.goal();
            const cap = await blitzInstance.cap();
            

            console.log("cap " + cap);
            console.log("goal " + goal);
            console.log("walletAddress " + walletAddress);  
            console.log("rate " + rate);
            console.log("closingTime " + closingTime);
            console.log("openingTime " + openingTime);
            let weiRaised2 =  await blitzInstance.weiRaised()
            
            console.log("Wei Raised  " + weiRaised2);

            let result = await blitzInstance.buyTokens(coinbase, { value:  web3.toWei(amount, "ether"), from: coinbase });

            console.log("Bought token " + result);
            let weiRaised =  await blitzInstance.weiRaised()
            
            console.log("Wei Raised  " + weiRaised);

            
            dispatch({
              type: BUY_TOKKEN_FULFILLED,
              payload: "ressult"
            });
          } catch (error) {
            console.error(error)
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
      console.error("did not work")
      dispatch({
        type: BUY_TOKKEN_REJECTED,
        payload: { error: "Web3 is not initialized." }
      });
      console.error("Web3 is not initialized.");
    }
  };
}
