import * as labels from '../../../labels/';

import { Record } from '../../../types/';
import { toReadableText } from '../../../utils/';

export default [{
  field: Record.OWNER,
  label: labels.LABEL_OWNER,
  className: 'col-sm-2'
}, {
  field: Record.COMPANY,
  label: labels.LABEL_COMPANY,
  filter: true,
  className: 'col-sm-2'
},
{
  field: Record.RECORD_TYPE,
  label: labels.LABEL_RECORD_TYPE,
  filter: true,
  className: 'col-sm-2'
},
{
  field: Record.ITEM,
  label: labels.LABEL_ITEM,
  transform: toReadableText,
  className: 'col-sm-2'
},
{
  field: Record.DESCRIPTION,
  label: labels.LABEL_DESCRIPTION,
  transform: toReadableText,
  className: 'col-sm-2'
},
{
  field: Record.DATE_CREATED,
  label: labels.LABEL_CREATED_ON,
  className: 'col-sm-2'
}
];
