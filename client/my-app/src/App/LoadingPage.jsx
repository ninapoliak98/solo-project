import React, {useState} from 'react';
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import Onboard from '@web3-onboard/core'
import walletConnectModule from '@web3-onboard/walletconnect'
import Web3 from "web3";

const injected = injectedModule()

init({
    wallets: [injected],
    chains: [
        {
            id: '0x1',
            token: 'ETH',
            label: 'Ethereum',
            rpcUrl: 'https://mainnet.infura.io/v3/b280a6aa48a94b698a78d2f3acf0e892'
        }
    ]
})
const walletConnect = walletConnectModule({
    bridge: 'YOUR_CUSTOM_BRIDGE_SERVER',
    qrcodeModalOptions: {
        mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar']
    },
    connectFirstChainId: true
})
const onboard = Onboard({
    // ... other Onboard options
    chains: [
        {
            id: '0x1',
            token: 'ETH',
            label: 'Ethereum',
            rpcUrl: 'https://mainnet.infura.io/v3/b280a6aa48a94b698a78d2f3acf0e892'
        }
    ],
    wallets: [
        walletConnect, injected
        //... other wallets
    ]
})

export default function LoadingPage() {
    const [account, setAccount] = useState('')
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/b280a6aa48a94b698a78d2f3acf0e892"));

    async function getAccount() {
        const connectedWallets = await onboard.connectWallet()
        console.log(connectedWallets)
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const account = accounts[0];
        setAccount(account)
    }
    async function getBalance(acctNum) {
        await web3.eth.getBalance(acctNum, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(web3.utils.fromWei(result, "ether") + " ETH");
            }
        })
    }
    function handleClick () {
        wallet ? disconnect({label: wallet.label}) : connect()
        getAccount();
        getBalance()
    }
    return(
        <div id="loading_page">
            {account}
            <div id="connect_wallet">
                <div>
                    <button
                        disabled={connecting}
                        onClick={handleClick}
                    >
                        {connecting ? 'connecting' : wallet ? 'disconnect' : 'Connect Wallet'}
                    </button>
                </div>
            </div>
        </div>
    )
}