import { keyBy } from 'lodash';

export const getFavoritesById = (state => {
  return {
    ...state,
    favoritesById: keyBy(state.dayheart.providers.favorites.data)
  }
})

export const getAllFavorites = (state => state.dayheart.providers.favorites.data)

export const favoritesAreLoaded = (state => state.dayheart.providers.favorites.isLoaded)
