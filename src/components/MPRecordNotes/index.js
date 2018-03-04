import * as actions from './actions/MPRecordNotesActions';

import reducer from './reducer/MPRecordNotesReducer';

export { ConnectedMPRecordNotes as MPRecordNotes } from './MPRecordNotes';


export const MPRecordNotesReducer = reducer;
export const MPRecordNotesActions = actions;