import '../../../images/profile.jpg';

import * as actions from './actions/';

import { APP_NAME, LABEL_WELCOME } from '../../../labels/';

import { HeaderControls } from './HeaderControls';
import LoadingBalls from '../LoadingBalls';
import { MPRecordSearch } from '../../MPRecordSearch/';
import Navbar from 'react-bootstrap/lib/Navbar';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<Navbar collapseOnSelect fixedTop={true} fluid={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="">
            {!this.props.ajax.started && <img className="pull-left header-thumbnail" height="24" width="24" src="/profile.jpg" />}
            {this.props.ajax.started && <div className="header-loader"><LoadingBalls /></div>}
            <div className="pull-right"> &nbsp;{this.props.security.fullname} {APP_NAME}</div></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <HeaderControls router={this.props.routing} headers={this.props.headers} />
        <Navbar.Text pullRight>{LABEL_WELCOME}{this.props.security.user.userId}!</Navbar.Text>
        <Navbar.Form pullRight>
          <MPRecordSearch />
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>);
  }
}


Header.propTypes = {
  security: PropTypes.object.isRequired,
  headers: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ajax: state.ajaxStatus,
    headers: state.headers,
    routing: state.routing,
    security: state.security
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
