
const networks = {
   steem: require("@steemit/steem-js"),
   golos: require("golos-js"),
   vox: require("@steemit/steem-js")
};

networks.vox.api.setOptions({ url: "https://vox.community:9000" });
networks.vox.config.set('chain_id', '88a13f63de69c3a927594e07d991691c20e4cf1f34f83ae9bd26441db42a8acd');

networks.golos.config.set('websocket', "wss://api.golos.cf");
// networks.golos.config.set('chain_id', '88a13f63de69c3a927594e07d991691c20e4cf1f34f83ae9bd26441db42a8acd');

module.exports = {
   getNetwork:(network) => {
      return networks[network];
   }
}

