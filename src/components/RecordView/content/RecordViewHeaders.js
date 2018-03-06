import * as labels from '../../../labels/';

export const viewHeaders = (back, refresh, isActive) => {
    const headers = {};
    headers['returnToList'] = {
        label: labels.LABEL_BACK,
        fontIcon: 'arrow-left',
        onClick: back,
        isActive: isActive
    };
    headers['refreshRecord'] = {
        label: labels.LABEL_REFRESH,
        fontIcon: 'refresh',
        onClick: refresh,
        isActive: isActive
    };
    return headers;
};