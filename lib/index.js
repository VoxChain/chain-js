const api = require("./api");
const permlink = require("./permlink");
const blockchains = require("./blockchains");

module.exports = Object.assign({}, api, permlink, blockchains);