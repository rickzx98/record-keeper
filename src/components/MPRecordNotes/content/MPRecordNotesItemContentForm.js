import { FORM_ITEM_NAME } from '../constants';
import { FluidForm } from 'fluid-commons';
import { MPRecordNote } from '../../../types/';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getValue } from '../../../utils/';

class MPRecordNotesItemContentForm extends React.Component {
    render() {
        const { onSubmit, mpRecordNotesItem } = this.props;
        const fluidFormProps = {
            specs: [{ field: MPRecordNote.NOTES, public: true }],
            name: FORM_ITEM_NAME,
            onSubmit
        };
        return (<FluidForm {...fluidFormProps}>
            <textarea name={MPRecordNote.NOTES} value={getValue(mpRecordNotesItem.data, MPRecordNote.NOTES)} rows="2"
                className="form-control" />
        </FluidForm>);
    }
}

function mapStateToProps(state) {
    return {
        mpRecordNotesItem: state.fluidForm.mpRecordNotesItem || { data: {}, touched: false }
    };
}

export const ConnectedMPRecordNotesItemContentForm = connect(mapStateToProps)(MPRecordNotesItemContentForm);

MPRecordNotesItemContentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    mpRecordNotesItem: PropTypes.object.isRequired
};