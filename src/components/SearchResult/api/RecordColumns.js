import * as labels from '../../../labels/';

import { Record } from '../../../types/';

export default [{
  field: Record.OWNER,
  label: labels.LABEL_OWNER
}, {
  field: Record.COMPANY,
  label: labels.LABEL_COMPANY,
  filter: true,
  columnFilterClass: 'form-control'
},
{
  field: Record.RECORD_TYPE,
  label: labels.LABEL_RECORD_TYPE,
  filter: true,
  columnFilterClass: 'form-control'
},
{
  field: Record.ITEM_TYPE,
  label: labels.LABEL_ITEM_TYPE,
  filter: true,
  columnFilterClass: 'form-control'
},
{
  field: Record.DESCRIPTION,
  label: labels.LABEL_DESCRIPTION
},
{
  field: Record.DATE_CREATED,
  label: labels.LABEL_CREATED_ON
}
];
