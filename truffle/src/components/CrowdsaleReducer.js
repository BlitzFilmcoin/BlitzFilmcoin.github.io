const initialState = {
  bought: null
};

export const BUY_TOKKEN_PENDING = "BUY_TOKKEN_PENDING";
export const BUY_TOKKEN_FULFILLED = "BUY_TOKKEN_FULFILLED";
export const BUY_TOKKEN_REJECTED = "BUY_TOKKEN_REJECTED";

const crowdsaleReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_TOKKEN_PENDING: {
      return state;
    }
    case BUY_TOKKEN_REJECTED: {
      return state;
    }
    case BUY_TOKKEN_FULFILLED: {
      return Object.assign({}, state, {
        bought: action.payload
      });
    }
    default:
      return state;
  }
};

export default crowdsaleReducer;
