const locale = process.env.LOCALE || 'en_US';

switch (locale) {
  default:
    module.exports = require('./english');
    break;
}
