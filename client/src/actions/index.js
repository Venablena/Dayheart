import firebase from 'firebase'
//import 'firebase/firestore'
//var db = firebase.firestore();

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

// export const employeeCreate = ({ name, phone, shift }) => {
//   const { currentUser } = firebase.auth()
//
//   return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/employees`)
//       .push({ name, phone, shift })
//       .then(() => {
//         dispatch({ type: EMPLOYEE_CREATE })
//         Actions.pop()
//       })
//   }
// }
//
// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// });
