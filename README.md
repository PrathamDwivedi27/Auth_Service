Auth Service
The Auth Service is responsible for handling user authentication, authorization, and token management for the application. It includes features like user registration, login, token generation (JWT), and role-based access control (RBAC).

Features
User Registration: Allows new users to register with the system.
User Login: Authenticates registered users and provides access tokens.
JWT Token Generation: Generates JSON Web Tokens (JWT) for user authentication and session management.
Token Validation: Ensures that only valid and non-expired tokens can access protected routes.
Role-Based Access Control (RBAC): Limits access to certain features or routes based on user roles (e.g., Admin, User).
OAuth Support (Optional): OAuth integration for third-party login (Google, Facebook, etc.).
Prerequisites
Before you can run this service, ensure that you have the following installed:

Node.js (v14.x or later)
npm (v6.x or later)
MySQL/PostgreSQL/MongoDB (Choose your preferred database
