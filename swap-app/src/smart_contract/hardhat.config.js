require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/-ozX6PUapbhkdLKE-P6ki5svoRoL2IBh',
      accounts: [
        '18a863537c062df81683d71220f5036e5770ea2ff01d2a26bbe8b34ea917b41a',
      ],
    },
  },
}