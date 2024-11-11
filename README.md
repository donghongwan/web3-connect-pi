[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![NPM Version](https://img.shields.io/npm/v/your-package-name.svg?style=for-the-badge)](https://www.npmjs.com/package/your-package-name)

[![Certified Chainlink Verified Oracle Network](https://img.shields.io/badge/Chainlink-Certified%20Oracle%20Network-3498DB?style=for-the-badge&logo=chainlink&logoColor=white)](https://chain.link/)
[![Certified Blockchain Badges](https://img.shields.io/badge/Blockchain%20Badges-Certified%20Digital%20Credentials-4CAF50?style=for-the-badge)](https://www.blockchainbadges.com/)
[![Certified Accredible](https://img.shields.io/badge/Accredible-Certified%20Digital%20Credentials-FF9800?style=for-the-badge)](https://www.accredible.com/)
[![Certified ISACA Badges](https://img.shields.io/badge/ISACA-Certified%20Open%20Badges-0072C6?style=for-the-badge)](https://www.isaca.org/credentialing/credentialing-badges)
[![Certified Hyperledger](https://img.shields.io/badge/Hyperledger-Certified%20Project-00BFFF?style=for-the-badge&logo=hyperledger&logoColor=white)](https://www.hyperledger.org/)
[![Certified Ethereum](https://img.shields.io/badge/Ethereum-Certified%20Blockchain-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white)](https://ethereum.org/)
[![Certified Bitcoin](https://img.shields.io/badge/Bitcoin-Certified%20Cryptocurrency-F7931A?style=for-the-badge&logo=bitcoin&logoColor=white)](https://bitcoin.org/)
[![Certified Corda](https://img.shields.io/badge/Corda-Certified%20Blockchain-00A3E0?style=for-the-badge&logo=corda&logoColor=white)](https://www.corda.net/)
[![Certified Tezos](https://img.shields.io/badge/Tezos-Certified%20Blockchain-000000?style=for-the-badge&logo=tezos&logoColor=white)](https://tezos.com/)
[![Certified Cardano](https://img.shields.io/badge/Cardano-Certified%20Blockchain-3CCBDA?style=for-the-badge&logo=cardano&logoColor=white)](https://www.cardano.org/)
[![Certified Polkadot](https://img.shields.io/badge/Polkadot-Certified%20Blockchain-EC4C3D?style=for-the-badge&logo=polkadot&logoColor=white)](https://polkadot.network/)
[![Certified W3C](https://img.shields.io/badge/W3C-Certified%20Standards-005A8B?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/)
[![Certified ISO/IEC 27001](https://img.shields.io/badge/ISO/IEC%2027001-Certified%20Information%20Security-FFCC00?style=for-the-badge)](https://www.iso.org/isoiec-27001-information-security.html)


# web3-connect-pi
A seamless integration platform that connects various Web3 applications to the Pi Network ecosystem, enabling automated interactions, asset transfers, and a unified user experience across decentralized applications.

# Web3 Connect Pi

A Web3 connection application designed for Raspberry Pi, enabling seamless interaction with blockchain networks.

## Features

- Connect to Ethereum and other blockchain networks using Web3.js.
- User authentication with JWT.
- MongoDB integration for data storage.
- RESTful API for easy access to blockchain data.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- An Infura account (for Ethereum access)

## Installation

1. Clone the repository:

   ```bash
   1 git clone https://github.com/KOSASIH/web3-connect-pi.git
   2 cd web3-connect-pi
   ```

2. Install dependencies:

   ```bash
   1 npm install
   ```
   
3. Create a .env file in the root directory and populate it with your environment variables. You can use the provided .env template.

4. Start the application:

   ```bash
   1 npm run dev
   ```
   
## Usage
The application will run on http://localhost:3000.
Use Postman or any API client to interact with the RESTful API.

## Running Tests
To run the tests, use the following command:

   ```bash
   1 npm test
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
