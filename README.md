# Blog Application Backend

This is a RESTful API built for a Blog Application using **Node.js**, **Express.js**, and **MongoDB**. This project was developed as part of Module 2 (Backend Development).

## 🚀 Features
- **User Authentication:** Secure Registration and Login using JSON Web Tokens (JWT) and password hashing with Bcrypt.js.
- **Blog Management:** Authenticated users can create new blog posts.
- **Middleware:** Protected routes that only allow access to verified users.
- **Environment Security:** Uses `.env` files to protect sensitive data like database strings and secret keys.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose ODM)
- **Security:** JWT (JSON Web Tokens), Bcrypt.js
- **Tools:** Dotenv, Cors

## 📂 Project Structure
```text
backend-blog/
├── middleware/    # Auth middleware for protected routes
├── models/        # Mongoose schemas (User, Blog)
├── routes/        # API endpoint definitions
├── .env           # Environment variables (Hidden)
├── server.js      # Main entry point
└── package.json   # Dependencies and scripts