import { MPRecordNote } from '../../../types/';
import { MPRecordNotesItem } from './MPRecordNotesItem';
import PropTypes from 'prop-types';
import React from 'react';

export const MPRecordNotesList = ({ noteList, security: { user },
    editNotes, updateIndex, onSubmitItem, cancelEdit, onDelete }) => {
    return (<div className="notes-list">
        {noteList.map((note, index) => (<MPRecordNotesItem
            key={note[MPRecordNote._ID]}
            managed={updateIndex === index}
            note={note}
            cancelEdit={cancelEdit}
            editNotes={editNotes}
            user={user}
            onSubmitItem={onSubmitItem}
            index={index}
            onDelete={onDelete}
        />))}
    </div>);
};
MPRecordNotesList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    editNotes: PropTypes.func.isRequired,
    noteList: PropTypes.array.isRequired,
    security: PropTypes.object.isRequired,
    updateIndex: PropTypes.number,
    onSubmitItem: PropTypes.func.isRequired
}; 