const { 
   getAccountHistory,
   getNetwork
}  = require("../");

(async (network)=>{

   console.log(JSON.stringify(getAccountHistory(network, "initminer", 100, 10), null, 2));

})(getNetwork("vox"));