import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleWare from 'redux-thunk'
//My reducers and actions:
// import reducers from './reducers'
// import { fetchMessages } from './actions'

const store = createStore(
  () => {},
  applyMiddleware(
    thunkMiddleWare,
    logger
  )
)

// store.dispatch()

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
