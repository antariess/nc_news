## NC News front end project
This project is created as a block review for the Front End module of Northcoders. As a back end it uses database and api created in the respective nc module found here: https://github.com/antariess/BE-FT-northcoders-news.

On the front page all articles are displayed based on popularity which is the sum total of votes and likes. On the nav-bar: logo brings back to homepage, topics button opens a modal which lists all topics available with links to each. User icon brings up authentication, you have to be sineg in to post articles and comments, and to delete the comments posted by the user you are signed in as. As the back end does not offer a robust authentication, you can sign in as either: tricky122, jessjelly, grumpy19, cooljmessy or happyamy2016.

On each topic's page you can see all articles for that topic. You can also post a new article for that topic. If you press on an article title either on the home page or topic page you are redirected to the article's page where the full article is present and has a list of all it's comments. If signed in you can post a comment and delete your own comments.

You can like an article or comment without being signed in and if you change your mind you can undo your like. 

### Requirements:
    "axios": "^0.18.0",
    "bulma": "^0.7.1",
    "prop-types": "^15.6.2",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-icons": "^2.2.7",
    "react-router-dom": "^4.3.1",
    "react-scripts": "1.1.4"

### Installing and deploying
When in terminal run npm start in the project's main folder to start locally. The app has been deployed on: https://antariess-nc-news.netlify.com/

### Built using
React - The JS framework used
create-react-app
react-router-dom
Bulma - The CSS framework used

### Authors
Vel Georgieva
