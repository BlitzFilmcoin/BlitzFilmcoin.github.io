const initialState = {
  web3Instance: null,
  crowdsale: null,
  token: null
};

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "WEB3_INITIALIZED": {
      return Object.assign({}, state, {
        web3Instance: action.payload.web3Instance
      });
    }
    case "CROWDSALE_CONTRACT_INSTANTIATED": {
      return Object.assign({}, state, {
        crowdsale: action.payload
      });
    }
    case "TOKEN_CONTRACT_INSTANTIATED": {
      return Object.assign({}, state, {
        token: action.payload
      });
    }
    
    default:
      return state;
  }
};

export default web3Reducer;
