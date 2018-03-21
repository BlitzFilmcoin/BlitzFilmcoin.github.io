import BlitzCrowdsaleContract from "../../build/contracts/BlitzCrowdsale.json";
import BlitzCrowdsaleTokenContract from "../../build/contracts/BlitzCrowdsaleToken.json";

const contract = require("truffle-contract");

export const CROWDSALE_STATS_PENDING = "CROWDSALE_STATS_PENDING";
export const CROWDSALE_STATS_FULFILLED = "CROWDSALE_STATS_FULFILLED";
export const CROWDSALE_STATS_REJECTED = "CROWDSALE_STATS_REJECTED";
export const TOKEN_STATS_PENDING = "TOKEN_STATS_PENDING";
export const TOKEN_STATS_FULFILLED = "TOKEN_STATS_FULFILLED";
export const TOKEN_STATS_REJECTED = "TOKEN_STATS_REJECTED";

export const CROWDSALE_CONTRACT_INSTANTIATED =
  "CROWDSALE_CONTRACT_INSTANTIATED";

export function instantiateCrowdsaleContract() {
  return (dispatch, getState) => {
    const web3 = getState().web3.web3Instance;
    const crowdsale = contract(BlitzCrowdsaleContract);
    crowdsale.setProvider(web3.currentProvider);
    return (
      crowdsale
        //.deployed()
        .at("0xb7e2462f5e36ba6cfffa9a6daf9ba6387a6a2525")
        .then(crowdsaleContract => {
          dispatch({
            type: CROWDSALE_CONTRACT_INSTANTIATED,
            payload: crowdsaleContract
          });
        })
    );
  };
}

export function instantiateTokenContract() {
  return (dispatch, getState) => {
    const web3 = getState().web3.web3Instance;
    const token = contract(BlitzCrowdsaleTokenContract);
    token.setProvider(web3.currentProvider);
    return (
      token
        //.deployed()
        .at("0x37b50b26900b6f3b5244e421cbb039df3fe0b39a")
        .then(tokenContract => {
          dispatch({
            type: "TOKEN_CONTRACT_INSTANTIATED",
            payload: tokenContract
          });
        })
    );
  };
}



export function getTokenStats() {
  return async function(dispatch, getState) {
    dispatch({ type: TOKEN_STATS_PENDING });
    if (typeof getState().web3.token !== "undefined") {
      let token = getState().web3.token;
      let web3 = getState().web3.web3Instance;

      let coinbase = web3.eth.coinbase;

      //Get all the stats
      try {
        const balance = await token.balanceOf(coinbase);
        const totalSupply = await token.totalSupply();
        console.log('====================================');
        console.log({
          balance: balance,
          totalSupply: totalSupply,
        });
        console.log('====================================');
        dispatch({
          type: TOKEN_STATS_FULFILLED,
          payload: {
            balance: balance,
            totalSupply: totalSupply,
          }
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: TOKEN_STATS_REJECTED,
          payload: {
            error: "TOKEN_STATS_REJECTED"
          }
        });
      }
    } else {
      console.error("did not work");
      dispatch({
        type: TOKEN_STATS_REJECTED,
        payload: { error: "Web3 is not initialized." }
      });
      console.error("Web3 is not initialized.");
    }
  };
}

export function getCrowdsaleStats() {
  return async function(dispatch, getState) {
    dispatch({ type: CROWDSALE_STATS_PENDING });
    if (typeof getState().web3.crowdsale !== "undefined") {
      let crowdsale = getState().web3.crowdsale;

      //Get all the stats
      try {
        const openingTime = await crowdsale.openingTime();
        const closingTime = await crowdsale.closingTime();
        const rate = await crowdsale.rate();
        const walletAddress = await crowdsale.wallet();
        const goal = await crowdsale.goal();
        const cap = await crowdsale.cap();
        const weiRaised = await crowdsale.weiRaised();
        const token = await crowdsale.token();

        dispatch({
          type: CROWDSALE_STATS_FULFILLED,
          payload: {
            openingTime: openingTime,
            closingTime: closingTime,
            rate: rate,
            walletAddress: walletAddress,
            goal: goal,
            cap: cap,
            weiRaised: weiRaised,
            toke: token
          }
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: CROWDSALE_STATS_REJECTED,
          payload: {
            error: "CROWDSALE_STATS_REJECTED"
          }
        });
      }
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

export function getNewStats() {
  return function(dispatch, getState) {
    dispatch({ type: CROWDSALE_STATS_PENDING });
    if (typeof getState().web3.crowdsale !== "undefined") {
      let crowdsale = getState().web3.crowdsale;
      var tokenPurchaseEvent = crowdsale.TokenPurchase();

      //Get all the stats
      tokenPurchaseEvent.watch(async function(error, result) {
        if (!error) {
          getCrowdsaleStats()(dispatch, getState);
          getTokenStats()(dispatch, getState);
        } else {
          console.log(error);
        }
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
