import { keyBy } from 'lodash';

export const getFavoritesById = (state => {
  return {
    favoritesById: keyBy(state.dayheart.favorites.data, 'id')
  }
})

export const getAllFavorites = (state => state.dayheart.favorites)

export const favoritesAreLoaded = (state => state.dayheart.favorites.isLoaded)
