const { 
   comment,
   createCommentPermlink,
   getNetwork
}  = require("../");

(async (network)=>{
   const POSTING_KEY = "5JNHfZYKGaomSFvd4NUdQ9qMcEAC43kujbfjueTHpVapX1Kzq2n";
   const permlink = createCommentPermlink("initminer");
   const res = await comment(network, POSTING_KEY, "", "ru-test", "initminer", permlink, "test", "test body", {});
   console.log(res);
})(getNetwork("vox"));