
# URL Shortener

A simple and efficient URL shortener service built using Node.js and Express.js for the backend, with JWT for authentication and EJS for server-side rendering. The application uses MongoDB for data storage and includes features for user login, logout, and the ability to generate and display shortened URLs.

## Features

- User authentication using JWT
- Server-side rendering with EJS
- MongoDB for database storage
- User login and logout functionality
- URL shortening and retrieval
- Display of generated links for logged-in users

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. Install the necessary packages:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables. For example:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/urlshortener
   JWT_SECRET=your_jwt_secret
   ```

4. Start the MongoDB server if it's not already running:

   ```bash
   mongod
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.


## Technologies Used

- **Backend**: Node.js, Express.js
- **Authentication**: JWT
- **Templating Engine**: EJS
- **Database**: MongoDB
- **CSS Framework**: Bootstrap

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
