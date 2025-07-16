People Management System
This repository contains a full-stack web application designed to manage a list of people, featuring a Single Page Application (SPA) built with Angular 7/8 for the frontend and a RESTful Web Service using Node.js and MongoDB for the backend.

Table of Contents
Project Overview

Features

Technologies Used

Prerequisites

Setup Instructions

Backend Setup (Node.js/MongoDB)

Frontend Setup (Angular 7/8)

Running the Application

API Endpoints

Folder Structure

License

1. Project Overview
The People Management System is a small web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of individuals. The application is divided into two main parts: a responsive Angular frontend for user interaction and a robust Node.js/Express.js backend for data management and API services, with MongoDB as the database.

2. Features
Frontend (Angular SPA)
List All People: Displays a table with a comprehensive list of all managed individuals.

Edit a Person: Provides a form to modify the details of an existing person, identified by their unique ID.

Delete a Person: Offers a confirmation page to remove a person from the list.

Add New Person: A dedicated form to create and add new person entries.

Responsive UI: Basic styling for a user-friendly experience.

Backend (Node.js RESTful Web Service)
RESTful API: Exposes standard REST endpoints for managing person data.

MongoDB Integration: Stores person data (Name, Age, Gender, Mobile Number) persistently in a MongoDB database.

Data Validation: Basic server-side validation for incoming data.

3. Technologies Used
Frontend
Angular 7/8: Frontend framework for building the Single Page Application.

TypeScript: Superset of JavaScript used for Angular development.

HTML5 / CSS3: For structuring and styling the web pages.

Angular CLI: Command-line interface for Angular development.

Backend
Node.js: JavaScript runtime environment.

Express.js: Web application framework for Node.js, used to build the RESTful API.

MongoDB: NoSQL database for storing person records.

Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.

dotenv: For managing environment variables.

cors: Middleware for enabling Cross-Origin Resource Sharing.

4. Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v12 or v14 recommended for Angular 7/8 compatibility):

It's highly recommended to use a Node Version Manager (like nvm for Linux/macOS or nvm-windows for Windows) to easily switch Node.js versions.

nvm install 14 and nvm use 14

npm (Node Package Manager): Comes with Node.js.

Angular CLI (v7 or v8):

npm install -g @angular/cli@7 # or @angular/cli@8

MongoDB: Ensure MongoDB Community Server is installed and running on your local machine (default port 27017).

5. Setup Instructions
Clone this repository to your local machine:

git clone https://github.com/your-username/The-Right-Doctor-Assignment.git
cd The-Right-Doctor-Assignment

Backend Setup (Node.js/MongoDB)
Navigate to the backend directory:

cd people-management-backend

Install Node.js dependencies:

npm install

Create a .env file in the people-management-backend directory and add your environment variables:

PORT=3000
MONGO_URI=mongodb://localhost:27017/people_db

Make sure your MongoDB server is running.

Frontend Setup (Angular 7/8)
Navigate to the frontend directory:

cd ../people-management-frontend

Install Angular dependencies:

npm install

If you encounter ERR_OSSL_EVP_UNSUPPORTED errors during npm install or ng serve, ensure you are using a compatible Node.js version (e.g., v12 or v14) or set the NODE_OPTIONS environment variable:

Windows (CMD): set NODE_OPTIONS=--openssl-legacy-provider

Linux/macOS: export NODE_OPTIONS=--openssl-legacy-provider

Run the command before npm install or ng serve.

6. Running the Application
1. Start the Backend Server
Open a terminal and navigate to people-management-backend:

cd people-management-backend
npm start # or npm run dev (if you installed nodemon)

The server will start on http://localhost:3000.

2. Start the Frontend Application
Open a new terminal and navigate to people-management-frontend:

cd people-management-frontend
ng serve --open

The Angular application will compile and open in your browser, typically at http://localhost:4200.

You can now interact with the People Management System!

7. API Endpoints
The backend provides the following RESTful API endpoints:

Method

Endpoint

Description

Request Body (JSON)

Response

GET

/person

Retrieves a list of all people.

None

Person[] (Array of Person objects)

POST

/person

Creates a new person.

{ "name": "...", "age": ..., "gender": "...", "mobile": "..." }

Person (Newly created Person object)

GET

/person/:id

Retrieves a single person by ID.

None

Person (Person object)

PUT

/person/:id

Updates an existing person by ID.

{ "name": "...", "age": ..., "gender": "...", "mobile": "..." } (Partial updates allowed)

Person (Updated Person object)

DELETE

/person/:id

Deletes a person by ID.

None

{ message: "Person deleted" }

Person Collection Fields:

name: String (Required)

age: Number (Required, non-negative)

gender: String (Required, e.g., 'Male', 'Female', 'Other')

mobile: String (Required, unique, e.g., 10 digits)

_id: String (MongoDB ObjectId, auto-generated)

createdAt: Date (Auto-generated by Mongoose)

updatedAt: Date (Auto-generated by Mongoose)

8. Folder Structure
.
├── people-management-backend/
│   ├── models/             # Mongoose schemas (e.g., person.js)
│   ├── routes/             # Express.js API routes (e.g., person.js)
│   ├── .env                # Environment variables
│   ├── server.js           # Main backend server entry point
│   └── package.json
└── people-management-frontend/
    ├── src/
    │   ├── app/
    │   │   ├── components/ # Angular components (list, edit, delete)
    │   │   ├── models/     # TypeScript interfaces (e.g., person.model.ts)
    │   │   ├── services/   # Angular services for API interaction
    │   │   ├── app-routing.module.ts
    │   │   ├── app.component.ts/.html/.css
    │   │   └── app.module.ts
    │   └── styles.css      # Global Angular styles
    └── ... (other Angular CLI files)

9. License
This project is open-source and available under the MIT License.

Author: Your Name (or Anurag Prajapati)