require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

const privateKey =
    "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "hardhat",
    paths: {
        artifacts: "./src/artifacts",
    },
    networks: {
        hardhat: {
            chainId: 1337,
        },
        ropsten: {
            url: "https://ropsten.infura.io/v3/b26e2fa5b1b5470b8f04b49ab0ea2de2",
            accounts: [`0x${privateKey}`],
        },
    },
    solidity: "0.8.4",
};
