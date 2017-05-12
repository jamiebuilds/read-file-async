// @flow
const promisify = require('typeable-promisify');
const {readFile} = require('graceful-fs');

let readFileAsync = (filePath /* : string */) /*: Promise<Buffer> */ => {
  return promisify(cb => readFile(filePath, cb));
};

module.exports = readFileAsync;
