const { 
   generateKeys,
   accountCreateWithDelegation,
   getNetwork,
   getPrivateKeys
}  = require("../");

var Chance = require('chance');
const chance = new Chance(Date.now());

(async (network)=>{

   const NAME = chance.word(6);
   const PASS = chance.string();
   
   console.log(NAME, PASS);

   const creator = "initminer";
   const wif = "";
   const fee = "0.000 TESTS";
   const delegation = '5000.000000 VESTS';
   const jsonMetadata= '{}';
   
   const publicKeys = generateKeys(network, NAME, PASS, ['owner','active','posting','memo']);
   
   console.log(publicKeys)

   const ownerAuth = {
      weight_threshold: 1,
      account_auths: [],
      key_auths: [[publicKeys.owner, 1]]
   }
   const activeAuth = {
      weight_threshold: 1,
      account_auths: [],
      key_auths: [[publicKeys.active, 1]]
   }
   const postingAuth = {
      weight_threshold: 1,
      account_auths: [],
      key_auths: [[publicKeys.posting, 1]]
   }

   const result = await accountCreateWithDelegation(
      network,
      wif,
      fee,
      delegation,
      creator,
      NAME,
      ownerAuth,
      activeAuth,
      postingAuth,
      publicKeys.memo,
      jsonMetadata,
      []
   );

   if(result) {
      var json = JSON.stringify(result, null, 4);
      var p = getPrivateKeys(network, NAME, PASS, ["owner","active","posting","memo"]);
      console.log(p)
      console.log(json)
   }

})(getNetwork("vox"));