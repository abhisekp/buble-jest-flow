const flowRemoveTypes = require('flow-remove-types');
const bubleJest = require('buble-jest');

module.exports = {
  process(src, options) {
    return bubleJest.process(flowRemoveTypes(src, options).toString());
  },
};
