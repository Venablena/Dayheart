import { keyBy } from 'lodash';

export const getFavoritesById = (state => {
  console.log(keyBy(this.state.favorites.data));
  return {
    ...state,
    favoritesById: keyBy(this.state.favorites.data)
  }
})

export const getAllFavorites = (state => state.favorites)
