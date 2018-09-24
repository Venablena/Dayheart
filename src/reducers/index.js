import { combineReducers } from 'redux';

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
  currentSelection: {},
}

const FAVORITE_STATE = {
  isLoaded: false,
  data: {}
}

export const providers = (state = PROVIDER_STATE, action) => {
  switch(action.type) {
    case(PROVIDERS_FETCH_SUCCESS):
      return { ...state, all: action.payload}
    case(FILTER_SELECTION):
      return { ...state, filtered: action.payload}
    default:
      return state
  }
}

export const favorites = (state = FAVORITE_STATE, action) => {
  switch(action.type) {
    case(FAVORITES_FETCH_SUCCESS):
    case(TOGGLE_FAVORITE):
      return { ...state,
        isLoaded: true,
        data: action.payload
      };
    default:
      return state;
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
  providers,
  favorites,
})
