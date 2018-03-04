import * as labels from '../../../labels/';

import PropTypes from 'prop-types';
import React from 'react';
import { ResponsiveButton } from '../../common/';

export function MPRecordNotesDeleteModal(confirm, close) {
    return {
        title: labels.LABEL_DELETE_CONFIRMATION_TITLE,
        body: <h6>{labels.LABEL_DELETE_CONFIRMATION_NOTE}</h6>,
        footer: (<div>
            <ResponsiveButton onClick={confirm} className="btn btn-primary btn-md" label={labels.LABEL_CANCEL_YES} />
            <ResponsiveButton onClick={close} className="btn btn-danger btn-md" label={labels.LABEL_CANCEL_NO} />
        </div>)
    };
}

MPRecordNotesDeleteModal.propTypes = {
    confirm: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
};