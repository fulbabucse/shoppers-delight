# Shopper's Delight

Shoppers Delight is an e-commerce website. This site's front end utilizes React and Redux. Node.js and Express.js manage the backend and MongoDB manages the Database. Authentication is handled by Google firebase. I used Stripe for taking payments.

## Features

- Users can purchase products these products through checkout & payments with Stripe
- Users can see their Orders/Payments Invoices.
- Users can Register with their Email and Password and then log in.
- Users can forget the password.
- Also, users can log in with Google.
- Properly Authorization is handled by Google firebase authentication.
- Unauthorized users can’t visit restricted routes & normal users can’t visit the admin dashboard.
- An admin can add new products and manage Products, categories, users, orders & payments via the dashboard.
- Notus React Admin Panel.

## Installations

```
Frontend
1. Clone the repository https://github.com/fulbabucse/shoppers-delight.git
2. npm install
3. Setup .env.local file
	- Server base URL (exam: http://localhost:5000)
	- Create a Firebase App
	- Stripe Public Key
	- ImgBB API Key
4. npm start

Backend
1. Clone the repository branch shopper-v2.0 https://github.com/fulbabucse/shoppers-delight-server.git
2. npm install
3. Setup .env file
	- PORT (exam: 5000)
	- DB_USERNAME (User name from MongoDB database)
	- DB_PASSWORD (Password from MongoDB database)
	- DATABASE_URI (Database URI link)
	- SECRET_TOKEN for JWT
	- STRIPE_SK (Stripe Secret key)
	- STRIPE_PK (Stripe Public Key)
	- Used Nodemon for Always auto start
4. nodemon index.js
```

### Admin Login

| Role  |        Email         | Password |
| :---- | :------------------: | -------: |
| Admin | fulbabucse@gmail.com |   F@him2 |
