# Backend Video Platform API

This project is a backend API for a video-sharing platform built using Node.js, Express.js, and MongoDB.  

The main goal of this project was to understand how production-style backend systems are structured using proper separation of concerns (MVC pattern), authentication middleware, and centralized error handling.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (file uploads)
- Cloudinary (media storage)

---

## Project Structure

The backend follows a modular MVC architecture:

src/
- controllers/ → Business logic
- models/ → MongoDB schemas
- routes/ → API routes
- middlewares/ → Authentication & file handling
- utils/ → Custom error and response handlers
- db/ → Database configuration

The goal was to keep the structure clean and scalable so that new features can be added easily.

---

## Features Implemented

### Authentication
- User registration and login
- JWT-based authentication
- Protected routes using custom auth middleware

### Video Management
- Video upload handling
- Cloudinary integration for media storage
- Video metadata storage in MongoDB

### Interaction System
- Like functionality
- Comment system
- Playlist support
- Subscription feature

---

## Custom Utilities

To avoid repetitive code and improve maintainability, I implemented:

- asyncHandler → to handle async errors without try-catch everywhere
- ApiError → standardized error handling
- ApiResponse → consistent API responses
- Cloudinary utility → abstraction for media uploads

This improved code readability and made the backend more production-ready.

---

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Pradum-Yadav12/Backend.git
cd Backend
```
2. Install dependencies:

npm install

3. Create a .env file and add:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4. Run the server:

npm run dev

