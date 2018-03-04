import * as labels from '../../../labels/';

import { FORM_ITEM_NAME } from '../constants';
import { FluidForm } from 'fluid-commons';
import PropTypes from 'prop-types';
import React from 'react';

export const MPRecordNotesItemControls = ({ editNotes, managed, index, note, cancelEdit, onDelete }) => {
    return (<div className="clearfix notes-list-item-control">
        {!managed && (<a onClick={() => {
            editNotes(note, index);
        }} className="notes-list-item-control-edit">{labels.LABEL_EDIT_NOTES}</a>)}
        {!managed && <a onClick={() => {
            onDelete(index);
        }} className="notes-list-item-control-remove">{labels.LABEL_REMOVE}</a>}
        {managed && (<a onClick={() => {
            FluidForm.submit(FORM_ITEM_NAME);
        }} className="notes-list-item-control-edit">{labels.LABEL_UPDATE}</a>)}
        {managed && <a onClick={cancelEdit} className="notes-list-item-control-remove">{labels.LABEL_CANCEL}</a>}
    </div>);
};

MPRecordNotesItemControls.propTypes = {
    editNotes: PropTypes.func.isRequired,
    managed: PropTypes.bool,
    index: PropTypes.number.isRequired,
    note: PropTypes.object.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};