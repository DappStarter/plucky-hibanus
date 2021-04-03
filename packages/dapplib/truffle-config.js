require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name reflect pitch equip hover process slot gate'; 
let testAccounts = [
"0x0f6d86db85dbb9c0c426bc8849fa043b4c9dbc5d8a774e72a1482feb63df42c6",
"0x55de74a2ffa4e9c45c74e873866fbc6585cdf9dec36702b0f3327867fedb27f4",
"0xc5ce9423667cd6093ff516e4141f6f0317979d13b48ec733771074075b753982",
"0xb153d3df6271d66ded97f6d9e14c4a5a09e0d8a77e386969651435781b33396f",
"0xc33e62ec6337f9c53dcab3180da6f4d0977b6f794d109633dc62cf56008349aa",
"0x061c2d4cf2a611f70f4b4545c272d33431d8b28c57d71eef284c659db964e4ba",
"0x241fbe51bd01b272e25a2181ba95d49093aadce8415acc96cd0ab4d2c79acaa7",
"0xce363d96bd22ca9e55dda1ee79b993dbffb83abf53485fd71fdebae426e0df8a",
"0xbaabcd89442b07f5b6b77f7a0201cea5292f9a9f792c4a96db26342dce94ccc9",
"0x6ac65ff8faa6c04481f449f9ae279f672a7638f79d7c643a93d7414c4578dc37"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
