import { Record } from '../../../types/';
import {sortRecordDateDesc} from '../../../utils/';

export default {
    findByItemIDAndType: {
        development: ({ mockData, itemID, itemType }) => new Promise((resolve) => {
            const data = mockData().default;
            resolve({
                result: data.filter(record =>
                    record[Record.ITEM_TYPE] === itemType() &&
                    record[Record.ITEM].indexOf(`\"itemID\":\"${itemID()}\"`) > -1)
                    .sort(sortRecordDateDesc)
            });
        })
    }
};