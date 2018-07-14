const { 
   getConfig, 
   getDynamicGlobalProperties, 
   getChainProperties, 
   getFeedHistory,
   getCurrentMedianHistoryPrice, 
   getHardforkVersion, 
   getNextScheduledHardfork,
   getNetwork
}  = require("../lib");

(async (network)=>{

   const result = {
      getConfig : await getConfig(network),
      getDynamicGlobalProperties: await getDynamicGlobalProperties(network),
      getChainProperties: await getChainProperties(network),
      getFeedHistory: await getFeedHistory(network),
      getCurrentMedianHistoryPrice: await getCurrentMedianHistoryPrice(network),
      getHardforkVersion: await getHardforkVersion(network),
      getNextScheduledHardfork: await getNextScheduledHardfork(network)
   };

   console.log(JSON.stringify(result, null, 2));

})(getNetwork("vox"));