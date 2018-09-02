const { 
   getContent,
   getActiveVotes,
   getNetwork
}  = require("../");


(async (network)=>{
   const post = await getContent(network, "initminer", "re-initminer-20180902t205522552z");
   const votes = await getActiveVotes(network, "initminer", "re-initminer-20180902t205522552z");
   console.log(post);
   console.log(votes);
})(getNetwork("vox"));