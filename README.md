# Google Books Search

Full stack application with a React frontend that uses the Google Books API to search for books and saves them to a Mongo database.  I built this project using the MERN stack. I deployed the site to Heroku, and connected the MongoDB using Mongo Atlas.  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Live Website](https://damp-shelf-31146.herokuapp.com/).

![Screenshot of Application](https://github.com/TomOverland/google-books-search/blob/main/client/public/assets/screenshot-of-google-books-search.JPG)


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Technology Used](#technology-used)
- [Built With](#built-with)
- [License](#license)
- [Questions](#questions)


## Description:

This full stack application allows a user to search for a book using an Google Book's API, and will display a list of search results on submit.  The user will be able to save books they are interested in, and view a list of saved books.  Books are saved to a Mongo database. This project was created using the MERN stack (MongoDB, Express, React and Node), and was based on a project prompt I received from the University of Minnesota's Full Stack Web Development Bootcamp. I deployed this application to Heroku and connected the database to Mongo Atlas.

![Demo of Application](https://github.com/TomOverland/google-books-search/blob/main/client/public/assets/demo-google-books-search.gif)


## Installation:

#### Step 1 - Make sure you have a code editor, Node.js, MongoDB and Node Package Manager installed

The code editor I used was Visual Studio Code. It can be found [here](https://code.visualstudio.com/download).  
Node.js and NPM download can be found [here](https://nodejs.org/en/).  
Community version of MongoDB can be found [here](https://www.mongodb.com/try/download/community).

#### Step 2 - Clone my repository

In your command terminal, type the following to clone this repository: "git clone https://github.com/TomOverland/google-books-search.git"

#### Step 3 - Move to the correct directory

Type the following in your command line: "cd google-search-books"

#### Step 4 - Install NPM dependencies

By typing "npm install" you will download all of the dependencies required for this application.

#### Step 5 - Start the application on your local server

Make sure you have MongoDB running in your terminal by typing "mongod" in your CLI.  
Type the following script in your command line: "npm run start" and your internet browser will open a webpage on localhost:3000 and a backend server on port 3001.  
I've included a seed file if you'd like to seed information. Run "npm run seed" to store The Hunger Games into your "saved" books.

## Technology used
* Node.js - Used to install dependencies and to make command line scripts.
* CSS 3 - Used to style the website
* Axios - Used to make an API call to https://www.googleapis.com/ to obtain book information
* Bootstrap - Used to structure the design of the site
* React - Used to create components and the front end of the website
* JSX - Used in conjunction with React to create the front end of the website
* Express - Used in conjunction with MongoDB to create the backend of the website.
* MongoDB - Used to store book information in a database.

## Built With
* VS Code - https://code.visualstudio.com/

## License:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

For more information about the license, click the link below:

- [License](https://opensource.org/licenses/)

## Contributing:

Everyone is welcome to contribute. Create a pull request with your changes and I will review it. Currently, I only have instructions written in English. Translations to other languages would be appreciated!

## Tests:

This application was not developed with any tests.

## Questions:

For more information about the application, please reach out to me via my [GitHub Profile](https://github.com/TomOverland).

For any other questions, please send me an email at: thomas.c.overland@gmail.com.
