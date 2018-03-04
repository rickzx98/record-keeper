import { Record } from '../../../types/';
export default {
  findRecordsByOwner: {
    development: ({ mockData, owner }) => new Promise((resolve) => {
      const data = mockData().default;
      setTimeout(() => {
        const filtered = data.filter(record => record[Record.OWNER] === owner());
        resolve({ values: filtered });
      }, 400);
    })
  }
};
