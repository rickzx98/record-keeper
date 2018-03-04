import * as labels from '../../../labels/';

import { CollapseHeader, FontAwesome } from '../../common/';

import { MPRecordNotesForm } from './MPRecordNotesForm';
import { MPRecordNotesList } from './MPRecordNotesList';
import PropTypes from 'prop-types';
import React from 'react';

export const MPRecordNotesBody = ({ noteList, security, onSubmit,
    specs, mpRecordNotes, editNotes,
    clearNotes, updateIndex, ajax,
    onSubmitItem, cancelEdit, onDelete }) => {
    return (<span className="mp-record-notes"><CollapseHeader panelStyle="panel-primary" heading={
        <span><FontAwesome name="sticky-note" /> {labels.LABEL_NOTES} <FontAwesome className="edit-indicator" name="pencil" /></span>}>
        <MPRecordNotesForm updating={updateIndex > -1}
            ajax={ajax} clearNotes={clearNotes}
            mpRecordNotes={mpRecordNotes}
            onSubmit={onSubmit} specs={specs} />
        <MPRecordNotesList
            onDelete={onDelete}
            cancelEdit={cancelEdit}
            updateIndex={updateIndex}
            editNotes={editNotes}
            security={security}
            noteList={noteList}
            onSubmitItem={onSubmitItem} />
    </CollapseHeader></span>);
};

MPRecordNotesBody.propTypes = {
    onDelete: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    mpRecordNotes: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired,
    noteList: PropTypes.array.isRequired,
    specs: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    editNotes: PropTypes.func.isRequired,
    clearNotes: PropTypes.func.isRequired,
    updateIndex: PropTypes.number,
    ajax: PropTypes.object.isRequired,
    onSubmitItem: PropTypes.func.isRequired
}; 
