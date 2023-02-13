Password Checker API

This API checks the strength of a password based on a set of rules. The API is built using the Express.js framework and uses Body-Parser middleware to handle incoming JSON data.

Features

Checks the length of the password
Checks if the password contains at least one lowercase letter
Checks if the password contains at least one uppercase letter
Checks if the password contains at least one number
Checks if the password contains at least one special character
Provides a message indicating the strength of the password (weak, moderate, or strong)

Requirements

Node.js
npm

Installation

To install the dependencies, run the following command in the root directory of the project:

Copy code

npm install

Usage

To run the API, use the following command:

sql
Copy code
npm start

The API will be running on port 5000 (or the port specified in the PORT environment variable). To use the API, make a POST request to the /checkPassword endpoint with a JSON object containing the password to be checked, for example:

json
Copy code

{
  "password": "MyPassword1"
}

The API will return a JSON response indicating the success of the request and the message indicating the strength of the password.