import { combineReducers } from 'redux'
//import providers from './providers'

import {
  TOGGLE_OVERLAY,
  FAVORITES_FETCH_SUCCESS,
  PROVIDERS_FETCH_SUCCESS,
} from '../actions'

const PROVIDER_STATE = {
    all: [],
    filtered: [],
    favorites: [],
    currentSelection: {}
}

export const providers = (state = PROVIDER_STATE, action) => {
  switch(action.type) {
    case(PROVIDERS_FETCH_SUCCESS):
      return { ...state, all: action.payload}
    case(FAVORITES_FETCH_SUCCESS):
      return { ...state, favorites: action.payload}
    default:
      return state
  }
}

export const toggleOverlay = (state = false, action) => {
  switch(action.type) {
    case(TOGGLE_OVERLAY):
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  toggleOverlay,
  providers
})
