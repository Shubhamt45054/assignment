# Feedback Form Backend

This is the backend service for the Feedback Form application. It provides API endpoints for managing feedback submissions.

## Tech Stack

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **CORS**: For handling cross-origin requests
- **dotenv**: Environment variable management

## Project Structure

```
backend/
├── src/
│   ├── db/
│   │   └── index.js         # Database connection setup
│   ├── models/
│   │   └── feedback.model.js # Feedback data model
│   ├── routes/
│   │   └── feedbackroutes.js # API routes
│   └── controllers/
│       └── feedback.controller.js # Business logic
├── .env                     # Environment variables
├── index.js                 # Main application file
└── package.json             # Project dependencies
```

## API Endpoints

- `GET /api/feedback/feedbacks`: Get all feedbacks
- `POST /api/feedback/submit-feedback`: Create a new feedback

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
```

## Local Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file with required variables
4. Start the development server:
   ```bash
   npm run dev
   ```
