# demo loom : https://www.loom.com/share/5e672268f71d495ea6b03a134a1c5c95


# The Jobs Board 


## Description

This is a React.js application that allows candidates to view job listings from our partner companies and apply directly on our website. The application is backed by a Node.js server using MongoDB for storing job listings. The API is RESTful and allows the React application to perform basic CRUD operations on job listings as well as search for job listings using keywords.

## Dependencies

The following dependencies are used in this application:

- "@testing-library/jest-dom": "^5.16.5"
- "@testing-library/react": "^13.4.0"
- "@testing-library/user-event": "^13.5.0"
- "axios": "^1.3.6"
- "cors": "^2.8.5"
- "dotenv": "^16.0.3"
- "moment": "^2.29.4"
- "mongoose": "^7.0.4"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-media": "^1.10.0"
- "react-router-dom": "^6.10.0"
- "react-scripts": "5.0.1"
- "web-vitals": "^2.1.4"

## Pages

The following pages are available in this application:

- Home 
- HomeAdmin
- Search
- UpdateSingle
- NewSingle
- Single
- 404

Click on the Devjobs Logo of the Topbar
## Data Structure

The job listings are structured as follows:

- id: Numeric identifier
- company: Name of the company
- logo: URL of the company logo (always in SVG format without a background color)
- logoBackground: Background color to put behind the logo
- position: Name of the job position
- postedAt: When the listing was posted (date and time)
- contract: Type of contract (full time, part time, etc.)
- location: Country of the contract
- website: URL of the company website
- apply: Link to apply to the job listing (fake URL for now)
- description: Job listing description (first paragraph only)
- requirements:
  - content: Text for the "Requirements" section
  - items: Array for the list of requirements
- role:
  - content: Text for the "What You Will Do" section
  - items: Array for the list of job duties

## Installation

To run this application on your local machine, you will need to follow these steps:

1. Clone the repository.
2. Install the necessary dependencies by running `npm install` in both the root directory.
3. Create a `.env` file in the root directory of the back application and add the following variables:

   ```
   MONGO_URI=<Your MongoDB URI>
   ```

4. Start the server by running `npm start` in the root directory.(localhost:8000)
5. Start the client by running `npm start` in the root directory.(localhost:3000)

## API

The API for this application allows the following operations:

- GET `/api/jobs`: Get a list of all job listings.
- GET `/api/jobs/:id`: Get details of a single job listing.
- POST `/api/jobs`: Create a new job listing.
- PUT `/api/jobs/:id`: Update a job listing.
- DELETE `/api/jobs/:id`: Delete a job listing.

## Testing

To run the test suite for this application, run `npm test` in the root directory. This will run all tests using Jest and display the results in the console.
 
