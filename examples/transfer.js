const { 
   transfer,
   getNetwork
}  = require("../");

(async (network)=>{
   console.log("transfer");
   const WIF = "5JNHfZYKGaomSFvd4NUdQ9qMcEAC43kujbfjueTHpVapX1Kzq2n";
   const res = await transfer(network, WIF, "initminer", "initminer", "0.001 TESTS", "vuglusk-memo");
   console.log(res);
})(getNetwork("vox_testnet"));