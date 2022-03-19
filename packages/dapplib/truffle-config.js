require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword stool response rural upgrade guess end army general'; 
let testAccounts = [
"0x2d0dd4b1decaa6fb5cf1ed31e473f3f5ad873e7e6f6290f0f6ecb4ed3a131adb",
"0x9411abf91da8f766343918417da919d888a00a80d5d9836d1f32d45d26adad5d",
"0xed1e3d85aa57907da603ce9a2bfde99a5df7a9ae13a60d5c5fdcecfca688c448",
"0xc566fafb2c8ff09831ecd159e6bc648245c01f22c5d977b5d14b61618142825a",
"0xee7da34972e57c52367af7aafb008357e5bd5f3bd9461a9f495a0374bb57c939",
"0xa996e61f272719946b13e7593a1d02b23e36ac48e3ce0085e01ef02ae8ed9130",
"0x95b34e5046029eb9b2207e7350f75072f28ff404ae1373645a200ca29f13cb54",
"0xe824a4eddf0fd4aa73eb140c6a8a431de13acb34182a5c8e1e9b04c9c824260f",
"0x2b22218d679d45960fa10a1bdd7d3c65c40bed5742baaa11b55a2b566f662d3d",
"0x591b42b279c51c9f08cd90182c9769a7efaad8a7cb081afe05e6e3d896eb0bd1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


