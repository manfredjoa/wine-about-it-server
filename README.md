# 🍷 Wine About it API 🍷

## Introduction

Welcome to the Wine About It Server Repository! This server is designed to support the "Wine About It" application, providing the backend functionality required for the app to run smoothly.

Within this API, there is data containing the type of wine, price of the wine, the country the wine originates from, and a detailed description of the wines themself.

## Table of Contents

- [Overview](#overview)

- [Features](#features)

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository contains the backend server code for the Wine About It application. This server is built using Mongo DB, [Express](https://expressjs.com/), and [Node.JS](https://nodejs.org/). It communicates with a database to manage and retrieve information/data related to the app.

## Features

-User authentication and authorization
-CRUD operations for wines, reviews, and user profiles
-RESTful API endpoints for seamless communication with the frontend
-Error handling and validation to ensure data integrity

## Getting Started

### Prerequisites

- Node.js (at least version 18.16.0)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/manfredjoa/wine-about-it-server.git
```

2. Navigate to the project directory:

```bash
cd wine-about-it-server
```

3. Install the required dependencies:

```bash
npm install
```

### Usage

To start the server, use the following command:

```bash
npm start
```

The server will run on the specified port, and you can access the API using the base URL provided in the console.

## API Endpoints

### POST /api/auth/register:

Register a new user.

### POST /api/auth/login:

Authenticate and log in a user.

### GET /api/wines:

Get a list of all wines.

### GET /api/wines/:id:

Get details of a specific wine.

### POST /api/wines:

Add a new wine.

### PUT /api/wines/:id:

Update details of a wine.

### DELETE /api/wines/:id:

Delete a wine.

### GET /api/reviews:

Get a list of all reviews.

### POST /api/reviews:

Add a new review.

### PUT /api/reviews/id:

Update a review.

### DELETE /api/reviews/id:

Delete a review.

### GET /api/profiles/id:

Get profile information for a user.

For more detailed information about each endpoint, refer to the API Documentation.

## Contributing

Contributions to the project are welcome! If you find a bug or want to add a new feature, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test thoroughly.
Commit your changes with a descriptive commit message.
Push your changes to your forked repository.
Create a pull request detailing your changes.
