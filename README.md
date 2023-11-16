# BeThere RSVP Application

Welcome to BeThere, an RSVP application for managing events and guest lists.

## Table of Contents

- [BeThere RSVP Application](#bethere-rsvp-application)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [License](#license)

## Introduction

BeThere is a web application that allows users to create and manage events, invite guests, and handle RSVPs. It provides a user-friendly interface for event planning and coordination.

## Features

- User authentication (signup, login, logout)
- Create and manage events
- Invite guests via email
- Accept or decline event invitations
- Update user profile
- Responsive design for various devices

## Technologies Used

- **Frontend:**
  - React
  - Apollo Client for GraphQL

- **Backend:**
  - Node.js
  - Express.js
  - GraphQL
  - MongoDB with Mongoose

- **Authentication:**
  - JWT (JSON Web Tokens)

- **Styling:**
  - CSS
  - Styled Components

- **Deployment:**
  - Heroku

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bethere.git
    ```

2. Navigate to the project directory:

   ```bash
   cd bethere
   ```

3. Install dependencies:

   ```bash
    npm install
    ```

4. Set up Set up environment variables:

Create a .env file in the root directory and add the necessary variables.

    REACT_APP_GRAPHQL_ENDPOINT=/graphql
    REACT_APP_API_URL=https://your-api-url.com

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open http://localhost:3000 to view it in the browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
