import React, {Component, useState} from 'react';
import Web3 from "web3";
import LoadingPage from "./LoadingPage";
import "../Styles/SendCoins.css"

export default function SendCoins({address}){

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(`payWithMetamask(receiver=${e.target.submitTo.value}, sender=${address}, strEther=${e.target.submitAmount.value})`)
        try {
            const params = {
                from: {address},
                to: `'${e.target.submitTo.value}'`,
                value:`"${e.target.submitAmount.value}"`,
                gas: 39000
            };
            await window.ethereum.enable();
            window.web3 = new Web3(window.ethereum);
            const sendHash = window.web3.eth.sendTransaction(params);
            console.log('txnHash is ' + sendHash);
        } catch(e) {
            console.log("payment fail!");
            console.log(e);
            return (<p>Can't connect MetaMask. Please check MetaMask.</p>);
        }
    }

    const sendEthButton = async (e) => {
        e.preventDefault();
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        window.ethereum.request({
            method: 'eth_sendTransaction',

            params: [
                {
                    from: accounts[0],
                    to: `${e.target.submitTo.value}`,
                    value: Number(e.target.submitAmount.value * 1e18).toString(16),
                },
            ],
        })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error);
    }

    return(
        <div className="form">
            <div className="form_fields">
                <form onSubmit={sendEthButton} className="form_design">
                    <label><h3>Receiver</h3></label>
                    <input  required  type="text" name="submitTo" />
                    <label><h3>Amount</h3></label>
                    <input  required  type="text" name="submitAmount" />
                    <button className="send">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}