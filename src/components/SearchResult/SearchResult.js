import * as actions from './action//SearchResultActions';

import PropTypes from 'prop-types';
import React from 'react';
import { SearchResultBody } from './content/SearchResultBody';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.thisOnSelect = this.onSelect.bind(this);
  }
  componentWillMount() {
    this.props.actions.createHeaders();
  }
  onSelect({ item, itemType }) {
    this.props.actions.openView(itemType, JSON.parse(item).itemID);
  }
  render() {
    return (<SearchResultBody onSelect={this.thisOnSelect} records={this.props.searchResult} />);
  }
}
SearchResult.propTypes = {
  searchResult: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export const ConnectedSearchResult = connect(mapStateToProps, mapDispatchToProps)(SearchResult);
