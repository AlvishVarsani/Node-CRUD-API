# Node CRUD App

A comprehensive and straightforward CRUD (Create, Read, Update, Delete) application built with Node.js and Express. This project provides a RESTful API to manage a collection of products, demonstrating essential web development concepts and techniques.

## Features

- **Create**: Add new products to the database.
- **Read**: Retrieve and list products from the database.
- **Update**: Modify existing product details.
- **Delete**: Remove products from the database.
- **Validation**: Ensure data integrity with input validation.
- **Error Handling**: Robust error handling for better debugging and user feedback.
- **Modular Architecture**: Clean separation of concerns with routers, controllers, and models.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module to load environment variables from a `.env` file into `process.env`.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Make sure you have MongoDB installed and running. You can download it from [mongodb.com](https://www.mongodb.com/).

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/node-crud-app.git
    cd node-crud-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file**:
    Create a `.env` file in the root directory and add your MongoDB URI and other environment variables:
    ```bash
    MONGO_URI=mongodb://localhost:27017/your-database-name
    PORT=3000
    ```

4. **Start the application**:
    ```bash
    npm start
    ```

    The server will be running on `http://localhost:3000`.

## API Endpoints

- `GET /api/products`: Retrieve all products.
- `POST /api/products`: Create a new product.
- `GET /api/products/:id`: Retrieve a product by ID.
- `PUT /api/products/:id`: Update a product by ID.
- `DELETE /api/products/:id`: Delete a product by ID.

## Project Structure

```bash
node-crud-app/
│
├── controllers/
│   ├── product.controller.js   # Product controller
│
├── models/
│   ├── product.model.js        # Product model
│
├── routers/
│   ├── products.router.js      # Product routes
│
├── .env                        # Environment variables
├── app.js                      # Entry point of the application
├── package.json                # Project metadata and dependencies
├── README.md                   # Project documentation
└── .gitignore                  # Files and directories to ignore in the repository
```
## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss your changes.
