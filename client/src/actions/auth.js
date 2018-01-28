import firebase from 'firebase'

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
