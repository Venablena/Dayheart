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
