# Food Delivery Web Application

## Overview

A simple food delivery web application built with:

- Node.js and Express
- Pug templates for server-side rendering
- Vanilla JavaScript and AJAX using `XMLHttpRequest`

## Features

- User registration and login
- Session-based authentication using `express-session`
- Profiles that can be public or private
- Order form submissions using AJAX
- Restaurant menus loaded dynamically
- User profile pages containing order history and individual order details
- User search page with case-insensitive searching
- Public users are shown by default, and search filters the visible users

## Requirements

- Node.js, v20+ recommended
- npm
- MongoDB running locally on `mongodb://localhost:27017`

## Folder Structure

Main files:

```text
.
|-- server.js
|-- database-initializer.js
|-- README.md
|-- public/
|   |-- orderform.js
|   |-- style.css
|   |-- add.png
|   `-- remove.png
`-- views/
    |-- layout.pug
    |-- orderform.pug
    |-- register.pug
    |-- login.pug
    |-- profile.pug
    |-- order-details.pug
    `-- users.pug
```

### File Notes

- `server.js` -> Main Express server
- `database-initializer.js` -> Script that resets and seeds the database with users
- `README.md` -> The file you are reading
- `public/orderform.js` -> Client-side logic for restaurant menus and ordering
- `public/style.css` -> Styles all Pug/HTML documents
- `public/add.png` and `public/remove.png` -> Images used for add and remove buttons in ordering
- `views/layout.pug` -> Base layout used by the pages
- `views/orderform.pug` -> Order form page
- `views/register.pug` -> Registration page
- `views/login.pug` -> Login page
- `views/profile.pug` -> User profile page and order history
- `views/order-details.pug` -> Single order details page
- `views/users.pug` -> User search page

## Setup Instructions

1. Install dependencies from the project root:

   ```bash
   npm install
   ```

   If starting from scratch, the dependencies used by this project are:

   ```bash
   npm install express pug mongoose mongodb express-session
   ```

2. Make sure MongoDB is running locally.

3. Reset and seed the database:

   ```bash
   node database-initializer.js
   ```

   Note: running this script resets the database too.

4. Start the server:

   ```bash
   node server.js
   ```

5. Open the app in your browser:

   ```text
   http://localhost:3000
   ```
6. If by any chance you do not have mongodb on your device, refer to https://www.mongodb.com/try/download/community to download MongoDB. 

## Design Choices

### 1. Pug Layout and Views

Pug is used because it allows a form of dynamic HTML, which is very useful for rendering pages on the server.

### 2. User Privacy

- `privacy` is a boolean on the `User` schema.
- The `/users` search route filters out private users.
- Viewing `/orders/:orderId` is restricted to the logged-in owner.

### 3. Orders

Orders are stored in an `Orders` collection with:

- `user`: an `ObjectId`
- `restaurantID` and `restaurantName`
- `subtotal`, `tax`, `fee`, and `total`
- `items`: an array of `{ itemId, name, quantity }`
- `createdAt`: timestamp

Orders are sorted by `createdAt` in descending order, and an order detail page shows one single order.

### 4. Sessions

Sessions are stored in memory using `express-session` for simplicity.

## Closing Note

That is all. Thank you for reading and grading :)
