const {
  signTransaction,
  getDynamicGlobalProperties,
  getNetwork,
  createCommentPermlink,
  comment,
  broadcastTransactionSynchronous
} = require("../");

const vote = async (network, author, permlink, voteAccount, wif) => {
  const now = new Date().getTime() + 3e6;
  const expire = new Date(now).toISOString().split(".")[0];

  let votes = [];

  votes.push([
    "vote",
    {
      voter: voteAccount,
      author: author,
      weight: 10000,
      permlink: permlink
    }
  ]);

  const props = await getDynamicGlobalProperties(network);
  if (props) {
    const ref_block_num = props.head_block_number & 0xffff;
    const data = [];
    for (let idx = 0; idx < props.head_block_id.length; idx += 2) {
      let idx2 = idx / 2;
      if (idx2 >= 4 && idx2 <= 7) {
        data.push(props.head_block_id[idx] + props.head_block_id[idx + 1]);
      }
    }

    const ref_block_prefix = parseInt("0x" + data.reverse().join(""), 16);

    const unsignedTX = {
      expiration: expire,
      extensions: [],
      operations: votes,
      ref_block_num: ref_block_num,
      ref_block_prefix: ref_block_prefix
    };

    let signedTX = null;

    try {
      signedTX = signTransaction(network, unsignedTX, { posting: wif });
    } catch (error) {
      console.warn("Не удалось подписать транзакцию: " + error.message);
    }

    console.log(JSON.stringify(signedTX));

    try {
      const res = await broadcastTransactionSynchronous(network, signedTX);
      if (res.id) {
        console.log("Транзакция отправлена: " + res.id);
        console.log(res);
        return true;
      }
    } catch (error) {
      console.warn("Ошибка", error.message);
    }
  }

  return false;
};


(async (network)=>{
 //  const permlink = createCommentPermlink("initminer");
 //  const res = await comment(network, "5JNHfZYKGaomSFvd4NUdQ9qMcEAC43kujbfjueTHpVapX1Kzq2n", "", "ru-test", "initminer", permlink, "test", "test body", {});
   const res1 = await vote(network, "initminer", "re-initminer-20180902t213534664z", "initminer", "5JNHfZYKGaomSFvd4NUdQ9qMcEAC43kujbfjueTHpVapX1Kzq2n");
 //  console.log(permlink);
   console.log(res1);
})(getNetwork("vox"));