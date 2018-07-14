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
   comment
}