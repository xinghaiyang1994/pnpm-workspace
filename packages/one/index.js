const utils = require('sea-pnpm-test-utils');
const react = require('react');
console.log(utils.add(1, 2));
console.log(utils.rdm());
// console.log(react);

const del = (a, b) => (a - b);

module.exports = {
  ...utils,
  del
};