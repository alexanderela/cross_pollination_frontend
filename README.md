[![Build Status](https://travis-ci.org/alexanderela/world-of-flags.svg?branch=master)](https://travis-ci.org/alexanderela/world-of-flags)

# World of Flags
World of flags is a mobile app designed to help users teach themselves the flags of the world.  Its underlying goal is to stimulate users’ curiosity about the world by familiarizing them  with different countries’ flags.

When interacting with World of Flags, users are shown  a randomly generated  flag from one of the world’s 193 countries and then can choose between 4 country options.

If they get stuck, users can request up to 2 hints about the country whose flag they are guessing.  These hints consist of facts about the country or an image of the country’s outline.  By viewing these hints, users can grow to associate different flags with facts about their countries.

As users correctly guess different flags, they will accumulate points.  In this way, World of Flags aims to make learning about the world a fun and enjoyable process.

## Deployed App
[World of Flags Front End](https://world-of-flags.herokuapp.com/)
[World of Flags Back End](https://world-of-flags-backend.herokuapp.com/)

#### Back End Repo
[World of Flags Back End](https://github.com/Tobin-jn/world-of-flags-backend)

## Getting Started
This is a general guide to setting up a Recharge API development environment on your local machine.

### Dependencies
* React.js
* Redux
* React Router
* Sass
* Node.js
* Express
* Knex.js
* Jest and Enzyme for testing
* See package.json for a list of required modules

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Developers:
#### Get the app on your local machine
* Fork this repo using the `Fork` button in the upper right corner of this page.

* `Clone` your fork onto your local machine
```
git clone https://github.com/YOUR_GITHUB_USERNAME_HERE/world-of-flags
```

* Jump into that directory on your local machine
```
cd world-of-flags
```

* Add an upstream remote that points to the main repo:
```
git remote add upstream https://github.com/alexanderela/world-of-flags.git
```

* Fetch the latest version of `master` from `upstream`
```
git fetch upstream master
```


#### Install and Start Server

* `npm install` all dependencies.

* `npm start` the development server.


### Contributing
This guide assumes that the git remote name of the main repo is `upstream` and that **your** fork is named `origin`.

Create a new branch on your local machine to make your changes against (based on `upstream/master`):
```
git checkout -b branch-name-here --no-track upstream/master
```
We recommend naming your branch using the following convention:
```
#(issueNumber)-feature-name-your-name
ex: 36-middleware-error-handling-alex
```

#### Contribute using GitHub Issues
* Click on the `Issues` tab at the top left of this page
* Choose one and work on your local machine to fix it  
  - We recommend naming your branch according to the above convention  
  - Use TDD as much as possible 
  - Once the tests are passing, you can commit your changes. See [Making a great commit for more tips](https://github.com/openfoodfoundation/openfoodnetwork/wiki/Making-a-great-commit).  
```
git add .
git commit -m "Add a concise commit message describing your change here"
```
  - Before pushing to your fork, rebase your commits against the upstream master branch
```
git pull --rebase upstream master
```
  - Push your changes to a branch on your fork:
```
git push origin branch-name-here
```

#### Submitting a Pull Request
* Create a Pull Request (PR) to this repo's master using GitHub's UI
* Fill in the requested information re: what you worked on
* Keep your PR small, with a single focus

## Technologies Used:
- React.js
- Redux
- React Router
- Sass
- Node.js
- Express
- Knex.js
- Heroku
- Travis CI

## Project Requirements:
Project spec can be found [here](http://frontend.turing.io/projects/capstone.html).
Project Trello board can be found [here](https://trello.com/b/ppUdNp6Q/cross-pollination-fe).

## This is a partenered project designed and coded by: 
* Alex Bruce - [Github.com/Alexbruce1](https://github.com/Alexbruce1)
* Alexander Ela - [Github.com/alexanderela](https://github.com/alexanderela)
* Ben Hayek - [Github.com/benjaminhayek](https://github.com/benjaminhayek)
* Tobin Nelson - [Github.com/Tobin-jn](https://github.com/Tobin-jn)

## Images:
### Main Game Page
![Main Game Page image](./src/images/app/main.png "Main Game Page")

### Landing Page
![Landing Page image](./src/images/app/landing.png "Landing Page")

### Login Page
![Login Page image](./src/images/app/login.png "Login Page")

### Account Page
![Account Page image](./src/images/app/account.png "Account Page")

### Hint (Country Fact) Page
![Hint Country Fact image](./src/images/app/hint-fact.png "Hint (Country Fact) Page")

### Hint (Country Outline) Page
![Hint Country Outline image](./src/images/app/hint-outline.png "Hint (Country Outline) Page")

## This README relied upon Open Food Source's extensive and excellent [Set Up](https://github.com/openfoodfoundation/openfoodnetwork/blob/master/GETTING_STARTED.md) and [Contibution](https://github.com/openfoodfoundation/openfoodnetwork/blob/master/CONTRIBUTING.md) docs.
