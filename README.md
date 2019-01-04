[![World of Flags Frontend Trello Board](https://trello.com/b/ppUdNp6Q/cross-pollination-fe)](https://trello.com/b/ppUdNp6Q/cross-pollination-fe)

[![Build Status](https://travis-ci.org/alexanderela/cross_pollination_frontend.svg?branch=master)](https://travis-ci.org/alexanderela/cross_pollination_frontend)

# World of Flags

## Recharge while you recharge! With World of Flags, you can query a sophisticated API to find Electric Vehicle (EV) charging stations and nearby cafes anywhere in the US or Canada. A Heroku-hosted PostgreSQL relational database and well-documented API built with Node.js, Express, and Knex.js.

## How to Use
World of Flags on Heroku: [https://flagz4u-frontend.herokuapp.com/](https://flagz4u-frontend.herokuapp.com/).

### Developers:
#### Install and Start Server
* Clone this repo.

* `npm install`

* `npm start`

#### Create Postgres Database and Run Migrations
* `psql CREATE DATABASE rechargeables`

* `knex migrate:latest`

* `knex seed:run`

## Technologies Used
- React.js
- Redux
- Sass
- Node.js
- Express
- Knex.js
- Heroku

## Project Requirements
Project spec can be found [here](http://frontend.turing.io/projects/capstone.html).

## This is a partenered project designed and coded by Alex Bruce, Alexander Ela, Ben Hayek, and Tobin Nelson.