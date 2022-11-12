import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'
import Hers from "../Icons/Hers.svg"

const injected = injectedModule()


const infuraKey = 'b280a6aa48a94b698a78d2f3acf0e892'

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

export default function LoadingPage() {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    return(
        <div id="loading_page">
            <div id="icon">
                {/*img will go here*/}

            </div>
            <div id="connect_wallet">
                <div>
                    <button
                        disabled={connecting}
                        onClick={() => (wallet ? disconnect({label: wallet.label}) : connect())}
                    >
                        {connecting ? 'connecting' : wallet ? 'disconnect' : 'Connect Wallet'}
                    </button>
                </div>
            </div>
        </div>
    )
}