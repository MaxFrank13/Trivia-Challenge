# Trivia Challenge

## Description

This is an trivia game application that can be used to test your Jeopardy skills! Simply sign up using your email address and select a quiz from the dashboard to get started. Your score will be displayed on a public leaderboard for all to see! 

[Take a quiz!](https://boiling-reaches-95982.herokuapp.com/)

![Leaderboard screenshot](https://github.com/dpmurphy11/trivia-challenge/blob/main/assets/images/trivia-challenge-photo.png)

## Installation

   - Clone this repository to receive all of the files
   - Set up your environment variables in a .env file
   - Run `npm install` in the command line of your terminal to set up all of the dependencies
   - Initialize your database by running `SOURCE db/schema.sql;` in the MySQL shell
   - Run `npm run seed` to seed the database and then run `node buildQuizes.js` to populate the database with quizes
   - Run `npm start` to start the application's connection
   - Go to the url of the application (http//:localhost:3001) and you'll see it running

## Teachnologies Used

  1. HTML/CSS/JS
  2. Bootstrap
  3. Handlebars
  4. Axios
  5. TriviaDB API
  6. mySQL/Sequelize
  7. Express

## Contributors
  - Aaron Burzak
  - Don Murphy
  - Jancarlos Aguasvivas
  - Maxwell Frank

## Future Development

Adding a comment section for banter between users could be added to make the app more interactive and competitive. A way of preventing users from taking the quiz more than once or using the back-button to modify their score should be added to keep things fair. Allowing users to insert an avatar image and giving unique names for each quiz would help clean up the UI.