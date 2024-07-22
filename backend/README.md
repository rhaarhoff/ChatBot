# AI Chatbot Backend

This is the backend for the AI Chatbot application. It is built using Node.js, Express, TypeScript, and MongoDB. The backend handles user authentication, chat management, and integration with the OpenAI API.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CodeWithCass/ChatBot.git
   cd ChatBot/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the `backend/src` directory with the following content:

```env
OPENAI_KEY=your_openai_api_key
OPENAI_ORG_KEY=your_openai_org_key
MONGODB_URL=mongodb+srv://username:password@cluster0.mongodb.net/chatbot?retryWrites=true&w=majority&appName=Cluster0
JWT_KEY=your_jwt_secret
COOKIE_KEY=your_cookie_secret
PORT=5001
```

Replace `your_openai_api_key`, `your_openai_org_key`, `username`, `password`, `your_jwt_secret`, and `your_cookie_secret` with your actual credentials and desired secrets.

## Running the Application

To run the development server, use the following command:

```bash
npm run dev
```

This will start the server on the port specified in the `.env` file (default is 5001).

## API Endpoints

### User Routes

- **GET /user/**: Get all users.
- **POST /user/signup**: Sign up a new user.
- **POST /user/login**: Log in a user.
- **GET /user/auth-status**: Verify user authentication status.
- **GET /user/logout**: Log out a user.

### Chat Routes

- **POST /chats/new**: Create a new chat completion.
- **GET /chats/all-chats**: Get all chats for the authenticated user.
- **DELETE /chats/delete**: Delete all chats for the authenticated user.

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── openai-config.ts
│   ├── controllers/
│   │   ├── chat-controllers.ts
│   │   └── user-controller.ts
│   ├── db/
│   │   └── connection.ts
│   ├── models/
│   │   └── User.ts
│   ├── routes/
│   │   ├── chat-routes.ts
│   │   ├── index.ts
│   │   └── user-routes.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── token-manager.ts
│   │   └── validators.ts
│   ├── app.ts
│   └── index.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## Dependencies

- **bcrypt**: For hashing passwords.
- **concurrently**: To run multiple npm scripts concurrently.
- **cookie-parser**: To parse cookies attached to the client request object.
- **cors**: To enable Cross-Origin Resource Sharing.
- **dotenv**: To load environment variables from a `.env` file.
- **express**: Web framework for Node.js.
- **express-validator**: Middleware for validating and sanitizing request bodies.
- **jsonwebtoken**: For creating and verifying JWT tokens.
- **mongoose**: MongoDB object modeling for Node.js.
- **morgan**: HTTP request logger middleware.
- **openai**: SDK for OpenAI API.

## Development Dependencies

- **@types/bcrypt**: Type definitions for bcrypt.
- **@types/cookie-parser**: Type definitions for cookie-parser.
- **@types/cors**: Type definitions for cors.
- **@types/express**: Type definitions for Express.
- **@types/jsonwebtoken**: Type definitions for jsonwebtoken.
- **@types/node**: Type definitions for Node.js.
- **nodemon**: Automatically restart the server for Node.js changes.
- **ts-node**: TypeScript execution engine for Node.js.
- **typescript**: JavaScript with syntax for types.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Acknowledgements

Thanks to the OpenAI team for their API and to the contributors of the various open-source libraries used in this project.
```

### Additional Instructions

Ensure that all environment variables are correctly set up in the `.env` file and that the MongoDB connection string is properly configured. This will allow the backend to connect to the MongoDB database and the OpenAI API successfully.