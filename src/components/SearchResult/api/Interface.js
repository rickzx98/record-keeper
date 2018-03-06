export default {
  findRecords: {
    development: ({ mockData, type, text }) => new Promise((resolve) => {
      const data = mockData().default;
      setTimeout(() => {
        const filtered = data.filter(record => record[type()].toLowerCase().indexOf(text().toLowerCase()) > -1);
        resolve({ values: filtered });
      }, 400);
    })
  }
};
