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
  chainId: "elgafar-1",
  rpc: "https://rpc.elgafar-1.stargaze-apis.com/",
  rest: "https://rest.elgafar-1.stargaze-apis.com/",
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

const addTestnetToKeplr = async () => {
  let client;
  try {
    await window.keplr.enable(testnetConfig.chainId);
  } catch (e) {
    window.keplr.experimentalSuggestChain(testnetConfig);
  }
};

export { addTestnetToKeplr };
