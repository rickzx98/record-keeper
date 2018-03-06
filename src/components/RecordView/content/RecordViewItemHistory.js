import * as labels from '../../../labels/';

import { CollapseHeader, FontAwesome } from '../../common';

import { FluidTable } from 'fluid-commons';
import PropTypes from 'prop-types';
import React from 'react';
import { RecordHistory } from '../api/';
import { TABLE_NAME } from '../contants';

export const RecordViewItemHistory = ({ record }) => {
    return (<CollapseHeader panelStyle="panel-primary" heading={
        <span><FontAwesome name="history"/> {labels.LABEL_ITEM_HISTORY}</span>}>
        <FluidTable className="table table-responsive" columns={RecordHistory} value={record} name={TABLE_NAME} />
    </CollapseHeader>);
};

RecordViewItemHistory.propTypes = {
    record: PropTypes.array
};