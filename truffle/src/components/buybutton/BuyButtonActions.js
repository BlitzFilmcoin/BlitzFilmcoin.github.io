
export const BUY_TOKKEN_PENDING = "BUY_TOKKEN_PENDING";
export const BUY_TOKKEN_FULFILLED = "BUY_TOKKEN_FULFILLED";
export const BUY_TOKKEN_REJECTED = "BUY_TOKKEN_REJECTED";

export function buyToken(amount = 1) {
  // Double-check web3's status.

  return async function(dispatch, getState) {
    dispatch({ type: BUY_TOKKEN_PENDING });
    let crowdsale = getState().web3.crowdsale;
    let web3 = getState().web3.web3Instance;
    try {
      let coinbase = web3.eth.coinbase;

      let result = await crowdsale.buyTokens(coinbase, {
        value: web3.toWei(amount, "ether"),
        from: coinbase
      });

      dispatch({
        type: BUY_TOKKEN_FULFILLED,
        payload: result
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: BUY_TOKKEN_REJECTED,
        payload: {
          error: "BUY_TOKKEN_REJECTED"
        }
      });
    }
  };
}
