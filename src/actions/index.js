import firebase from 'firebase'

//only load providers if they are not already cached
//this works because we only have one dataset of providers that doesn't currently change
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
        dispatch({
          type: PROVIDERS_FETCH_SUCCESS,
          payload: snapshot.val()
        })
    })
  }
}

export const FAVORITES_FETCH_SUCCESS = 'FAVORITES_FETCH_SUCCESS'
export const getFavorites = (user) => (dispatch) => {
  return firebase.database().ref(`/users/${user}/favorites`)
    .once('value', snapshot => {
      console.log('from Firebase:', snapshot.val());
      dispatch({
        type: FAVORITES_FETCH_SUCCESS,
        payload: snapshot.val()||{}
      })
  })
}

export const FILTER_SELECTION = 'FILTER_SELECTION'
export const filterSelection = (value) => ({
  type: FILTER_SELECTION,
  payload: value
})

export const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY'
export const toggleOverlay = (value) => ({
  type: TOGGLE_OVERLAY,
  payload: value
})

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const toggleFavorite = (user, value) => {
  return (dispatch) => {
    firebase.database().ref(`/users/${user}/favorites`)
      .set(value)
      .then(() => {
         dispatch({
            type: TOGGLE_FAVORITE,
            payload: value
          })
    })
  }
}
