// import * as authActions from './auth'
// // import * as searchActions from './search'
//
// export default { authActions }

import firebase from 'firebase'

export const PROVIDERS_FETCH_SUCCESS = 'PROVIDERS_FETCH_SUCCESS'
export const getProviders = () => dispatch => {
  firebase.database().ref(`/providers`)
    .once('value', snapshot => {
      dispatch({ type: PROVIDERS_FETCH_SUCCESS, payload: snapshot.val()})
    })
}

export const FAVORITES_FETCH_SUCCESS = 'FAVORITES_FETCH_SUCCESS'
export const getFavorites = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/favorites`)
      .on('value', snapshot => {
        dispatch({ type: FAVORITES_FETCH_SUCCESS, payload: snapshot.val()})
      })
  }
}

export const createUser = (email, password) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((resp) => {
        return dispatch(createUserSuccess(resp));
    })
    .catch((error) => dispatch(createUserFail));
  }
}

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const createUserSuccess = (resp) => {
    return {
        type: CREATE_USER_SUCCESS,
        user: resp,
    }
}

export const CREATE_USER_FAIL = 'CREATE_USER_FAIL'
export const createUserFail = (error) => {
    return {
        type: CREATE_USER_FAIL,
        error
    }
}
