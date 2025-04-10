Here is the instruction for running a Vite project with the environment variable VITE_API_URL=<http://localhost:9000>:

Step 1: Install Dependencies
First, you need to install all the project dependencies. Open your terminal and run the following command:

npm install
Step 2: Set the Environment Variable
To set the environment variable, create a .env file in the root directory of your project (if it doesn't exist already) and add the following line:

VITE_API_URL=<http://localhost:9000>
This file will be used to store the environment configuration, which will be accessible in your project.

Step 3: Start the Development Server
Once the environment variable is set, you can start the development server with the following command:

npm run dev
Step 4: Check the Application
After starting the server, open your application in the browser at <http://localhost:5173> (or another port specified in the Vite configuration).

The environment variable VITE_API_URL will be available in the code and will be used for API requests pointing to <http://localhost:9000>
