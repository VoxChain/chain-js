const { 
   getContent,
   getActiveVotes,
   getNetwork
}  = require("../");


(async (network)=>{
   const post = await getContent(network, "initminer", "re-initminer-20180904t060941128z");
   const votes = await getActiveVotes(network, "initminer", "re-initminer-20180904t060941128z");
   console.log(post);
   console.log(votes);
})(getNetwork("vox"));