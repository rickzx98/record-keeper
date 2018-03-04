import * as labels from '../../../labels/';

import { MPRecordNote, MPUser } from '../../../types/';

import { MPRecordNotesItemContent } from './MPRecordNotesItemContent';
import { MPRecordNotesItemControls } from './MPRecordNotesItemControls';
import PropTypes from 'prop-types';
import React from 'react';
import { formatDateSmallWithTime } from '../../../utils/';

export const MPRecordNotesItem = ({ managed, editNotes,
    note, onSubmitItem, user, index, cancelEdit, onDelete }) => {
    return (<div className={managed ? 'notes-list-item update' : 'notes-list-item'} key={note[MPRecordNote._ID]}>
        <div className="clearfix">
            <span className="notes-list-item-user">{note[MPRecordNote.CREATED_BY]}</span>
            <span className="notes-list-item-date">{note[MPRecordNote.DATE_UPDATED] &&
                <span className="edited">({labels.LABEL_EDITED})</span>}{formatDateSmallWithTime(note[MPRecordNote.DATE_CREATED])}</span>
        </div>
        <MPRecordNotesItemContent
            onSubmitItem={onSubmitItem}
            managed={managed} note={note} />
        {user && user[MPUser.USER_ID] === note[MPRecordNote.CREATED_BY] && (<MPRecordNotesItemControls
            onDelete={onDelete}
            cancelEdit={cancelEdit}
            managed={managed}
            index={index}
            editNotes={editNotes}
            note={note} />)}
    </div>);
};

MPRecordNotesItem.propTypes = {
    index: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    note: PropTypes.object.isRequired,
    managed: PropTypes.bool,
    editNotes: PropTypes.func.isRequired,
    onSubmitItem: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};