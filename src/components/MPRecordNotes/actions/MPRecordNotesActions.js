import * as types from './';

import { FORM_NAME, MPFormDetailActions as mpDetailActions } from '../../MPFormDetail/';
import { MPFormDetailFields, MPRecordNote, MPUser } from '../../../types/';

import { DialogActions as dialogActions } from '../../Dialog/';

export const submitNote = (note) => {
    return (dispatch, state) => {
        const { security: { user }, fluidForm, noteList } = state();
        const updateRecord = { ...fluidForm[FORM_NAME].data };
        const updatedNoteList = [...noteList];
        updatedNoteList.unshift(MPRecordNote.newMPRecordNote(note, user[MPUser.USER_ID]));
        updateRecord[MPFormDetailFields.NOTE_LIST] = updatedNoteList;
        dispatch(mpDetailActions.updateMPDetailRecord(updateRecord))
            .then(() => {
                dispatch(setNoteList(updatedNoteList));
            });
    };
};

export const submitUpdate = (note, index) => {
    return (dispatch, state) => {
        const { fluidForm, noteList } = state();
        const updateRecord = { ...fluidForm[FORM_NAME].data };
        const updatedNoteList = [...noteList];
        const updateNote = { ...updatedNoteList[index] };
        updateNote[MPRecordNote.DATE_UPDATED] = new Date();
        updateNote[MPRecordNote.NOTES] = note;
        updatedNoteList[index] = updateNote;
        updateRecord[MPFormDetailFields.NOTE_LIST] = updatedNoteList;
        dispatch(mpDetailActions.updateMPDetailRecord(updateRecord))
            .then(() => {
                dispatch(setNoteList(updatedNoteList));
            });
    };
};

export const addToNoteList = (note) => {
    return {
        type: types.ADD_NOTE,
        payload: note
    };
};

export const removeNoteFromList = (index) => {
    return {
        type: types.REMOVE_NOTE,
        payload: index
    };
};

export const setNoteList = (noteList) => {
    return {
        type: types.SET_NOTE_LIST,
        payload: noteList
    };
};

export const deleteNote = (deleteModal) => {
    return dispatch => {
        dispatch(dialogActions.openDialog(deleteModal));
    };
};

export const cancelDelete = () => {
    return dispatch => {
        dispatch(dialogActions.closeDialog());
    };
};

export const confirmDelete = (index) => {
    return (dispatch, state) => {
        const { fluidForm, noteList } = state();
        const updateRecord = { ...fluidForm[FORM_NAME].data };
        const updatedNoteList = [...noteList];
        updatedNoteList.splice(index, 1);
        updateRecord[MPFormDetailFields.NOTE_LIST] = updatedNoteList;
        dispatch(mpDetailActions.updateMPDetailRecord(updateRecord))
            .then(() => {
                dispatch(setNoteList(updatedNoteList));
            });
    };
};

export const clear = () => {
    return {
        type: types.CLEAR
    };
};