const { 
   streamBlock,
   getNetwork
}  = require("../");


const filter_transfer_operation = (operation) => {
   return operation[0] === "transfer";
}

const get_block_operations = (transactions) => {
   return transactions.reduce((memo, transaction)=>{
      return memo.concat(transaction.operations);
   }, []);
}

const trasfer_filter_from = (name, operation) => {
   return operation.from === name;
}

const trasfer_filter_to = (to, operation) => {
   return operation.to === to;
}

streamBlock(getNetwork("vox_testnet"), (err, block)=>{
   if(block.transactions.length > 0) {
      const operations = get_block_operations(block.transactions);
      const transfer = operations.filter(filter_transfer_operation).map(op=>op[1]);

      const account = "initminer";

      const from = transfer.filter(trasfer_filter_from.bind(null, account));
      const to = transfer.filter(trasfer_filter_to.bind(null, account));

      console.log(from, to);
   }
});
