const initialState = {
  bought: null,
  stats: {}
};

export const BUY_TOKKEN_PENDING = "BUY_TOKKEN_PENDING";
export const BUY_TOKKEN_FULFILLED = "BUY_TOKKEN_FULFILLED";
export const BUY_TOKKEN_REJECTED = "BUY_TOKKEN_REJECTED";

export const CROWDSALE_STATS_PENDING = "CROWDSALE_STATS_PENDING";
export const CROWDSALE_STATS_FULFILLED = "CROWDSALE_STATS_FULFILLED";
export const CROWDSALE_STATS_REJECTED = "CROWDSALE_STATS_REJECTED";

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
    case CROWDSALE_STATS_PENDING: {
      return state;
    }
    case CROWDSALE_STATS_REJECTED: {
      return state;
    }
    case CROWDSALE_STATS_FULFILLED: {
      return Object.assign({}, state, {
        stats: action.payload
      });
    }
    default:
      return state;
  }
};

export default crowdsaleReducer;
