const api = require("./lib/api");
const permlink = require("./lib/permlink");
const blockchains = require("./lib/blockchains");

module.exports = Object.assign({}, api, permlink, blockchains);