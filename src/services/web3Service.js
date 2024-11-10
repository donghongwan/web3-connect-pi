// src/services/web3Service.js

const Web3 = require('web3');
const { abi, contractAddress } = require('../config/web3Config'); // Import contract ABI and address

class Web3Service {
    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER_URL));
        this.contract = new this.web3.eth.Contract(abi, contractAddress);
    }

    async getBalance(address) {
        try {
            const balance = await this.contract.methods.balanceOf(address).call();
            return this.web3.utils.fromWei(balance, 'ether'); // Convert from Wei to Ether
        } catch (error) {
            throw new Error('Error fetching balance: ' + error.message);
        }
    }

    async transferTokens(fromAddress, toAddress, amount, privateKey) {
        try {
            const value = this.web3.utils.toWei(amount.toString(), 'ether'); // Convert to Wei
            const gasPrice = await this.web3.eth.getGasPrice();
            const gasLimit = await this.contract.methods.transfer(toAddress, value).estimateGas({ from: fromAddress });

            const tx = {
                from: fromAddress,
                to: contractAddress,
                gas: gasLimit,
                gasPrice: gasPrice,
                data: this.contract.methods.transfer(toAddress, value).encodeABI(),
            };

            const signedTx = await this.web3.eth.accounts.signTransaction(tx, privateKey);
            const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            return receipt.transactionHash; // Return transaction hash
        } catch (error) {
            throw new Error('Error transferring tokens: ' + error.message);
        }
    }
}

module.exports = new Web3Service();
