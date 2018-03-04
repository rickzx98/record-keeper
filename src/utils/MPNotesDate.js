import { MPRecordNote } from '../types/';

export function mpNotesCreatedDateDesc(a, b) {
    return new Date(b[MPRecordNote.DATE_CREATED]) - new Date(a[MPRecordNote.DATE_CREATED]);
}
