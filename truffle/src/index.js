import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import getWeb3 from './util/web3/getWeb3'
import getCrowdsaleStats  from './action'
// Layouts
import App from './App'
import Home from './layouts/home/Home'


// Redux Store
import store from './store'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!')
  getCrowdsaleStats(results.payload.web3Instance)
})
.catch((err) => {
  console.log('====================================');
  console.log(err);
  console.log('====================================');
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />

        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
