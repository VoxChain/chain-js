const { 
   transfer,
   getNetwork
}  = require("../lib");

(async (network)=>{
   const WIF = "...";
   const res = await transfer(network, WIF, "vugluskr", "vugluskr", "0.001 GOLD", "vuglusk-memo");
   console.log(res);
})(getNetwork("vox"));