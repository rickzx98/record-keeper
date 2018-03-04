import * as types from '../action/';

export default (state = '', action) => {
    switch (action.type) {
        case types.SET_SEARCH_VALUE:
            return action.payload;
        case types.CLEAR_SEARCH:
            return '';
    }
    return state;
};