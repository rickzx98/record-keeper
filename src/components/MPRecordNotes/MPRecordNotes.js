import * as actions from './actions/MPRecordNotesActions';

import { FORM_ITEM_NAME, FORM_NAME } from './constants';
import { MPFormDetailFields, MPRecordNote } from '../../types/';

import { FluidForm } from 'fluid-commons';
import { MPRecordNotesBody } from './content/MPRecordNotesBody';
import { MPRecordNotesDeleteModal } from './content/MPRecordNotesDeleteModal';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MPRecordNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.specs = [{
            field: MPFormDetailFields.NOTES
        }];
        this.thisOnSubmit = this.onSubmit.bind(this);
        this.thisEditNotes = this.editNotes.bind(this);
        this.thisClearNotes = this.clearNotes.bind(this);
        this.thisOnSubmitItem = this.onSubmitItem.bind(this);
        this.thisCancelEdit = this.cancelEdit.bind(this);
        this.thisOnDelete = this.onDelete.bind(this);
        this.thisConfirmDelete = this.confirmDelete.bind(this);
        this.thisCancelDelete = this.cancelDelete.bind(this);
    }
    componentWillUnmount() {
        this.props.actions.clear();
        this.setState({
            updateIndex: undefined,
            deleteIndex: undefined
        });
        FluidForm.clear(FORM_NAME);
    }
    onSubmit(value) {
        this.props.actions.submitNote(value[MPFormDetailFields.NOTES]);
        this.clearNotes();
    }
    onSubmitItem(value) {
        this.props.actions.submitUpdate(value[MPFormDetailFields.NOTES], this.state.updateIndex);
        this.cancelEdit();
    }
    editNotes(note, index) {
        FluidForm.set(FORM_ITEM_NAME, MPFormDetailFields.NOTES, note[MPRecordNote.NOTES]);
        this.setState({ updateIndex: index });
    }
    clearNotes() {
        FluidForm.clear(FORM_NAME);
        this.setState({ updateIndex: undefined });
    }
    cancelEdit() {
        FluidForm.clear(FORM_ITEM_NAME);
        this.setState({ updateIndex: undefined });
    }
    onDelete(index) {
        this.setState({ deleteIndex: index });
        this.props.actions.deleteNote(MPRecordNotesDeleteModal(this.thisConfirmDelete, this.thisCancelDelete));
    }
    confirmDelete() {
        this.props.actions.confirmDelete(this.state.deleteIndex);
        this.cancelDelete();

    }
    cancelDelete() {
        this.setState({ deleteIndex: undefined });
        this.props.actions.cancelDelete();
    }
    render() {
        return (<MPRecordNotesBody
            mpRecordNotes={this.props.mpRecordNotes}
            onSubmit={this.thisOnSubmit}
            specs={this.specs}
            security={this.props.security}
            noteList={this.props.noteList}
            editNotes={this.thisEditNotes}
            clearNotes={this.thisClearNotes}
            updateIndex={this.state.updateIndex}
            onSubmitItem={this.thisOnSubmitItem}
            cancelEdit={this.thisCancelEdit}
            onDelete={this.thisOnDelete}
            ajax={this.props.ajax} />);
    }
}

MPRecordNotes.propTypes = {
    noteList: PropTypes.array,
    actions: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired,
    mpRecordNotes: PropTypes.object.isRequired,
    ajax: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        ajax: state.ajaxStatus,
        security: state.security,
        noteList: state.noteList,
        mpRecordNotes: state.fluidForm[FORM_NAME] || { touched: false, data: {} }
    };
}

function mapDispatchToActions(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export const ConnectedMPRecordNotes = connect(mapStateToProps, mapDispatchToActions)(MPRecordNotes);
