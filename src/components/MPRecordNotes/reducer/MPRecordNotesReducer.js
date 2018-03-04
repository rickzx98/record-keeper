import * as types from '../actions/';

import { mpNotesCreatedDateDesc } from '../../../utils/';

export default (state = [], action) => {

    switch (action.type) {
        case types.ADD_NOTE:
            return [...state, action.payload];
        case types.REMOVE_NOTE:
            return [...state].splice(action.payload, 1);
        case types.SET_NOTE_LIST:
            return action.payload ? [...action.payload].sort(mpNotesCreatedDateDesc) : [];
        case types.CLEAR:
            return [];
        default:
            return state;
    }

};