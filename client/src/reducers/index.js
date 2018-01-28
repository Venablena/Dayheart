import { combineReducers } from 'redux'

import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  PROVIDERS_FETCH_SUCCESS
} from '../actions'

const INITIAL_STATE = []

export const providers = (state = {}, action) => {
  switch(action.type) {
    case(PROVIDERS_FETCH_SUCCESS):
    return { ...state, providers: action.payload}
  }
}

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
  auth,
  providers
})
