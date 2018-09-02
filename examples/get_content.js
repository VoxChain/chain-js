const { 
   getContent,
   getActiveVotes,
   getNetwork
}  = require("../");


(async (network)=>{
   const post = await getContent(network, "initminer", "re-initminer-20180902t213534664z");
   const votes = await getActiveVotes(network, "initminer", "re-initminer-20180902t213534664z");
   console.log(post);
   console.log(votes);
})(getNetwork("vox"));