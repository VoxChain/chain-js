const { 
   comment,
   createCommentPermlink,
   getNetwork
}  = require("../");

(async (network)=>{
   const POSTING_KEY = "";
   const permlink = createCommentPermlink("initminer");
   const res = await comment(network, POSTING_KEY, "", "ru-test", "initminer", permlink, "test", "test body", {});
   console.log(permlink, res);
})(getNetwork("vox"));