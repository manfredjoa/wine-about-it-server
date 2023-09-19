# 🍷 Wine About it Server 🍷

## Introduction

Welcome to the Wine About It Server Repository! This server is designed to support the **[Wine About It](https://wineaboutit.netlify.app/)** application, providing the API and backend functionality required for the app to run smoothly.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [CRUD Functionality](#crud-functionality)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository contains the backend server code for the **Wine About It** application. This server is built using [MongoDB](https://www.mongodb.com/), [Express.js](https://expressjs.com/), and [Node.js](https://nodejs.org/).

Within this API, there is data containing the type of wine, price of the wine, the country the wine originates from, and a detailed description of each wine.

## Features

- User authentication and authorization
- Error handling and validation to ensure data integrity
- CRUD operations for users, wines, and orders
- RESTful API endpoints for seamless communication with the client

## Getting Started

### Prerequisites

- Node.js (at least version 18.16.0)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```
git clone https://github.com/manfredjoa/wine-about-it-server.git
```

2. Navigate to the project directory:

```
cd wine-about-it-server
```

3. Install the required dependencies:

```
npm i
```

### Usage

To start the server, use the following command:

```
node server.js
```

This will start the server locally, and can be accessed in your browser at http://localhost:4000.

## CRUD Functionality

### User Endpoints

#### GET

- **_/users_** - Returns all users
- **_/users/id/:id_** - Returns a user by id
- **_/users/verify_** - Verifies a user's token and returns a payload

#### POST

- **_/users/register_** - Registers a new user
- **_/users/login_** - Logs in a user and adds a token to local storage

#### PATCH

- **_/users/:id/favorites_** - Adds a wine to a user's favorites
- **_/users/delete/:id/favorites_** - Removes a wine from a user's favorites

#### DELETE

- **_/users/:id_** - Deletes a user by id

### Wine Endpoints

#### GET

- **_/wines_** - Returns all wines
- **_/wines/id/:id_** - Returns a wine by id
- **_/wines/red_** - Returns all red wines
- **_/wines/white_** - Returns all white wines
- **_/wines/rose_** - Returns all rosé wines

### Order Endpoints

#### GET

- **_/order_** - Returns all orders
- **_/order/:id_** - Returns an order by id
- **_/order/user/:id_** - Returns all orders for a user

#### POST

- **_/order_** - Creates a new order

#### DELETE

- **_/order/:id_** - Deletes an order by id

## Contributing

Contributions are welcome! If you'd like to contribute to **Wine About It**, please follow these steps:

- Clone this repository
- Create a new branch for your feature by running `git checkout -b feature-name` in your terminal
- Run `git push -u origin feature-name` to set the remote branch
- `git add .` your modifications
- `git commit -m'(modifications description)'` to commit your changes
- `git push origin feature-name` to push your changes
- Create a pull request describing your changes

## Collaborators

1. Alan Malpartida

- [Portfolio](https://alanwebdev.com/)
- [GitHub](https://github.com/alantothe)
- [LinkedIn](https://www.linkedin.com/in/alan-malpartida-b0214428a/)

2. Manfred Joa

- [Portfolio](https://manfredjoadev.netlify.app)
- [GitHub](https://github.com/manfredjoa)
- [LinkedIn](https://www.linkedin.com/in/manfredjoa/)

&copy; 2023 Wine About It
