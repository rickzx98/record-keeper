import * as labels from '../../../labels/';

import { FontAwesome, ResponsiveButton } from '../../common/';
import { getValue, textNotEmpty } from '../../../utils/';

import { FORM_NAME } from '../constants';
import { FluidForm } from 'fluid-commons';
import { MPFormDetailFields } from '../../../types/';
import PropTypes from 'prop-types';
import React from 'react';

export const MPRecordNotesForm = ({ specs, onSubmit, mpRecordNotes, clearNotes, ajax, updating }) => {
    return (<FluidForm name={FORM_NAME} specs={specs} onSubmit={onSubmit}>
        <div className="notes-field">
            <div className="input-group">
                <input autoFocus disabled={ajax.started || updating} value={getValue(mpRecordNotes.data, MPFormDetailFields.NOTES)} name={MPFormDetailFields.NOTES} className="form-control" placeholder={labels.LABEL_ADD_NOTES} />
                <span className="input-group-btn">
                    <ResponsiveButton disabled={updating || !mpRecordNotes.touched || !textNotEmpty(getValue(mpRecordNotes.data, MPFormDetailFields.NOTES))}
                        type="submit" icon={<FontAwesome name="plus" />} className="btn btn-primary btn-md" label={labels.LABEL_ADD} />
                    <ResponsiveButton onClick={clearNotes} disabled={!mpRecordNotes.touched || !textNotEmpty(getValue(mpRecordNotes.data, MPFormDetailFields.NOTES))}
                        icon={<FontAwesome name="eraser" />} className="btn btn-danger btn-md" label={labels.LABEL_CLEAR} />
                </span>
            </div>
        </div>
    </FluidForm>);
};

MPRecordNotesForm.propTypes = {
    clearNotes: PropTypes.func.isRequired,
    mpRecordNotes: PropTypes.object.isRequired,
    specs: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    ajax: PropTypes.object.isRequired,
    updating: PropTypes.bool
};