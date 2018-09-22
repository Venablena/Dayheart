import { keyBy } from 'lodash';

export const getFavoritesById = (state => {
  return {
    favoritesById: keyBy(state.dayheart.providers.favorites.data, 'id')
  }
})

export const getAllFavorites = (state => state.dayheart.providers.favorites.data)

export const favoritesAreLoaded = (state => state.dayheart.providers.favorites.isLoaded)
