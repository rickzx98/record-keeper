export default {
  environment: {
    development: () => {
      return {
        mockData: require('../../../utils/Mocks')
      };
    },
    production: {}
  },
  catch: {
    apiError: (error)=>{
      console.error(error);
    }
  }
};
