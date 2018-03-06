import * as labels from '../../../labels';
import * as types from './';

import { FluidApi, FluidTable } from 'fluid-commons';

import { Pages } from '../../../types/';
import { TABLE_NAME } from '../constants';
import { AjaxStatusActions as ajaxStatusActions } from '../../AjaxStatus/';
import { HeaderActions as headerActions } from '../../Headers/';
import { NotificationActions as notificationActions } from '../../Notification/';
import { push } from 'react-router-redux';

export function setResults(results) {
  return {
    type: types.SET_RESULTS,
    payload: results
  };
}

export function loadResults() {
  return (dispatch, state) => {
    const { search: { type, text } } = state();
    dispatch(ajaxStatusActions.beginAjaxCall());
    FluidApi.execute('findRecords', {
      type, text
    }).then(({ findRecords }) => {
      const result = findRecords();
      dispatch(setResults(result.values ? result.values() : []));
      dispatch(ajaxStatusActions.ajaxCallSuccess());
    }).catch(error => {
      dispatch(ajaxStatusActions.ajaxCallError(error));
      dispatch(notificationActions.alertDanger(labels.LABEL_FAILED_LOADING_RECORDS));
    });
  };
}

export function clear() {
  return {
    type: types.CLEAR
  };
}


export function clearFilter() {
  FluidTable.clearFilter(TABLE_NAME);
}


export function createHeaders() {
  return dispatch => {
    const headers = {};
    headers['clearFilter'] = {
      label: labels.LABEL_CLEAR_FILTER,
      fontIcon: 'eraser',
      onClick: clearFilter,
      isActive: () => true
    };
    dispatch(headerActions.setHeaderControls(headers));
  };
}

export function openView(itemType, itemID) {
  return dispatch => {
    dispatch(push(Pages.recordViewPageWitdItemIDAndType(itemID, itemType)));
  };
};