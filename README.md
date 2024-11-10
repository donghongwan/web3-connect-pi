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
