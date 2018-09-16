const networks = {
   steem: require("../steem-js/lib"),
   // golos: require("../golos-js"),
   vox: require("../vox-js/lib"),
   vox_testnet: require("../vox-js-testnet/lib")
};

networks.vox_testnet.api.setOptions({ url: "https://testnet.vox.community:8090/" });
networks.vox_testnet.config.set('chain_id', '18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');
networks.vox_testnet.config.set('address_prefix', 'TST');

networks.vox_testnet.api.setOptions({ url: "https://vox.community:9000" });
networks.vox.config.set('chain_id', '88a13f63de69c3a927594e07d991691c20e4cf1f34f83ae9bd26441db42a8acd');
networks.vox.config.set('address_prefix', 'VOX');

// networks.golos.config.set('websocket', "wss://api.golos.cf");
// networks.golos.config.set('chain_id', '88a13f63de69c3a927594e07d991691c20e4cf1f34f83ae9bd26441db42a8acd');

module.exports = {
   getNetwork:(network) => {
      return networks[network];
   }
}

