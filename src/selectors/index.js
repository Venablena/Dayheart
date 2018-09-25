import { toArray } from 'lodash';

// export const getFavoritesById = (state => {
//   return {
//     favoritesById: keyBy(state.dayheart.favorites.data, 'id')
//   }
// })
export const getFavoritesById = (state => state.dayheart.favorites.data);
export const getFavoritesArray = (state => toArray(state.dayheart.favorites.data));
export const favoritesAreLoaded = (state => state.dayheart.favorites.isLoaded);
export const getUser = (state => state.firebase.auth.uid);
export const getProviders = (state => state.dayheart.providers.all);
