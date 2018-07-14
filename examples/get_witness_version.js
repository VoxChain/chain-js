const {getActiveWitnesses, getWitnessByAccount, getNetwork }  = require("../lib");

(async (network)=>{
   const activeWitnesses = await getActiveWitnesses(network);
   for(let i = 0; i < activeWitnesses.length; i++) {
      const witness = await getWitnessByAccount(network, activeWitnesses[i]);
      console.log(witness.owner, witness.running_version);
   }
})(getNetwork("vox"));