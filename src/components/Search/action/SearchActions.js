import * as types from './';

import { SearchResultActions as searchResultActions } from '../../SearchResult/';

export const setSearchValue = (searchValue) => {
  return {
    type: types.SET_SEARCH_VALUE,
    payload: searchValue
  };
};

export const submitSearch = () => {
  return dispatch => {
    dispatch(searchResultActions.loadResults());
  };
};

export const clearSearch = () => {
  return {
    type: types.CLEAR_SEARCH
  };
};
