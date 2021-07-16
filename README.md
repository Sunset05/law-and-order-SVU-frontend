# Getting Started with The Law and Order SVU API
Welcome to the Law and Order SVU API. With this application you can checkout some of the detectives that have appeared in the show, and also some of the most memorable perps   that they have busted.
The api for this project is hosted by Heroku.
  * to retrieve resources from the API you can send a GET to the following routes
  ```
  https://law-and-order-api.herokuapp.com/perps
  https://law-and-order-api.herokuapp.com/detectives
  https://law-and-order-api.herokuapp.com/episodes
  ```
  
# Table of Contents
- [Technologies](#Technologies)
- [Demo](#Demo)
- [Setup](#Setup)
- [Features](#Features)
- [Todo List](#Todo-list)
- [Contact](#Contact)

# Technologies
    - react v 17.0.2
    - bootstrap v^5.0.2
    - react-bootstrap v 1.6.1
    - react-router-dom v 5.2.0
    - react-script v 4.0.3
    - react-syntax-highlighter v ^15.4.3
    - semantic-ui-css v ^2.4.1
    - semantic-ui-react v ^2.0.3
    - node v 16.x
    - Rails v 6.1.4
    - Postgresql 
    
# Demo
[Youtube](https://youtu.be/KdwoW42bQ6o)
# Setup
to run this project on your local machine you need to clone this repository along with the backend repository [SVU-API-backend](https://github.com/Sunset05/law_and_order_api_backend). 

once you have both repositories on your machine cd into the backend folder and run a bundle install. once that is completed run the following commands.

    rails db:migrate
    rails d:seed
    rails s
Once your backend server has started on localhost:3000, ```cd``` into your frontend folder and run the following commands in your terminal

    npm install
    npm start

your project should be up and running at this point!

# Features
on the frontend of the SVU API you can see a list of the detectives that exist in the database, and you can also see a list of bad guys that they have encountered throughout their careers.

There is also an api documentation page to get more information about the reponsed that you will receieve from the backend.

# Todo List
    - create CRUD actions for adding perps and detectives to the api
    - fix image sizing issue.
    - add more information about schema of each model in the DOCs page

# Contact
created by Keith Funk:
[Linkedin](https://www.linkedin.com/in/keith-funk-7082a315b/)[Github](https://github.com/Sunset05)

Back To [Table of Contents](#table-of-contents)
