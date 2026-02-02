# PERN Stack Application

A full-stack web application built with PostgreSQL, Express.js, React, and Node.js. This project demonstrates user authentication, database management, and a responsive frontend interface.

## Tech Stack

- **PostgreSQL** - Relational database management system
- **Express.js** - Backend web application framework for Node.js
- **React** - Frontend library for building user interfaces
- **Node.js** - JavaScript runtime environment

## Features

- User authentication and authorization
- Database management with PostgreSQL
- RESTful API endpoints
- Responsive frontend interface
- MVC architecture pattern

## Project Structure

```
PERN/
├── front/              # React frontend application
├── public/             # Static public assets
├── database.js         # Database connection configuration
├── main.js             # Main entry point
├── userController.js   # User-related controller logic
├── userModel.js        # User data models
├── userRoutes.js       # API route definitions
├── package.json        # Project dependencies
└── package-lock.json   # Locked dependency versions
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Thesageof69/PERN.git
cd PERN
```

2. Install dependencies
```bash
npm install
```

3. Set up PostgreSQL database
- Create a new PostgreSQL database
- Update database configuration in `database.js`

4. Start the application
```bash
npm start
```

## API Endpoints

The application provides RESTful API endpoints for:
- User registration and login
- CRUD operations for user data
- Authentication and session management

## Development

This project follows the MVC (Model-View-Controller) design pattern:
- **Models** (`userModel.js`) - Define data structure and database interactions
- **Views** (`front/`) - React components for user interface
- **Controllers** (`userController.js`) - Handle business logic and route handling



## License

 MIT License.

## Author

**Thesageof69**

## Acknowledgments

- Built as a learning project to demonstrate full-stack development skills
- Implements modern web development best practices
- Demonstrates proficiency in the PERN stack
