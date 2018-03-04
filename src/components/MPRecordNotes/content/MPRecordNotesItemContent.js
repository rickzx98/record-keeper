import { MPRecordNote } from '../../../types/';
import { ConnectedMPRecordNotesItemContentForm as MPRecordNotesItemContentForm } from './MPRecordNotesItemContentForm';
import PropTypes from 'prop-types';
import React from 'react';

export const MPRecordNotesItemContent = ({ managed, note, onSubmitItem }) => {
    return (<div>
        {!managed && (<p className="notes-list-item-content" >{note[MPRecordNote.NOTES]}</p>)}
        {managed && (<MPRecordNotesItemContentForm onSubmit={onSubmitItem} />)}
    </div>);
};

MPRecordNotesItemContent.propTypes = {
    note: PropTypes.object.isRequired,
    managed: PropTypes.bool,
    onSubmitItem: PropTypes.func.isRequired
};

