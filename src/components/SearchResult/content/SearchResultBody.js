import { FluidTable } from 'fluid-commons';
import { MPFormDetailFields } from '../../../types/';
import PropTypes from 'prop-types';
import React from 'react';
import { RecordColumns } from '../api/';
import { TABLE_NAME } from '../constants';

export const SearchResultBody = ({ records, onSelect }) => {
  return (<FluidTable
    onSelect={onSelect}
    fieldKey={MPFormDetailFields._ID}
    name={TABLE_NAME}
    columnClass="table-header-column"
    className="search-result table table-hover table-striped table-primary"
    columns={RecordColumns}
    value={records} />);
};

SearchResultBody.propTypes = {
  onSelect: PropTypes.func.isRequired,
  records: PropTypes.array.isRequired
};
