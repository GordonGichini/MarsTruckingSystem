# MarsTruckingSystem

This is Mars Trucking System application where we solve all your Logistics needs.

Prerequisites

Before you begin, ensure you have met the following requirements:

    Node.js and npm installed on your local development machine. You can download them from Node.js official website.

Getting Started

To get this project up and running on your local machine, follow these steps:

    Clone the repository:

    bash

git clone https://github.com/GordonGichini/MarsTruckingSystem.git
cd your-mern-app

Install server dependencies:

bash

cd backend
npm install

Create a .env file in the backend directory with the following content (customize it according to your needs):

env

PORT=5002
MONGODB_URI=mongodb+srv://gordongichini1:mUDzJ064sNgne1ss@cluster0.xm6xl0n.mongodb.net/test
SECRET_KEY=mysecretkey123

Replace the placeholders with your actual MongoDB credentials and connection details.

Start the server:

bash

npm start

The server should be running at http://localhost:5002.

Install client dependencies:

bash

cd ../frontend/mts
npm install

Start the client:

bash

    npm start

    The React development server should start, and your app will be available at http://localhost:3000.

Project Structure

    backend/: Contains the Node.js Express.js server.
    frontend/mts: Contains the React client application.

Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request.
License

This project is licensed under the MIT License - see the LICENSE file for details.
