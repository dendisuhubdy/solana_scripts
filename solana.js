//solana.js
const web3 = require('@solana/web3.js');

let connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'));

const getRecentBlockInfo = async () => {
    const recentInfo = await connection.getEpochInfo()
    console.log("~~~~~~~~~~~~~~~~~EPOCH INFO~~~~~~~~~~~~\n", recentInfo);
}

getRecentBlockInfo();

const keyPair = web3.Keypair.generate();

console.log("Public Key:", keyPair.publicKey.toString());
console.log("Secret Key:", keyPair.secretKey)

