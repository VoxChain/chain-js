const { 
   streamBlock,
   getNetwork
}  = require("../");


const filter_reward_operation = (operation) => {
   return operation[0].indexOf("reward") !== -1;
}

const get_block_operations = (transactions) => {
   return transactions.reduce((memo, transaction)=>{
      return memo.concat(transaction.operations);
   }, []);
}

streamBlock(getNetwork("vox"), (err, block)=>{
   if(block.transactions.length > 0) {
      const operations = get_block_operations(block.transactions);
      const transfer = operations.filter(filter_reward_operation).map(op=>op[1]);
      console.log(transfer);
   }
});
