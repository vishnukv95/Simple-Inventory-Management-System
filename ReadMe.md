A simple inveentry Management api using Node.js Express.js And MongoDB



# Features

1. Add new inventry items
2. Get All Inventry Items
3. MongoDB and Mongoos for data Presistance
4. Environment variable using dotenv


# Project Structure

Simple Inventry Management System/
│
├── controller/
│ └── itemController.js # Controller logic for routes
│
├── model/
│ └── itemModel.js # Mongoose schema and model
│
├── routes/
│ └── itemRoutes.js # All /items routes
│
├── .env # Environment variables
├── server.js # Main entry point
└── README.md # You're here

The sever will Run at : http://localhost:300

# Api Endpoints

GET   /items    Get All Items
post  /items    Add New Item
GET   /health   Server health
GET   /         Api Running Message