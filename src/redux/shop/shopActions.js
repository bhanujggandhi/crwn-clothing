import ShopActionTypes from './shopTypes';

export const updateCollections = (collectiosMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectiosMap,
});
