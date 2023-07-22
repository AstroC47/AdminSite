import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";

declare global {
    interface Window extends KeplrWindow {}
}


await window.keplr!.experimentalSuggestChain(this.getTestnetChainInfo())
