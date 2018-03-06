import * as labels from '../../../labels/';

import PropTypes from 'prop-types';
import React from 'react';

export const SearchBody = ({ search, onChange, ajax, onSubmit }) => {
    return (<div className="record-search">
        <form onChange={onChange}
            onSubmit={onSubmit}
            className="input-group"
            name="searchForm">
            <span className="input-group-btn">
                <select className="form-control" name="type">
                    <option value="owner">{labels.LABEL_OWNER}</option>
                    <option value="item">{labels.LABEL_ITEM}</option>
                </select>
            </span>
            <input required={true} disabled={ajax.started} placeholder={labels.LABEL_SEARCH_RECORDS} className="form-control" value={search.text || ''} name="text" />
            <span className="input-group-btn">
                <button disabled={ajax.started} type="submit" className="btn btn-primary">
                    <i className="fa fa-search" />
                </button>
            </span>
        </form></div>);
};

SearchBody.propTypes = {
    search: PropTypes.object,
    ajax: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};
