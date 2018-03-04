import * as labels from '../../../labels/';

import PropTypes from 'prop-types';
import React from 'react';

export const SearchBody = ({ search, onChange, ajax, onSubmit }) => {
    return (<div className="record-search">
        <form onChange={onChange}
            onSubmit={onSubmit}
            className="input-group"
            name="searchForm">
            <input required={true} disabled={ajax.started} placeholder={labels.LABEL_OWNER} className="form-control" value={search} name="search" />
            <span className="input-group-btn">
                <button disabled={ajax.started} type="submit" className="btn btn-primary">
                    <i className="fa fa-search" />
                </button>
            </span>
        </form></div>);
};

SearchBody.propTypes = {
    search: PropTypes.string,
    ajax: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};
