import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
// Layouts
import App from './containers/App'
import Home from './containers/home/Home'


// Redux Store
import store from './core/store'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)



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
