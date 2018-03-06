import * as labels from '../../../labels/';

import { Record } from '../../../types/';
import { toReadableText } from '../../../utils/';

export default [{
  field: Record.OWNER,
  label: labels.LABEL_OWNER
}, {
  field: Record.COMPANY,
  label: labels.LABEL_COMPANY,
  filter: true
},
{
  field: Record.RECORD_TYPE,
  label: labels.LABEL_RECORD_TYPE,
  filter: true
},
{
  field: Record.ITEM_TYPE,
  label: labels.LABEL_ITEM_TYPE,
  filter: true
},
{
  field: Record.ITEM,
  label: labels.LABEL_ITEM,
  transform: toReadableText
},
{
  field: Record.DESCRIPTION,
  label: labels.LABEL_DESCRIPTION,
  transform: toReadableText
},
{
  field: Record.DATE_CREATED,
  label: labels.LABEL_CREATED_ON
}
];
