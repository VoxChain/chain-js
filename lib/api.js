const getConfig = async (api) => {
   return new Promise((res, rej)=>{
      api.api.getConfig(function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getDynamicGlobalProperties = async (api) => {
   return new Promise((res, rej)=>{
      api.api.getDynamicGlobalProperties(function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getChainProperties = async (api) => {
   return new Promise((res, rej)=>{
      api.api.getChainProperties(function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getFeedHistory = async (api) => {
   return new Promise((res, rej)=>{
      api.api.getFeedHistory(function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getCurrentMedianHistoryPrice = async (api) => {
   return new Promise((res, rej)=>{
      api.api.getCurrentMedianHistoryPrice(function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getHardforkVersion = async (api) => {
   return new Promise((res, rej)=>{
      api.api.getHardforkVersion(function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getNextScheduledHardfork = async (api) => {
   return new Promise((res, rej)=>{
      api.api.getNextScheduledHardfork(function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getActiveWitnesses = async (api) => {
   return new Promise((res, rej)=>{
      api.api.getActiveWitnesses(function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getWitnessByAccount = async (api, accountName) => {
   return new Promise((res, rej)=>{
      api.api.getWitnessByAccount(accountName, function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const streamBlock = (api, callback) => {
   api.api.streamBlock(callback);
}

const comment = async (api, wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata) => {
   return new Promise((res, rej)=>{
      api.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata,function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const generateKeys = (api, name, pass, types) => {
   return api.auth.generateKeys(name, pass, types);
}

const getPrivateKeys = (api, name, pass, types) => {
   return api.auth.getPrivateKeys(name, pass, types);
}

const accountCreateWithDelegation = async (api,
   wif,
   fee,
   delegation,
   creator,
   name,
   ownerAuth,
   activeAuth,
   postingAuth,
   memoKey,
   jsonMetadata,
   ex) => {
   return new Promise((res, rej)=>{
      api.broadcast.accountCreateWithDelegation(
         wif,
         fee,
         delegation,
         creator,
         name,
         ownerAuth,
         activeAuth,
         postingAuth,
         memoKey,
         jsonMetadata,
         ex, 
      function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const transfer = (api, wif, from, to, amount, memo) => {
   return new Promise((res, rej)=>{
      api.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getAccountHistory = (api, account, from, limit) => {
   return new Promise((res, rej)=>{
      api.api.getAccountHistory(account, from, limit, function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}


const getBlock = (api, blockNum) => {
   return new Promise((res, rej)=>{
      api.api.getBlock(blockNum, function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const signTransaction = (api, trx, keys) => {
   return api.auth.signTransaction(trx, keys);
}

const broadcastTransactionSynchronous = (api, trx) => {
   return new Promise((res, rej)=>{
      api.api.broadcastTransactionSynchronous(trx, function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getContent = async (api, author, permlink) => {
   return new Promise((res, rej)=>{
      api.api.getContent(author, permlink, function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

const getActiveVotes = async (api, author, permlink) => {
   return new Promise((res, rej)=>{
      api.api.getActiveVotes(author, permlink, function(err, result) {
         if(err) return rej(err);
         return res(result);
      });
   });
}

module.exports = {
   getConfig,
   getDynamicGlobalProperties, 
   getChainProperties, 
   getFeedHistory, 
   getCurrentMedianHistoryPrice, 
   getHardforkVersion, 
   getNextScheduledHardfork, 
   getActiveWitnesses, 
   getWitnessByAccount,
   streamBlock,
   comment,
   generateKeys,
   getPrivateKeys,
   accountCreateWithDelegation,
   transfer,
   getAccountHistory,
   getBlock,
   signTransaction,
   broadcastTransactionSynchronous,
   getContent,
   getActiveVotes
}