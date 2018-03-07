import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import logger from 'redux-logger'
import thunkMiddleWare from 'redux-thunk'

//Firebase for auth and login
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import { firebaseConfig } from './config.js'

//Firestore for database
// import 'firebase/firestore'
// import { reduxFirestore, firestoreReducer } from 'redux-firestore'

//style
import 'semantic-ui-css/semantic.min.css'

//My reducers:
import reducers from './reducers'

//Initialize Firebase
firebase.initializeApp(firebaseConfig)
const config = {
  userProfile: 'users'
}
//firebase.firestore()
//Add FireStore to the store
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config),
  // reduxFirestore(firebase)
)(createStore)

//Add Firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  dayheart: reducers
})

//Create store with reducers, initial state and middleware
const initialState = {}
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
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
