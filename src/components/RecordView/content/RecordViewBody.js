import * as labels from '../../../labels/';

import { Page } from '../../common/';
import PropTypes from 'prop-types';
import React from 'react';
import { Record } from '../../../types/';
import { RecordViewItemDetail } from './RecordViewItemDetail';
import { RecordViewItemHistory } from './RecordViewItemHistory';

export const RecordViewBody = ({ record }) => {
    const itemDetails = record.map(rec => JSON.parse(rec[Record.ITEM]));
    return (<Page className="record-view" banner="/record-view-banner.jpg"
        icon="database" label={labels.LABEL_RECORD}>
        <div className="col-sm-3">
            <RecordViewItemDetail itemDetails={itemDetails} owner={record && record.length ? record[0][Record.OWNER] : ''} />
        </div>
        <div className="col-sm-9">
            <RecordViewItemHistory record={record} />
        </div>
    </Page>);
};

RecordViewBody.propTypes = {
    record: PropTypes.array.isRequired
};