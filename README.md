# Hirademy Assignment README

Welcome to the README for our backend application!

## Running the Application Locally

### Dependencies
- Node.js
- npm (Node Package Manager)
- MongoDB (or any other supported database)

### Setup Steps
1. Clone the repository to your local machine:
   
   git clone https://github.com/sahityanayak/Hirademy_assignment.git

2. Navigate to the project directory:

     cd backend-application 

3. Install dependencies using npm:

    npm install  
 
5. Configure environment variables:

    Create a .env file in the root directory.

    Add necessary environment variables such as database connection URI, API keys, etc.   

5. Start the application:
    
   npm start
    
6. The application should now be running locally. You can access it at http://localhost:3000 (or a different port if configured).

## API Points

POST /assistant: Creates a new record in the database and returns the id of the assistant.

GET /assistant/<assistant_id>: Retrieves the details of the assistant with the specified id.

PUT /assistant/<assistant_id>: Updates the details of the assistant with the specified id.

DELETE /assistant/<assistant_id>: Deletes the record of the assistant with the specified id.



## Postman Collection

A Postman collection is provided (AssistantAPI.json) with pre-configured requests for testing the API endpoints. Import the collection into Postman and execute the requests to interact with the API.

Please ensure to include the AssistantAPI.json file in your repository as mentioned in the README.md. Let me know if you need further assistance or if there's anything else I can help you with!
