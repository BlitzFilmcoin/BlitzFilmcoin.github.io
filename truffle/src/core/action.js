import BlitzCrowdsaleContract from "../../build/contracts/BlitzCrowdsale.json";
const contract = require("truffle-contract");

export const CROWDSALE_STATS_PENDING = "CROWDSALE_STATS_PENDING";
export const CROWDSALE_STATS_FULFILLED = "CROWDSALE_STATS_FULFILLED";
export const CROWDSALE_STATS_REJECTED = "CROWDSALE_STATS_REJECTED";

export const CROWDSALE_CONTRACT_INSTANTIATED = "CROWDSALE_CONTRACT_INSTANTIATED";

export function instantiateCrowdsaleContract() {
  return (dispatch, getState) => {
    const web3 = getState().web3.web3Instance;
    const crowdsale = contract(BlitzCrowdsaleContract);
    crowdsale.setProvider(web3.currentProvider);
    return crowdsale
      .at("0x01270381a82c2f6db58f823dc864eeca3bb999d6")
      .then(crowdsaleContract => {
        dispatch({
          type: CROWDSALE_CONTRACT_INSTANTIATED,
          payload: crowdsaleContract
        });
      });
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
    return  function(dispatch, getState) {
      dispatch({ type: CROWDSALE_STATS_PENDING });
      if (typeof getState().web3.crowdsale !== "undefined") {
        let crowdsale = getState().web3.crowdsale;
        var tokenPurchaseEvent = crowdsale.TokenPurchase();

        //Get all the stats
        try {
            tokenPurchaseEvent.watch(async function(error, result){
                if (!error)
                    {
                        const openingTime = await crowdsale.openingTime();
                        const closingTime = await crowdsale.closingTime();
                        const rate = await crowdsale.rate();
                        const walletAddress = await crowdsale.wallet();
                        const goal = await crowdsale.goal();
                        const cap = await crowdsale.cap();
                        const weiRaised = await crowdsale.weiRaised();
                
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
                    } else {
                        console.log(error);
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
