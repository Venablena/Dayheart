import { combineReducers } from 'redux'

import {
  TOGGLE_OVERLAY,
  FAVORITES_FETCH_SUCCESS,
  PROVIDERS_FETCH_SUCCESS,
  FILTER_SELECTION,
  TOGGLE_FAVORITE
} from '../actions'

const PROVIDER_STATE = {
    all: [],
    filtered: [],
    favorites: {isLoaded:false, data:[]},
    currentSelection: {}
}

export const providers = (state = PROVIDER_STATE, action) => {
  switch(action.type) {
    case(PROVIDERS_FETCH_SUCCESS):
      return { ...state, all: action.payload}
    case(FAVORITES_FETCH_SUCCESS):
    case(TOGGLE_FAVORITE):
      return { ...state,
        favorites: {
          isLoaded:true, 
          data:action.payload
        }}
    case(FILTER_SELECTION):
      return { ...state, filtered: action.payload}

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
