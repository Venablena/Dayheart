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
        dispatch({
          type: PROVIDERS_FETCH_SUCCESS,
          payload: snapshot.val()
        })
    })
  }
}

export const FAVORITES_FETCH_SUCCESS = 'FAVORITES_FETCH_SUCCESS'
export const getFavorites = (user) => (dispatch) => {
  console.log('actions user:', user);
    return firebase.database().ref(`/users/zgYMtraKd5OPZRXeciWPv85uc3L2/favorites`)
      .once('value', snapshot => {
        const result = snapshot.val()
        //if(result){
        // return result.map(item => {
        //   return firebase.database().ref(`providers/${item}`).on('value', snapshot => snapshot.val())
        // })
        dispatch({
          type: FAVORITES_FETCH_SUCCESS,
          payload: result
        })
      //}
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
    firebase.database().ref(`/users/zgYMtraKd5OPZRXeciWPv85uc3L2/favorites`)
      .set(value)
      .then(() => {
         dispatch({
            type: TOGGLE_FAVORITE,
            payload: value
          })
    })
  }
}

// export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
// export const removeFavorite = (user, value) => ({
//   type: REMOVE_FAVORITE,
//   payload: value
// })
