import { combineReducers } from 'redux'

import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from '../actions'

const INITIAL_STATE = []

export const auth = (state = {}, action) => {
    switch(action.type) {
        case(CREATE_USER_SUCCESS):
            const { user: { uid: userId} } = action;
            return { ...state, loggedIn: true, userId }
        case(CREATE_USER_FAIL):
            const { error } = action;
            return { ...state, loggedIn: false, error }
        default:
            return state;
    }
}

export default combineReducers({
  auth
})
