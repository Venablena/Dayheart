import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

//Firebase for auth and login
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import { firebaseConfig } from './config.js';

//style
import 'semantic-ui-css/semantic.min.css';

//My reducers:
import reducers from './reducers';

//Initialize Firebase
firebase.initializeApp(firebaseConfig)
const config = {
  userProfile: 'users'
};

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config),
)(createStore);

//Add Firebase to reducers
const rootReducer = combineReducers({
  dayheart: reducers,
  firebase: firebaseReducer,
});

//Create store with reducers, initial state and middleware
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleWare,
    logger
  )
);
//WHAT IS THIS HERE FOR?
// store.dispatch()
ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
