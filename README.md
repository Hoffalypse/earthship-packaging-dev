<p style="text-align: center">
  <img src=./frontend/public/images/Earthship-with-text-white.png width=700 >
<p>

## Index

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technology](#technology)
6. [Resources](#resources)
7. [License](#license)

## Description

MERN stack application with customer-facing e-commerce site and admin panel to control orders, users and products.

## Usage

This app is deployed using Heroku. From a development perspective, this app uses Node.js, Express.js, MongoDB, React and Redux. See the technology list below for more detail.

## Features

The following features exist:

1. Customer facing with home, with ability to add items to cart and complete checkout process through paypal.
2. Also user can contact Earthship Packaging for Quotes as a majority of their sales are business to business in bulk. 
3. The administration panel includes functionality to manage clients, orders(mark as shipped), and add new products. 
4. Allows for full client order tracking with purchase history and contact info for email marketing. 
5. Additional features include , 100% mobile responsiveness, input masks for phone, zip and email, PWA (downloadable as a local app and works online but not offline for the MVP), TinyURL integration and more.


## Technology

1. `React:`
2. `Git/Github:` Repo and version management.
3. `Mongo/Mongoose`: Database.
4. `React-Bootstrap`: For most of the CSS styling.
5. `express.js`: For GraphQL database query.
7. `jsonwebtoken/jwt decode`: For user authentication and token decoding.
8. `Heroku`: Deployment.
9. NPM Packages: `FontAwesome`, react-paypal-button-V2, redux, axios.
10. `PWA`: Is intallable as an app via PWA, and works online.

## Website Preview
<p style="text-align: center">

<p style="text-align: center">
 HOME PAGE PRODUCTS <br/>
<p style="text-align: center">
<img src=./frontend/public/images/products.png width=700 >
<p style="text-align: center">
INDIVIDUAL PRODUCT PAGE<br/>
<p style="text-align: center">
<img src=./frontend/public/images/pay-order.png width=700 >
<p style="text-align: center">
CHECKOUT PAGE<br/>
<p style="text-align: center">
<img src=./frontend/public/images/product-review.png width=700 >
<p style="text-align: center">
ADMIN USER PANEL <br/>
<p style="text-align: center">
<img src=./frontend/public/images/user-edit.png width=700 >
<p style="text-align: center">
ADMIN PRODUCT PANEL<br/>
<p style="text-align: center">
<img src=./frontend/public/images/admin-product.png width=700 ><br/>
ADMIN ORDER PANEL<br/>
<p style="text-align: center">
<img src=./frontend/public/images/order-track.png width=700 >

<p>

## Installation

Setup: 
- (1) Fork the repo, (2) Clone the forked repo locally, (3) Run "npm install" (to install the dependencies), (4) Seed = "npm run seeds", (5) Launch Server = "npm run dev".

Setup the Database Schema: 
- (1) Update or add an .env file. Include the fields below in the .env file. Note that the .env variables are used in the conf folder, connection.js file.


  * NODE_ENV = development
  * PORT = 3001
  * MONGO_URI =<url>
  * JWT_SECRET = <secret>
  * PAYPAL_CLIENT_ID =<PayPal-Client>

  

Login to The Application: 
* From the home page click "Sign In" in the upper right hand corner of the header. Use email address "admin@example.com" and password "123456". 
* Once logged in, the nav menu in the header will allow access to the Admin functionality (for users with admin rights).

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)


## Resources

1. GitHub Repo: <https://github.com/Hoffalypse/earthship-packaging-dev>
2. Heroku Deploy: <https://earthship-packaging.herokuapp.com/> 


## License

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the terms of the <span style="color:red">The MIT License</span>. Please click on the license badge for more information.