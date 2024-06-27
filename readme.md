Recipe Sharing Website
This project is a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to view, upload, and manage recipes. Recipes are visible to all users, but only registered users can upload new recipes, view their uploaded recipes, delete them, and vote on others' recipes.

Table of Contents
Features
Installation
Usage
API Endpoints
Technologies Used
Folder Structure
Contributing
License
Features
User Authentication: Register and log in using JWT authentication.
Public Recipes: View all recipes without authentication.
User Recipes: Registered users can upload, view, and delete their recipes.
Voting: Registered users can vote on recipes.

Installation

1. Clone the repository:
   git clone https://github.com/your-username/recipe-sharing-website.git
   cd recipe-sharing-website

2. Install server dependencies:
   npm install

3. Install client dependencies:
   cd client
   npm install
   cd ..

4. Create a .env file in the root directory and add the following environment variables:
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

5. Run the server:
   npm run dev

   This will concurrently run both the Express server and the React development server.

Usage
Register and log in:

Navigate to http://localhost:3000/register to create a new account. After registering, log in at http://localhost:3000/login.

View recipes:

Go to http://localhost:3000/recipes to view all recipes.

Create, view, and delete your recipes:

After logging in, you can create a new recipe at http://localhost:3000/create-recipe. View your uploaded recipes at http://localhost:3000/my-recipes and delete them if needed.

Vote on recipes:

While viewing all recipes, you can vote on any recipe.

API Endpoints
Auth Routes
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in a user and return a token.
Recipe Routes
GET /api/recipes: Get all recipes.
POST /api/recipes: Create a new recipe (requires authentication).
GET /api/recipes/my: Get all recipes uploaded by the logged-in user (requires authentication).
DELETE /api/recipes/:id: Delete a recipe by ID (requires authentication).
PUT /api/recipes/vote/:id: Vote for a recipe by ID (requires authentication).
Technologies Used
Frontend: React, Axios, React Router
Backend: Node.js, Express, Mongoose, JWT
Database: MongoDB

recipe-sharing-website/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/ # React components
│ ├── App.js # Main App component
│ ├── index.js # Entry point
│ └── ...
├── models/ # Mongoose models
│ ├── User.js
│ └── Recipe.js
├── routes/ # Express routes
│ ├── api/
│ │ ├── auth.js
│ │ └── recipes.js
├── middleware/
│ └── auth.js # Authentication middleware
├── .env # Environment variables
├── app.js # Entry point for the server
├── package.json
├── package-lock.json
└── README.md

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes relevant tests.

License
This project is licensed under the MIT License.
