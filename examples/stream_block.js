const { 
   streamBlock,
   getNetwork
}  = require("../");

streamBlock(getNetwork("vox"), (err, block)=>{
   if(block.transactions.length > 0) {
      console.log(JSON.stringify(block.transactions, null, 2));
   }
});
