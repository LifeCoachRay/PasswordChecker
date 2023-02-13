Password Strength Checker API

This API allows you to check the strength of a password. The API is built using Express and uses the body-parser middleware to parse incoming requests.

Getting Started

Before you can use the API, you need to have Node.js and npm installed on your machine.

Clone the repository to your local machine
Navigate to the project directory
Install the required packages using npm
Start the API by running the command npm start
The API will be running on port 5000 or the port specified in the PORT environment variable.

API Endpoint

The API has a single endpoint for checking password strength:

bash

Copy code

POST /checkPassword

The API expects a JSON object with a password field in the request body. The response will contain a success field indicating if the request was successful, a message field indicating the password strength, and a HTTP status code.