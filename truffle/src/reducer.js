import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import web3Reducer from './util/web3/web3Reducer'
import crowdsaleReducer from './components/CrowdsaleReducer'



const reducer = combineReducers({
  routing: routerReducer,
  crowdsale: crowdsaleReducer,
  web3: web3Reducer
})

export default reducer
