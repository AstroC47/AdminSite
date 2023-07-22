require('dotenv').config()

module.exports = {
    rpcEndpoint: 'https://rpc.stargaze-apis.com/',

    account: 'stars1sqz3n8lfrn0yaqlc6rqaderrexvylfaxthsja5',
    minter: 'stars1klg9pj576qra5862svgwcs07r40sdks4xk62j3t9567k2z79nr6qn406kq',
    sg721: 'stars1j875gkljknhq7n2g5lsckl3zuj2tyxvqgz5gyku0xxssl0usm5wqc750p3'

    // rpcEndpoint: 'https://rpc.elgafar-1.stargaze-apis.com/',
    // account: 'stars1pz797ycke6eusr77dcr9srx7c5pddztcln94lg',
    // sg721: 'stars1j875gkljknhq7n2g5lsckl3zuj2tyxvqgz5gyku0xxssl0usm5wqc750p3',
    // minter: 'stars1klg9pj576qra5862svgwcs07r40sdks4xk62j3t9567k2z79nr6qn406kq',
    // chainId: "elgafar-1"
}

const defaultBech32Config = (
    mainPrefix,
    validatorPrefix = "val",
    consensusPrefix = "cons",
    publicPrefix = "pub",
    operatorPrefix = "oper"
  ) => {
    return {
      bech32PrefixAccAddr: mainPrefix,
      bech32PrefixAccPub: mainPrefix + publicPrefix,
      bech32PrefixValAddr: mainPrefix + validatorPrefix + operatorPrefix,
      bech32PrefixValPub:
        mainPrefix + validatorPrefix + operatorPrefix + publicPrefix,
      bech32PrefixConsAddr: mainPrefix + validatorPrefix + consensusPrefix,
      bech32PrefixConsPub:
        mainPrefix + validatorPrefix + consensusPrefix + publicPrefix,
    };
  };

const testnetConfig = {
    chainId: "castor-1",
    rpc: "https://rpc.castor-1.stargaze-apis.com/",
    rest: "https://rest.castor-1.stargaze-apis.com/",
    chainName: "Stargaze Test",
    bech32Config: defaultBech32Config("stars"),
    bip44: {
      coinType: 118,
    },
    stakeCurrency: {
      coinDenom: "STARS",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinGeckoId: "stargaze",
      coinImageUrl: "https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png",
    },
    nativeCurrency: "STARS",
    currencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinGeckoId: "stargaze",
        coinImageUrl: "https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinGeckoId: "stargaze",
        coinImageUrl: "https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png",
      },
    ],
    features: ["stargate", "no-legacy-stdTx", "ibc-transfer", "ibc-go"],
    chainSymbolImageUrl:
      "https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png",
    txExplorer: {
      name: "TestScan",
      txUrl: "http://38.242.223.192/castor-1/tx/{txHash}",
    },
  };