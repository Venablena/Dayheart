import firebase from 'firebase'

export const PROVIDERS_FETCH_SUCCESS = 'PROVIDERS_FETCH_SUCCESS'
export const getProviders = () => (dispatch, getState) => {
  if (getState().dayheart.providers.length) {
    dispatch({
      type: PROVIDERS_FETCH_SUCCESS,
      payload: getState().dayheart.providers
    })
  } else {
    firebase.database().ref(`/providers`)
      .once('value', snapshot => {
        dispatch({ type: PROVIDERS_FETCH_SUCCESS, payload: snapshot.val()})
    })
  }
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

export const FILTER_SELECTION = 'FILTER_SELECTION'
export const filterSelection = (value) => {
  console.log(value)
    return ({
    type: FILTER_SELECTION,
    payload: value
  })
}

export const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY'
export const toggleOverlay = (value) => ({
  type: TOGGLE_OVERLAY,
  payload: value
})
