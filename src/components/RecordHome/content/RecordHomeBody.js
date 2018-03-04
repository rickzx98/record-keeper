import * as labels from '../../../labels';

import { Page } from '../../common/';
import React from 'react';
import { SearchResult } from '../../SearchResult/';

export const RecordHomeBody = () => {
  return (<Page label={labels.APP_NAME} icon="search" banner="home-banner.jpg">
    <SearchResult />
  </Page>);
};
