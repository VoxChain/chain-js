const networks = {
   //steem: require("../steem-js/lib"),
   // golos: require("../golos-js"),
   vox: require("../vox-js/lib")
};

// TESTNET
networks.vox.api.setOptions({ url: "http://testnet.vox.community:8090/" });
networks.vox.config.set('chain_id', '18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');
networks.vox.config.set('address_prefix', 'TST');

/*
networks.vox.api.setOptions({ url: "https://vox.community:9000" });
networks.vox.config.set('chain_id', '88a13f63de69c3a927594e07d991691c20e4cf1f34f83ae9bd26441db42a8acd');
networks.vox.config.set('address_prefix', 'VOX');
*/

// networks.golos.config.set('websocket', "wss://api.golos.cf");
// networks.golos.config.set('chain_id', '88a13f63de69c3a927594e07d991691c20e4cf1f34f83ae9bd26441db42a8acd');

module.exports = {
   getNetwork:(network) => {
      return networks[network];
   }
}

