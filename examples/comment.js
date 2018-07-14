const { 
   comment,
   createCommentPermlink,
   getNetwork
}  = require("../lib");

(async (network)=>{
   const POSTING_KEY = ".....";
   const permlink = createCommentPermlink("vugluskr");
   const res = await comment(network, POSTING_KEY, "", "ru-test", "vugluskr", permlink, "test", "test body", {});
   console.log(res);
})(getNetwork("vox"));