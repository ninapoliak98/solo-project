import React, {useState} from 'react';
import injectedModule from '@web3-onboard/injected-wallets'
import Onboard from '@web3-onboard/core'
import walletConnectModule from '@web3-onboard/walletconnect'
const walletConnect = walletConnectModule();
const injected = injectedModule();

const modules = [walletConnect, injected];

const onboard = Onboard({
    wallets: modules, // created in previous step
    chains: [
        {
            id: "0x1", // chain ID must be in hexadecimel
            token: "ETH",
            namespace: "evm",
            label: "Ethereum Mainnet",
            rpcUrl: 'https://mainnet.infura.io/v3/b280a6aa48a94b698a78d2f3acf0e892'
        },
        {
            id: "0x4",
            token: "rETH",
            namespace: "evm",
            label: "Ethereum Rinkeby Testnet",
            rpcUrl: "https://rinkeby.infura.io/v3/"
        }
    ],
    appMetadata: {
        name: "My App",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        description: "My app using Onboard",
        recommendedInjectedWallets: [
            { name: "MetaMask", url: "https://metamask.io" }
        ],
    }
});
export default function LoadingPage({setAccount}) {


    const connectWallet = async () => {
        try {
            const wallets = await onboard.connectWallet();
            console.log(wallets[0].accounts[0])
            return setAccount(wallets[0].accounts[0])

        } catch (error) {
            console.error(error);
        }
    };
    const disconnect = async () => {
        const [primaryWallet] = onboard.state.get().wallets;
        if (primaryWallet) await onboard.disconnectWallet({ label: primaryWallet.label });
        refreshState();
    };

    const refreshState = () => {
        setAccount({});
    };


    return(
        <div id="loading_page">
            <div id="connect_wallet">
                <div>
                    <button
                        onClick={connectWallet}
                    > connect
                    </button>
                    <button
                        onClick={disconnect}
                    > disconnect
                    </button>
                </div>
            </div>
        </div>
    )
}