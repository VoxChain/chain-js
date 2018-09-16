const { 
   getBlock,
   getNetwork
}  = require("../");

(async (network)=>{
   for(let i = 1000; i > 0; i--) {
      const block = await getBlock(network, i);
      if(block.transactions.length > 0) {
         console.log(JSON.stringify(block, null, 2));
      }
   }
})(getNetwork("vox"));